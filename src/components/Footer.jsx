import React from 'react'
import { ArrowRight, Instagram, Facebook, MessageCircle, MapPin, Mail, Phone } from 'lucide-react'

const Footer = ({ setPage, goToShop, categories }) => {
  const handleNav = (page) => {
    setPage(page)
    window.scrollTo(0, 0)
  }

  return (
    <footer className="bg-brand-dark text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <button
              onClick={() => handleNav('home')}
              className="flex items-center gap-2 mb-6 group"
            >
              <div className="w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center text-white font-display text-lg font-bold group-hover:scale-110 transition-transform">
                R
              </div>
              <span className="font-display text-2xl font-bold">Rida's Closet</span>
            </button>
            <p className="text-white/60 leading-relaxed mb-6">
              Premium Pakistani ladies fashion. Elegant, timeless, and made for the modern woman who values tradition and quality craftsmanship.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/ridascloset"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/ridascloset"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/923326284444"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', page: 'home' },
                { label: 'Shop All', page: 'shop' },
                { label: 'About Us', page: 'about' },
                { label: 'Contact', page: 'contact' }
              ].map(link => (
                <li key={link.page}>
                  <button
                    onClick={() => handleNav(link.page)}
                    className="text-white/60 hover:text-brand-gold transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Categories</h4>
            <ul className="space-y-3">
              {categories.map(cat => (
                <li key={cat.name}>
                  <button
                    onClick={() => { goToShop(cat.name); window.scrollTo(0, 0); }}
                    className="text-white/60 hover:text-brand-gold transition-colors"
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Newsletter</h4>
            <p className="text-white/60 mb-4">Subscribe for exclusive offers, new arrivals, and fashion tips.</p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-2"
            >
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-gold text-white placeholder:text-white/40"
                required
              />
              <button
                type="submit"
                className="bg-brand-gold px-4 py-3 rounded-xl hover:bg-brand-rose transition-colors"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <Phone className="w-4 h-4 text-brand-gold" />
                <span>0332 6284444</span>
              </div>
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <Mail className="w-4 h-4 text-brand-gold" />
                <span>Mrshafqat115@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <MapPin className="w-4 h-4 text-brand-gold" />
                <span>Lahore, Pakistan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            &copy; 2026 Rida's Closet. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/40">
            <button className="hover:text-brand-gold transition-colors">Privacy Policy</button>
            <button className="hover:text-brand-gold transition-colors">Terms of Service</button>
            <button className="hover:text-brand-gold transition-colors">Shipping Info</button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer