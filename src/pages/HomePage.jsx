import React from 'react'
import { ArrowRight, MessageCircle, ChevronRight, Star, Truck, RotateCcw, Shield, Zap } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { formatPKR } from '../data/products'

const HomePage = ({ products, categories, openProduct, goToShop, toggleWishlist, wishlist }) => {
  const features = [
    { icon: Truck, title: "Cash on Delivery", desc: "Pay when you receive your order" },
    { icon: RotateCcw, title: "Easy Exchange", desc: "7-day hassle-free exchange policy" },
    { icon: Shield, title: "Quality Fabric", desc: "Premium materials guaranteed" },
    { icon: Zap, title: "Fast Delivery", desc: "2-4 days nationwide delivery" }
  ]

  const trendingProducts = products.slice(0, 4)

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=1920&h=1080&fit=crop"
            alt="Premium Pakistani Fashion" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-brand-dark/50 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl animate-fade-in">
            <p className="text-brand-gold font-medium tracking-[0.3em] uppercase mb-4 text-sm">
  Rida's Exclusive Collection
</p>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
             Timeless Elegance<br/>For The Modern Woman
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8 leading-relaxed max-w-lg">
              Discover premium lawn, embroidered and stylish ladies wear at affordable prices. 
              Curated for the modern Pakistani woman.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => goToShop('All')} 
                className="bg-brand-gold text-white px-8 py-4 rounded-full font-semibold hover:bg-brand-rose transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
              >
                Shop Collection <ArrowRight className="w-5 h-5" />
              </button>
              <a 
                href="https://wa.me/923326284444" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" /> Order on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white rounded-full" />
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-brand-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-gold transition-colors duration-300">
                  <f.icon className="w-8 h-8 text-brand-gold group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-white font-semibold mb-1">{f.title}</h3>
                <p className="text-white/60 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-brand-gold font-medium tracking-[0.2em] uppercase text-sm mb-2">
              Browse Our Collection
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-dark">
              Shop by Category
            </h2>
            <div className="w-24 h-1 bg-brand-gold mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {categories.map((cat, idx) => (
              <button 
                key={idx} 
                onClick={() => goToShop(cat.name)} 
                className="group relative overflow-hidden rounded-2xl aspect-[3/4] shadow-md hover:shadow-xl transition-all duration-500"
              >
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                  <h3 className="text-white font-display text-lg font-semibold">{cat.name}</h3>
                  <p className="text-white/70 text-sm mt-1">{cat.count} Products</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
{/* Premium Sale Banner */}
<section className="py-16 bg-brand-dark">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-gold to-brand-rose p-8 md:p-12 text-center shadow-xl">

      <div className="relative z-10">
        <p className="text-white uppercase tracking-[0.3em] text-sm mb-3">
          New Collection
        </p>

        <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
          Premium Fashion Sale
        </h2>

        <p className="text-white/90 text-lg mb-8">
          Discover elegant styles with exclusive offers.
        </p>

        <button
          onClick={() => goToShop('All')}
          className="bg-white text-brand-dark px-8 py-3 rounded-full font-semibold hover:bg-brand-dark hover:text-white transition-all shadow-lg"
        >
          Shop Now
        </button>
      </div>

    </div>
  </div>
</section>
          {/* Trending Products */}
      <section className="py-20 bg-gradient-to-b from-white to-brand-cream/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-14">
            <span className="inline-block bg-brand-gold/10 text-brand-gold px-4 py-2 rounded-full text-sm font-semibold tracking-widest uppercase mb-4">
              Featured Collection
            </span>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-dark mb-4">
              Trending Now
            </h2>

            <p className="max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed">
  Discover our most loved styles, carefully selected to bring elegance,
  comfort, and timeless fashion to your wardrobe.
</p>

            <div className="w-24 h-1 bg-brand-gold mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trendingProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                openProduct={openProduct}
                toggleWishlist={toggleWishlist}
                wishlist={wishlist}
              />
            ))}
          </div>

         <div className="mt-10 text-center md:hidden">
  <button
    onClick={() => goToShop('All')}
    className="inline-flex items-center gap-2 bg-brand-dark text-white px-6 py-3 rounded-full font-semibold hover:bg-brand-gold transition-all duration-300 shadow-lg"
  >
    View All Collection
    <ChevronRight className="w-5 h-5" />
  </button>
</div>
        </div>
      </section>

      {/* Testimonials / Trust Section */}
      <section className="py-20 bg-brand-pink/30">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-brand-dark mb-6">
            Join 10,000+ Happy Customers
          </h2>
          <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
            Experience the finest Pakistani fashion delivered to your doorstep with love and care. 
            Rated 4.9/5 by our valued customers across Pakistan.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-brand-gold mb-1">10K+</div>
              <p className="text-gray-600 text-sm">Happy Customers</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-gold mb-1">500+</div>
              <p className="text-gray-600 text-sm">Unique Designs</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-gold mb-1">4.9</div>
              <p className="text-gray-600 text-sm">Average Rating</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => goToShop('All')} 
              className="bg-brand-dark text-white px-8 py-4 rounded-full font-semibold hover:bg-brand-gold transition-all shadow-lg"
            >
              Start Shopping
            </button>
            <a 
              href="https://wa.me/923326284444" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-brand-dark px-8 py-4 rounded-full font-semibold hover:bg-brand-gold hover:text-white transition-all shadow-lg border border-gray-200 flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage