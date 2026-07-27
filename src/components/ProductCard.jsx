import React from 'react'
import { Heart, ShoppingBag, Star, MessageCircle } from 'lucide-react'
import { formatPKR } from '../data/products'

const ProductCard = ({ product, openProduct, toggleWishlist, wishlist }) => {
  const getBadgeColor = (badge) => {
    if (badge.includes('%')) return 'bg-red-500'
    if (badge === 'NEW') return 'bg-green-500'
    if (badge === 'HOT') return 'bg-orange-500'
    if (badge === 'BESTSELLER') return 'bg-gradient-to-r from-brand-gold to-yellow-500'
    return 'bg-brand-dark'
  }

  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100">

      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Badge */}
        {product.badge && (
          <span
            className={`absolute top-4 left-4 px-3 py-1 text-xs font-bold rounded-full text-white shadow-lg ${getBadgeColor(product.badge)}`}
          >
            {product.badge}
          </span>
        )}

        {/* Wishlist */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            toggleWishlist(product.id)
          }}
          className="absolute top-4 right-4 w-11 h-11 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:bg-white transition-all duration-300"
        >
          <Heart
            className={`w-5 h-5 ${
              wishlist.includes(product.id)
                ? 'fill-red-500 text-red-500'
                : 'text-gray-400 hover:text-red-500'
            }`}
          />
        </button>

        {/* Quick View */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={() => openProduct(product)}
            className="w-full bg-white text-brand-dark font-semibold py-3 rounded-full shadow-xl hover:bg-brand-gold hover:text-white transition-all duration-300"
          >
            Quick View
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">

        <p className="text-xs text-brand-gold font-bold uppercase tracking-[0.2em] mb-2">
          {product.category}
        </p>

        <h3 className="font-display text-xl font-bold text-brand-dark mb-3 line-clamp-1">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(product.rating)
                  ? 'fill-brand-gold text-brand-gold'
                  : 'text-gray-300'
              }`}
            />
          ))}

          <span className="text-sm text-gray-500 ml-1">
            ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-end gap-2 mb-5">
          <span className="text-2xl font-bold text-brand-dark">
            {formatPKR(product.price)}
          </span>

          {product.oldPrice && (
            <span className="text-sm text-gray-400 line-through">
              {formatPKR(product.oldPrice)}
            </span>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">

          <button
            onClick={() => openProduct(product)}
            className="flex-1 bg-gradient-to-r from-brand-dark to-black text-white py-3 rounded-full font-semibold hover:from-brand-gold hover:to-yellow-500 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            Add to Cart
          </button>

          <a
            href={`https://wa.me/923326284444?text=${encodeURIComponent(
              `I want to order: ${product.name} - ${formatPKR(product.price)}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 border-2 border-green-500 text-green-600 rounded-full hover:bg-green-500 hover:text-white transition-all duration-300 flex items-center justify-center shadow-md"
          >
            <MessageCircle className="w-5 h-5" />
          </a>

        </div>

      </div>
    </div>
  )
}

export default ProductCard