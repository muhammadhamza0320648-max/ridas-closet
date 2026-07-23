import React, { useState } from 'react'
import { ArrowRight, Star, Minus, Plus, ShoppingBag, MessageCircle, Truck, RotateCcw, Check } from 'lucide-react'
import { formatPKR } from '../data/products'

const ProductDetail = ({ product, addToCart, setShowCart, setPage }) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [qty, setQty] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [showAddedMessage, setShowAddedMessage] = useState(false)

  const images = product.images || [product.image, product.image, product.image, product.image]

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor, qty)
    setShowAddedMessage(true)
    setTimeout(() => setShowAddedMessage(false), 2000)
  }

  const handleBuyNow = () => {
    addToCart(product, selectedSize, selectedColor, qty)
    setShowCart(true)
  }

  const discount = product.oldPrice
    ? Math.round((1 - product.price / product.oldPrice) * 100)
    : 0

  const whatsappMessage = `Hello! I want to order:
• ${product.name}
• Size: ${selectedSize}
• Color: ${selectedColor}
• Quantity: ${qty}
• Total: ${formatPKR(product.price * qty)}`

  return (
    <div className="pt-24 pb-20 bg-brand-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => setPage('shop')}
          className="flex items-center gap-2 text-gray-600 hover:text-brand-gold mb-8 transition-colors"
        >
          <ArrowRight className="w-4 h-4 rotate-180" /> Back to Shop
        </button>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-white shadow-lg">
              <img
                src={images[activeImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${activeImage === idx ? 'border-brand-gold shadow-md' : 'border-transparent opacity-70 hover:opacity-100'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-brand-gold font-semibold uppercase tracking-wider text-sm mb-2">
                {product.category}
              </p>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-brand-dark mb-4">
                {product.name}
              </h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-brand-gold text-brand-gold' : 'text-gray-200'}`}
                    />
                  ))}
                </div>
                <span className="text-gray-500">{product.reviews} Reviews</span>
                <span className="text-green-600 text-sm font-medium">✓ In Stock</span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-4">
              <span className="text-4xl font-bold text-brand-dark">{formatPKR(product.price)}</span>
              {product.oldPrice && (
                <>
                  <span className="text-2xl text-gray-400 line-through">{formatPKR(product.oldPrice)}</span>
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-bold">
                    Save {discount}%
                  </span>
                </>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">{product.description}</p>

            {/* Fabric Details */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-semibold text-brand-dark mb-3">Fabric & Details</h3>
              <ul className="space-y-2">
                {product.details?.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
                    <Check className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                    {detail}
                  </li>
                )) || <li className="text-gray-600 text-sm">{product.fabric} - Premium quality fabric with intricate embroidery work.</li>}
              </ul>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="font-semibold text-brand-dark mb-3">Select Size</h3>
              <div className="flex gap-3">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 rounded-xl font-semibold border-2 transition-all ${selectedSize === size ? 'border-brand-gold bg-brand-gold/10 text-brand-gold' : 'border-gray-200 text-brand-dark hover:border-brand-gold'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="font-semibold text-brand-dark mb-3">Select Color</h3>
              <div className="flex gap-3">
                {product.colors.map((color, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 rounded-full border-2 transition-all ${selectedColor === color ? 'border-brand-dark scale-110 shadow-md' : 'border-gray-200'}`}
                    style={{ backgroundColor: color }}
                    aria-label={`Color ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4">
              <h3 className="font-semibold text-brand-dark">Quantity</h3>
              <div className="flex items-center border-2 border-gray-200 rounded-xl">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="w-10 h-10 flex items-center justify-center hover:bg-gray-50"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-semibold">{qty}</span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="w-10 h-10 flex items-center justify-center hover:bg-gray-50"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-brand-dark text-white py-4 rounded-xl font-semibold hover:bg-brand-gold transition-all shadow-lg flex items-center justify-center gap-2 relative"
              >
                <ShoppingBag className="w-5 h-5" />
                {showAddedMessage ? 'Added!' : `Add to Cart - ${formatPKR(product.price * qty)}`}
              </button>
              <button
                onClick={handleBuyNow}
                className="flex-1 bg-brand-gold text-white py-4 rounded-xl font-semibold hover:bg-brand-rose transition-all shadow-lg"
              >
                Buy Now
              </button>
            </div>

            {/* WhatsApp Order */}
            <a
              href={`https://wa.me/923326284444?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-green-500 text-white py-4 rounded-xl font-semibold hover:bg-green-600 transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" /> Order on WhatsApp
            </a>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Truck className="w-5 h-5 text-brand-gold" />
                <span>Free Delivery</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <RotateCcw className="w-5 h-5 text-brand-gold" />
                <span>7-Day Exchange</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail