import React from 'react'
import ProductCard from '../components/ProductCard'

const ShopPage = ({ products, categories, activeCategory, setActiveCategory, searchQuery, openProduct, toggleWishlist, wishlist }) => {
  const allCategories = ['All', ...categories.map(c => c.name)]

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory)

  const searchProducts = searchQuery 
    ? products.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : filteredProducts

  return (
    <div className="pt-24 pb-20 bg-brand-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-brand-dark mb-4">
            Our Collection
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our carefully curated selection of premium Pakistani suits, 
            from everyday casual wear to luxurious festive ensembles.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {allCategories.map(cat => (
            <button 
              key={cat} 
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeCategory === cat 
                  ? 'bg-brand-dark text-white shadow-lg scale-105' 
                  : 'bg-white text-brand-dark hover:bg-brand-gold hover:text-white border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Results Info */}
        {searchQuery && (
          <div className="mb-8 text-center">
            <p className="text-gray-600">
              Search results for <span className="font-semibold text-brand-dark">"{searchQuery}"</span>
              <span className="text-gray-400 ml-2">({searchProducts.length} found)</span>
            </p>
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {searchProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              openProduct={openProduct}
              toggleWishlist={toggleWishlist}
              wishlist={wishlist}
            />
          ))}
        </div>

        {/* Empty State */}
        {searchProducts.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <p className="text-gray-500 text-lg font-medium">No products found</p>
            <p className="text-gray-400 text-sm mt-2">Try adjusting your search or category filter</p>
            <button 
              onClick={() => { setActiveCategory('All'); }}
              className="mt-4 text-brand-gold font-semibold hover:underline"
            >
              View All Products
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default ShopPage