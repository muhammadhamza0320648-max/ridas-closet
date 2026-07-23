import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import ProductDetail from './pages/ProductDetail'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import { products, categories } from './data/products'

function App() {
  const [page, setPage] = useState('home')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [wishlist, setWishlist] = useState([])
  const [activeCategory, setActiveCategory] = useState('All')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [page])

  const addToCart = (product, size, color, qty = 1) => {
    const existing = cart.find(item =>
      item.id === product.id && item.size === size && item.color === color
    )
    if (existing) {
      setCart(cart.map(item =>
        item.id === product.id && item.size === size && item.color === color
          ? { ...item, qty: item.qty + qty }
          : item
      ))
    } else {
      setCart([...cart, {
        ...product,
        size,
        color,
        qty,
        cartId: Date.now()
      }])
    }
  }

  const removeFromCart = (cartId) => {
    setCart(cart.filter(item => item.cartId !== cartId))
  }

  const updateCartQty = (cartId, newQty) => {
    if (newQty < 1) {
      removeFromCart(cartId)
      return
    }
    setCart(cart.map(item =>
      item.cartId === cartId ? { ...item, qty: newQty } : item
    ))
  }

  const toggleWishlist = (id) => {
    setWishlist(wishlist.includes(id)
      ? wishlist.filter(w => w !== id)
      : [...wishlist, id]
    )
  }

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0)
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0)

  const openProduct = (product) => {
    setSelectedProduct(product)
    setPage('product')
  }

  const goToShop = (category = 'All') => {
    setActiveCategory(category)
    setPage('shop')
  }

  return (
    <div className="min-h-screen bg-white font-body">
      <Navbar
        scrolled={scrolled}
        cartCount={cartCount}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setShowCart={setShowCart}
        setPage={setPage}
        goToShop={goToShop}
      />

      <CartDrawer
        showCart={showCart}
        setShowCart={setShowCart}
        cart={cart}
        removeFromCart={removeFromCart}
        updateCartQty={updateCartQty}
        cartTotal={cartTotal}
        setPage={setPage}
      />

      <main>
        {page === 'home' && (
          <HomePage
            products={products}
            categories={categories}
            openProduct={openProduct}
            goToShop={goToShop}
            toggleWishlist={toggleWishlist}
            wishlist={wishlist}
          />
        )}

        {page === 'shop' && (
          <ShopPage
            products={products}
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            searchQuery={searchQuery}
            openProduct={openProduct}
            toggleWishlist={toggleWishlist}
            wishlist={wishlist}
          />
        )}

        {page === 'product' && selectedProduct && (
          <ProductDetail
            product={selectedProduct}
            addToCart={addToCart}
            setShowCart={setShowCart}
            setPage={setPage}
          />
        )}

        {page === 'about' && <AboutPage />}
        {page === 'contact' && <ContactPage />}
      </main>

      <Footer setPage={setPage} goToShop={goToShop} categories={categories} />
    </div>
  )
}

export default App