import { useRef, useCallback } from 'react';

/**
 * useMarqueeDrag — Adds mouse-drag and touch-drag horizontal scroll to a marquee container.
 * When the user drags, the CSS animation pauses and manual scrollLeft takes over.
 * When released, the animation resumes from the same visual offset.
 *
 * Usage:
 *   const { containerRef, dragProps } = useMarqueeDrag();
 *   <div ref={containerRef} {...dragProps}>...</div>
 */
export function useMarqueeDrag() {
  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);
  const trackRef = useRef(null);
  const animOffset = useRef(0);

  // Resolve the inner track element (first child of container)
  const getTrack = () => {
    if (!containerRef.current) return null;
    return containerRef.current.querySelector('[class*="-marquee-track"], [class*="-ticker-"]');
  };

  const pauseAnimation = useCallback(() => {
    const track = getTrack();
    if (!track) return;
    trackRef.current = track;
    // Read computed transform to capture current visual position
    const style = window.getComputedStyle(track);
    const matrix = new DOMMatrix(style.transform);
    animOffset.current = matrix.m41; // translateX value in px
    // Freeze animation
    track.style.animationPlayState = 'paused';
    track.style.transform = `translateX(${animOffset.current}px)`;
    track.style.willChange = 'transform';
  }, []);

  const resumeAnimation = useCallback(() => {
    const track = trackRef.current || getTrack();
    if (!track) return;
    // Clear manual override and let CSS animation run again
    track.style.transform = '';
    track.style.willChange = '';
    track.style.animationPlayState = 'running';
  }, []);

  const onMouseDown = useCallback((e) => {
    if (e.button !== 0) return; // left button only
    isDragging.current = true;
    startX.current = e.clientX;
    pauseAnimation();
    startScrollLeft.current = animOffset.current;
    if (containerRef.current) containerRef.current.style.cursor = 'grabbing';
  }, [pauseAnimation]);

  const onMouseMove = useCallback((e) => {
    if (!isDragging.current || !trackRef.current) return;
    e.preventDefault();
    const delta = e.clientX - startX.current;
    trackRef.current.style.transform = `translateX(${startScrollLeft.current + delta}px)`;
  }, []);

  const onMouseUp = useCallback(() => {
    if (!isDragging.current) return;
    isDragging.current = false;
    if (containerRef.current) containerRef.current.style.cursor = '';
    resumeAnimation();
  }, [resumeAnimation]);

  const onMouseLeave = useCallback(() => {
    if (isDragging.current) {
      isDragging.current = false;
      if (containerRef.current) containerRef.current.style.cursor = '';
      resumeAnimation();
    }
  }, [resumeAnimation]);

  // Touch support
  const onTouchStart = useCallback((e) => {
    startX.current = e.touches[0].clientX;
    pauseAnimation();
    startScrollLeft.current = animOffset.current;
    isDragging.current = true;
  }, [pauseAnimation]);

  const onTouchMove = useCallback((e) => {
    if (!isDragging.current || !trackRef.current) return;
    const delta = e.touches[0].clientX - startX.current;
    trackRef.current.style.transform = `translateX(${startScrollLeft.current + delta}px)`;
  }, []);

  const onTouchEnd = useCallback(() => {
    isDragging.current = false;
    resumeAnimation();
  }, [resumeAnimation]);

  const dragProps = {
    onMouseDown,
    onMouseMove,
    onMouseUp,
    onMouseLeave,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    style: { cursor: 'grab', userSelect: 'none' },
  };

  return { containerRef, dragProps };
}
