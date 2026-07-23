import React, { useState } from 'react'
import { ShoppingBag, Menu, X, Search, Heart } from 'lucide-react'

const Navbar = ({ scrolled, cartCount, searchQuery, setSearchQuery, setShowCart, setPage, goToShop }) => {
  const [mobileMenu, setMobileMenu] = useState(false)

  const navLinks = [
    { label: 'Home', page: 'home' },
    { label: 'Shop', page: 'shop' },
    { label: 'About', page: 'about' },
    { label: 'Contact', page: 'contact' }
  ]

  const handleNavClick = (page) => {
    setPage(page)
    setMobileMenu(false)
    if (page === 'shop') goToShop('All')
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')} 
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center text-white font-display text-lg font-bold shadow-lg group-hover:scale-110 transition-transform">
              R
            </div>
            <span className={`font-display text-2xl font-bold tracking-wide transition-colors ${
              scrolled ? 'text-brand-dark' : 'text-white'
            }`}>
              Rida's Closet
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(item => (
              <button 
                key={item.page} 
                onClick={() => handleNavClick(item.page)}
                className={`text-sm font-medium tracking-wider uppercase transition-colors hover:text-brand-gold ${
                  scrolled ? 'text-brand-dark' : 'text-white/90'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            {/* Search Bar - Desktop */}
            <div className={`hidden md:flex items-center rounded-full px-4 py-2 border transition-all ${
              scrolled 
                ? 'bg-gray-100 border-gray-200' 
                : 'bg-white/20 backdrop-blur-sm border-white/30'
            }`}>
              <Search className={`w-4 h-4 ${scrolled ? 'text-gray-500' : 'text-white/70'}`} />
              <input 
                type="text" 
                placeholder="Search products..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => handleNavClick('shop')}
                className={`bg-transparent border-none outline-none ml-2 text-sm w-32 placeholder:text-current/50 ${
                  scrolled ? 'text-brand-dark' : 'text-white'
                }`}
              />
            </div>

            {/* Wishlist */}
            <button 
              onClick={() => handleNavClick('shop')} 
              className="hidden md:block"
            >
              <Heart className={`w-6 h-6 transition-colors ${
                scrolled ? 'text-brand-dark' : 'text-white'
              }`} />
            </button>

            {/* Cart */}
            <button 
              onClick={() => setShowCart(true)} 
              className="relative group"
            >
              <ShoppingBag className={`w-6 h-6 transition-colors ${
                scrolled ? 'text-brand-dark' : 'text-white'
              }`} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-gold text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setMobileMenu(!mobileMenu)} 
              className="md:hidden"
            >
              {mobileMenu ? (
                <X className={`w-6 h-6 ${scrolled ? 'text-brand-dark' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${scrolled ? 'text-brand-dark' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden bg-white border-t shadow-lg absolute w-full">
          <div className="px-4 py-4 space-y-3">
            {/* Mobile Search */}
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 mb-4">
              <Search className="w-4 h-4 text-gray-500" />
              <input 
                type="text" 
                placeholder="Search products..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => { handleNavClick('shop'); setMobileMenu(false); }}
                className="bg-transparent border-none outline-none ml-2 text-sm w-full text-brand-dark"
              />
            </div>
            {navLinks.map(item => (
              <button 
                key={item.page} 
                onClick={() => handleNavClick(item.page)}
                className="block w-full text-left text-brand-dark font-medium py-3 border-b border-gray-100 hover:text-brand-gold transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar