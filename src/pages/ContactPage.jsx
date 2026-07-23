import React from 'react'
import { MessageCircle, Mail, Instagram, Facebook, MapPin, Phone, Clock } from 'lucide-react'

const ContactPage = () => {
  return (
    <div className="pt-24 pb-20 bg-brand-cream min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-brand-gold font-medium tracking-[0.2em] uppercase text-sm mb-2">Get in Touch</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-brand-dark mb-6">Contact Us</h1>
          <div className="w-24 h-1 bg-brand-gold mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* WhatsApp */}
          <a
            href="https://wa.me/923326284444"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all group"
          >
            <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-green-500 transition-colors">
              <MessageCircle className="w-7 h-7 text-green-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-display text-xl font-bold text-brand-dark mb-2">WhatsApp</h3>
            <p className="text-gray-600 font-medium">0332 6284444</p>
            <p className="text-sm text-gray-400 mt-2">Available 9AM - 9PM</p>
          </a>

          {/* Email */}
          <a
            href="mailto:hello@ridascloset.pk"
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all group"
          >
            <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-brand-gold transition-colors">
              <Mail className="w-7 h-7 text-amber-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-display text-xl font-bold text-brand-dark mb-2">Email</h3>
            <p className="text-gray-600 font-medium">Mrshafqat115@gmail.com</p>
            <p className="text-sm text-gray-400 mt-2">We reply within 24 hours</p>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/ridascloset"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all group"
          >
            <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-pink-500 transition-colors">
              <Instagram className="w-7 h-7 text-pink-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-display text-xl font-bold text-brand-dark mb-2">Instagram</h3>
            <p className="text-gray-600 font-medium">@ridascloset</p>
            <p className="text-sm text-gray-400 mt-2">Follow for daily updates</p>
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com/ridascloset"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all group"
          >
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
              <Facebook className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-display text-xl font-bold text-brand-dark mb-2">Facebook</h3>
            <p className="text-gray-600 font-medium">Rida's Closet Official</p>
            <p className="text-sm text-gray-400 mt-2">Join our community</p>
          </a>
        </div>

        {/* Store Location */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-brand-dark rounded-2xl flex items-center justify-center flex-shrink-0">
              <MapPin className="w-7 h-7 text-brand-gold" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-brand-dark mb-2">Visit Our Store</h3>
              <p className="text-gray-600">123 Fashion Avenue, Gulberg III, Lahore, Pakistan</p>
              <div className="flex items-center gap-2 text-sm text-gray-400 mt-2">
                <Clock className="w-4 h-4" />
                <span>Monday - Saturday: 11:00 AM - 8:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="font-display text-2xl font-bold text-brand-dark mb-6">Send us a Message</h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-gold"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-gold"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-gold"
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-gold resize-none"
            />
            <button
              type="submit"
              className="bg-brand-dark text-white px-8 py-4 rounded-xl font-semibold hover:bg-brand-gold transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactPage