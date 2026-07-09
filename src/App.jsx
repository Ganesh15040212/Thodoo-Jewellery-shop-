import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './contexts/AppContext';
import { CartProvider } from './contexts/CartContext';
import { WishlistProvider } from './contexts/WishlistContext';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import ToastContainer from './components/Toast';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';
import Account from './pages/Account';
import Checkout from './pages/Checkout';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import About from './pages/About';

function App() {
  return (
    <AppProvider>
      <CartProvider>
        <WishlistProvider>
          <Router>
            <ScrollToTop />
            <Navbar />
            <CartDrawer />
            <ToastContainer />
            
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/catalog/:category" element={<Catalog />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/account" element={<Account />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/about" element={<About />} />
            </Routes>
            
            <Footer />
          </Router>
        </WishlistProvider>
      </CartProvider>
    </AppProvider>
  );
}

export default App;
