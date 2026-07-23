import React from 'react'
import { Heart, ShoppingBag, Star, MessageCircle } from 'lucide-react'
import { formatPKR } from '../data/products'

const ProductCard = ({ product, openProduct, toggleWishlist, wishlist }) => {
  const getBadgeColor = (badge) => {
    if (badge.includes('%')) return 'bg-red-500'
    if (badge === 'NEW') return 'bg-green-500'
    if (badge === 'HOT') return 'bg-orange-500'
    if (badge === 'BESTSELLER') return 'bg-brand-gold'
    return 'bg-brand-dark'
  }

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100">
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />

        {/* Badge */}
        {product.badge && (
          <span className={`absolute top-4 left-4 px-3 py-1 text-xs font-bold rounded-full text-white ${getBadgeColor(product.badge)}`}>
            {product.badge}
          </span>
        )}

        {/* Wishlist Button */}
        <button 
          onClick={(e) => { e.stopPropagation(); toggleWishlist(product.id); }}
          className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors"
          aria-label={wishlist.includes(product.id) ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart 
            className={`w-5 h-5 transition-colors ${
              wishlist.includes(product.id) 
                ? 'fill-red-500 text-red-500' 
                : 'text-gray-400 hover:text-red-400'
            }`} 
          />
        </button>

        {/* Quick View Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button 
            onClick={() => openProduct(product)}
            className="w-full bg-white text-brand-dark font-semibold py-3 rounded-xl shadow-lg hover:bg-brand-gold hover:text-white transition-colors"
          >
            Quick View
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-xs text-brand-gold font-semibold uppercase tracking-wider mb-1">
          {product.category}
        </p>
        <h3 className="font-display text-lg font-semibold text-brand-dark mb-2 line-clamp-1">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-4 h-4 ${
                i < Math.floor(product.rating) 
                  ? 'fill-brand-gold text-brand-gold' 
                  : 'text-gray-200'
              }`} 
            />
          ))}
          <span className="text-sm text-gray-500 ml-1">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-xl font-bold text-brand-dark">{formatPKR(product.price)}</span>
          {product.oldPrice && (
            <span className="text-sm text-gray-400 line-through">{formatPKR(product.oldPrice)}</span>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <button 
            onClick={() => openProduct(product)}
            className="flex-1 bg-brand-dark text-white py-2.5 rounded-xl font-medium hover:bg-brand-gold transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" /> Add to Cart
          </button>
          <a 
            href={`https://wa.me/923326284444?text=${encodeURIComponent(`I want to order: ${product.name} - ${formatPKR(product.price)}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 border-2 border-green-500 text-green-600 rounded-xl font-medium hover:bg-green-500 hover:text-white transition-colors flex items-center justify-center"
            aria-label="Order on WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProductCard