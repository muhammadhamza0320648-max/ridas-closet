import React from 'react'
import { X, ShoppingBag, Plus, Minus, MessageCircle, ArrowRight } from 'lucide-react'
import { formatPKR } from '../data/products'

const CartDrawer = ({ showCart, setShowCart, cart, removeFromCart, updateCartQty, cartTotal, setPage }) => {
  const whatsappNumber = "923326284444"

  const generateWhatsAppMessage = () => {
    const items = cart.map(item => 
      `• ${item.name}\n  Size: ${item.size} | Qty: ${item.qty} | Price: ${formatPKR(item.price * item.qty)}`
    ).join('\n\n')

    return `Hello Rida's Closet! 👋\n\nI would like to order the following items:\n\n${items}\n\n*Total: ${formatPKR(cartTotal)}*\n\nPlease confirm my order. Thank you!`
  }

  return (
    <div className={`fixed inset-0 z-[60] transition-opacity duration-300 ${
      showCart ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
        onClick={() => setShowCart(false)} 
      />

      {/* Drawer */}
      <div className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl transition-transform duration-500 ${
        showCart ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b flex items-center justify-between bg-brand-cream">
            <div>
              <h2 className="font-display text-2xl font-bold text-brand-dark">Shopping Cart</h2>
              <p className="text-sm text-gray-500 mt-1">{cart.length} {cart.length === 1 ? 'item' : 'items'}</p>
            </div>
            <button 
              onClick={() => setShowCart(false)} 
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors shadow-sm"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-20">
                <ShoppingBag className="w-16 h-16 text-gray-200 mx-auto mb-4" />
                <p className="text-gray-500 text-lg font-medium">Your cart is empty</p>
                <p className="text-gray-400 text-sm mt-2">Add some beautiful suits to get started</p>
                <button 
                  onClick={() => { setShowCart(false); setPage('shop'); }}
                  className="mt-6 text-brand-gold font-semibold hover:underline inline-flex items-center gap-1"
                >
                  Continue Shopping <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              cart.map(item => (
                <div 
                  key={item.cartId} 
                  className="flex gap-4 bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-20 h-24 object-cover rounded-lg flex-shrink-0" 
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-brand-dark line-clamp-1">{item.name}</h4>
                    <p className="text-sm text-gray-500 mt-1">
                      Size: {item.size} | Color:{' '}
                      <span 
                        className="inline-block w-3 h-3 rounded-full align-middle border border-gray-300" 
                        style={{ backgroundColor: item.color }} 
                      />
                    </p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-gray-200 rounded-lg bg-white">
                        <button 
                          onClick={() => updateCartQty(item.cartId, item.qty - 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-gray-50 rounded-l-lg"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-sm font-semibold">{item.qty}</span>
                        <button 
                          onClick={() => updateCartQty(item.cartId, item.qty + 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-gray-50 rounded-r-lg"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="font-bold text-brand-dark">{formatPKR(item.price * item.qty)}</span>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.cartId)}
                      className="text-red-400 hover:text-red-600 text-xs font-medium mt-2 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="p-6 border-t bg-gray-50 space-y-3">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-bold text-2xl text-brand-dark">{formatPKR(cartTotal)}</span>
              </div>
              <p className="text-xs text-gray-400 mb-4">Shipping calculated at checkout</p>

              <button 
                onClick={() => alert('Checkout feature coming soon with Shopify integration!')}
                className="w-full bg-brand-dark text-white py-4 rounded-xl font-semibold hover:bg-brand-gold transition-colors shadow-lg"
              >
                Proceed to Checkout
              </button>

              <a 
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(generateWhatsAppMessage())}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-500 text-white py-4 rounded-xl font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageCircle className="w-5 h-5" /> Order via WhatsApp
              </a>

              <button 
                onClick={() => { setShowCart(false); setPage('shop'); }}
                className="w-full text-gray-500 py-2 text-sm hover:text-brand-dark transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CartDrawer