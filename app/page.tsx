'use client'

import { useState } from 'react'

const TESTIMONIALS = [
  {
    quote: "As a busy international speaker, my reputation is dependent upon reliable logistics. I have used Simon's services for a number of years, and have been absolutely delighted on every occasion. Simon is extremely professional, 100% reliable, and balances all this with a friendly and personable manner.",
    name: 'Jamil Qureshi',
    role: 'International Speaker',
  },
  {
    quote: "We have been using T&L Executive Cars both for family trips to London and airport transfers, for some years. Their service has always been friendly and reliable. It does take some of the pressure off any journey when you know that the car you have organised will arrive in plenty of time.",
    name: 'Ken Spry',
    role: 'Client',
  },
  {
    quote: "I have been a client of Simon Burns and T&L Executive Cars for many years, initially for my personal executive car needs but then after experiencing their extraordinarily professional service, I began using them for my business requirements as well.",
    name: 'Peter Joarder',
    role: 'Chapman Freeborn',
  },
]

const VEHICLES = [
  { name: 'Executive Saloon', passengers: 4, bags: 3, desc: 'Mercedes E-Class or similar. Perfect for airport transfers and business travel.', image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=500&fit=crop' },
  { name: 'Executive MPV', passengers: 7, bags: 7, desc: 'Mercedes V-Class or similar. Ideal for families and small groups.', image: 'https://images.unsplash.com/photo-1632245889029-e406faaa34cd?w=800&h=500&fit=crop' },
  { name: 'Executive Minibus', passengers: 8, bags: 8, desc: 'VW Transporter or similar. Perfect for larger groups and events.', image: 'https://images.unsplash.com/photo-1570733577524-3a047079e80d?w=800&h=500&fit=crop' },
]

const AIRPORTS = ['Heathrow', 'Gatwick', 'London City', 'Luton', 'Stansted', 'Southend']

const JOURNEYS = [
  '✈ Airport Transfers',
  '🎭 Theatre Trips',
  '💼 Business Meetings',
  '🥂 Special Occasions',
  '💒 Weddings',
  '🏇 Race Days',
  '⚽ Sporting Events',
  '🚢 Cruise Terminals',
  '🎓 School Runs',
  '🍽 Restaurant Evenings',
]

const AREAS = ['Theydon Bois', 'Loughton', 'Epping', 'Abridge', 'Ongar', 'Buckhurst Hill', 'Chigwell', 'Woodford Green']

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', pickup: '', destination: '', date: '', passengers: '1', message: '' })
  const [selectedCar, setSelectedCar] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-black/5">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <a href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: '#1a1a2e' }}>
              <span className="text-white text-xs font-bold">T&L</span>
            </div>
            <div>
              <h1 className="text-sm font-semibold text-black tracking-wide">T&L Executive Cars</h1>
              <p className="text-[9px] text-black/40 uppercase tracking-wider">Est. 2008</p>
            </div>
          </a>
          <div className="flex items-center gap-6">
            <a href="#fleet" className="text-sm text-black/60 hover:text-black transition hidden md:block">Our Fleet</a>
            <a href="#testimonials" className="text-sm text-black/60 hover:text-black transition hidden md:block">Reviews</a>
            <a href="#quote" className="text-sm bg-black text-white px-5 py-2 rounded-full hover:bg-black/80 transition">
              Get a Quote
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-24 pb-0">
        <div className="relative min-h-[70vh] flex items-center" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' }}>
          <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 w-full">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.4em] text-white/40 mb-6">Premium Chauffeur Service</p>
              <h2 
                className="text-4xl md:text-6xl text-white leading-[1.1] mb-8"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
              >
                Your Journey,<br />
                <span className="italic" style={{ color: '#c9a96e' }}>Our Priority.</span>
              </h2>
              <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-lg mb-10">
                Professional executive car service covering Essex and London. Airport transfers, corporate travel, and special occasions.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#quote" className="px-8 py-3 rounded-full text-sm font-medium transition-all hover:scale-105"
                  style={{ background: '#c9a96e', color: '#1a1a2e' }}>
                  Book Now
                </a>
                <a href="tel:+447000000000" className="px-8 py-3 rounded-full text-sm font-medium border border-white/20 text-white hover:border-white/40 transition">
                  Call Us
                </a>
              </div>
            </div>
          </div>
          
          {/* Airport badges */}
          <div className="absolute bottom-0 left-0 right-0 bg-black/20 backdrop-blur-sm border-t border-white/5 overflow-hidden">
            <div className="py-3">
              <div className="flex" style={{ width: 'max-content', animation: 'airportScroll 25s linear infinite' }}>
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex items-center gap-8 px-4">
                    {JOURNEYS.map(j => (
                      <span key={`${i}-${j}`} className="text-xs text-white/50 whitespace-nowrap">{j}</span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-black/40 mb-3">What We Offer</p>
            <h3 
              className="text-3xl md:text-4xl text-black"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Tailored to Your Needs
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '✈️', title: 'Airport Transfers', desc: 'Reliable transfers to all London airports. Flight tracking included — we adjust to delays so you never wait.' },
              { icon: '💼', title: 'Corporate Travel', desc: 'Professional service for businesses. Account billing, meet & greet, and discreet licensed vehicles.' },
              { icon: '🥂', title: 'Special Occasions', desc: 'Weddings, events, theatre trips. Make every journey part of the experience.' },
            ].map(s => (
              <div key={s.title} className="text-center p-8 rounded-2xl border border-black/5 hover:border-black/10 transition">
                <div className="text-3xl mb-4">{s.icon}</div>
                <h4 className="text-lg font-semibold text-black mb-3">{s.title}</h4>
                <p className="text-sm text-black/60 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet — Carousel with arrows */}
      <section id="fleet" className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white border-t border-black/5 overflow-hidden">
        <div className="px-6 mb-12">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-black/40 mb-3">Our Fleet</p>
            <h3 
              className="text-3xl md:text-4xl text-black"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Licensed & Discreet
            </h3>
            <p className="text-sm text-black/50 mt-3 max-w-lg mx-auto">
              All vehicles are licensed and exempt from displaying private hire plates.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-6">
          {/* Main car image */}
          <div className="relative rounded-2xl overflow-hidden mb-6">
            <img 
              src={VEHICLES[selectedCar ?? 0].image} 
              alt={VEHICLES[selectedCar ?? 0].name} 
              className="w-full aspect-[16/9] object-cover transition-all duration-500" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            
            {/* Left/Right arrows */}
            <button 
              onClick={() => setSelectedCar(prev => prev === null || prev === 0 ? VEHICLES.length - 1 : prev - 1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition"
            >
              ‹
            </button>
            <button 
              onClick={() => setSelectedCar(prev => prev === null || prev === VEHICLES.length - 1 ? 0 : prev + 1)}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition"
            >
              ›
            </button>

            {/* Car name overlay */}
            <div className="absolute bottom-6 left-6 right-6">
              <h4 className="text-2xl font-semibold text-white mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {VEHICLES[selectedCar ?? 0].name}
              </h4>
            </div>
          </div>

          {/* Car details */}
          <div className="text-center mb-8">
            <p className="text-sm text-black/60 leading-relaxed mb-4">{VEHICLES[selectedCar ?? 0].desc}</p>
            <div className="flex items-center justify-center gap-6 text-sm text-black/50">
              <span className="flex items-center gap-1.5">👤 {VEHICLES[selectedCar ?? 0].passengers} passengers</span>
              <span className="flex items-center gap-1.5">🧳 {VEHICLES[selectedCar ?? 0].bags} bags</span>
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-3">
            {VEHICLES.map((v, idx) => (
              <button
                key={v.name}
                onClick={() => setSelectedCar(idx)}
                className={`transition-all duration-300 rounded-full ${
                  (selectedCar ?? 0) === idx 
                    ? 'w-8 h-2' 
                    : 'w-2 h-2 hover:bg-black/30'
                }`}
                style={{ background: (selectedCar ?? 0) === idx ? '#1a1a2e' : 'rgba(0,0,0,0.15)' }}
              />
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm text-black/50">
              We accept <span className="font-medium text-black/70">Visa, Mastercard, American Express, Apple Pay</span> and more.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials — Scrolling */}
      <section id="testimonials" className="py-20 md:py-28 border-t border-black/5 overflow-hidden">
        <div className="px-6 mb-12">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-black/40 mb-3">What Our Clients Say</p>
            <h3 
              className="text-3xl md:text-4xl text-black"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Trusted Since 2008
            </h3>
          </div>
        </div>

        <div className="relative">
          <div className="flex gap-4 md:gap-6 testimonial-scroll" style={{ width: 'max-content', animation: 'testimonialScroll 30s linear infinite' }}>
            {[...Array(2)].map((_, setIdx) => (
              <div key={setIdx} className="flex gap-4 md:gap-6 pl-4 md:pl-6">
                {TESTIMONIALS.map(t => (
                  <div key={`${setIdx}-${t.name}`} className="w-[320px] md:w-[380px] flex-shrink-0 p-6 md:p-8 rounded-2xl border border-black/5 bg-gradient-to-b from-gray-50/50 to-white">
                    <p className="text-sm text-black/60 leading-relaxed mb-6 italic">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div>
                      <p className="text-sm font-semibold text-black">{t.name}</p>
                      <p className="text-xs text-black/40">{t.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Simon */}
      <section className="py-20 md:py-28 px-6 border-t border-black/5" style={{ background: 'linear-gradient(135deg, #1a1a2e, #16213e)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-white/40 mb-6">About Us</p>
          <h3 
            className="text-3xl md:text-4xl text-white mb-8"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            A Personal Guarantee
          </h3>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm md:text-base">
            <p>
              I founded Theydon & Loughton Executive Cars in 2008 to look after local individuals 
              and businesses. Over the years I have established a very loyal client base by providing 
              a friendly and professional service.
            </p>
            <p>
              This is something that I am committed to continuing and personally guarantee all my customers.
            </p>
            <p className="text-white/80 font-medium pt-4">— Simon Burns, Founder</p>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-16 px-6 border-t border-black/5 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-black/40 mb-6">Areas We Cover</p>
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-md mx-auto">
            {AREAS.map(a => (
              <span key={a} className="px-3 py-1.5 rounded-full text-xs border border-black/10 text-black/60">
                {a}
              </span>
            ))}
            <span className="px-3 py-1.5 rounded-full text-xs border border-black/10 text-black/60">
              + All London Airports
            </span>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote" className="py-20 md:py-28 px-6 bg-gradient-to-b from-gray-50 to-white border-t border-black/5">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-black/40 mb-3">Get in Touch</p>
            <h3 
              className="text-3xl md:text-4xl text-black mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Request a Quote
            </h3>
            <p className="text-sm text-black/50">
              Tell us about your journey and we&apos;ll provide a prompt and competitive rate.
            </p>
          </div>

          <form className="space-y-4" onSubmit={e => { e.preventDefault(); alert('Quote request sent! Simon will be in touch shortly.') }}>
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="Your Name" required
                className="w-full px-5 py-3 rounded-xl border border-black/10 text-sm focus:outline-none focus:border-black/30 transition"
                value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
              <input type="email" placeholder="Email Address" required
                className="w-full px-5 py-3 rounded-xl border border-black/10 text-sm focus:outline-none focus:border-black/30 transition"
                value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
            </div>
            <input type="tel" placeholder="Phone Number"
              className="w-full px-5 py-3 rounded-xl border border-black/10 text-sm focus:outline-none focus:border-black/30 transition"
              value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
            <input type="text" placeholder="Date of Travel" required
              onFocus={e => { e.target.type = 'date' }}
              onBlur={e => { if (!e.target.value) e.target.type = 'text' }}
              className="w-full px-5 py-3 rounded-xl border border-black/10 text-sm focus:outline-none focus:border-black/30 transition bg-white placeholder:text-black/40"
              style={{ fontFamily: "'Inter', sans-serif" }}
              value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} />
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="Pick-up Location" required
                className="w-full px-5 py-3 rounded-xl border border-black/10 text-sm focus:outline-none focus:border-black/30 transition"
                value={formData.pickup} onChange={e => setFormData({...formData, pickup: e.target.value})} />
              <input type="text" placeholder="Destination" required
                className="w-full px-5 py-3 rounded-xl border border-black/10 text-sm focus:outline-none focus:border-black/30 transition"
                value={formData.destination} onChange={e => setFormData({...formData, destination: e.target.value})} />
            </div>
            <select 
              className="w-full px-5 py-3 rounded-xl border border-black/10 text-sm focus:outline-none focus:border-black/30 transition text-black/60 bg-white"
              style={{ fontFamily: "'Inter', sans-serif" }}
              value={formData.passengers} onChange={e => setFormData({...formData, passengers: e.target.value})}>
              {[1,2,3,4,5,6,7,8].map(n => (
                <option key={n} value={n}>{n} Passenger{n > 1 ? 's' : ''}</option>
              ))}
            </select>
            <textarea placeholder="Any additional details..."
              className="w-full px-5 py-3 rounded-xl border border-black/10 text-sm focus:outline-none focus:border-black/30 transition h-24 resize-none"
              value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} />
            <button type="submit"
              className="w-full py-4 rounded-xl text-sm font-semibold text-white transition-all hover:scale-[1.01]"
              style={{ background: '#1a1a2e' }}>
              Request Quote
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#1a1a2e' }} className="text-white">
        <div className="px-6 py-20 md:py-24">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h4 
                className="text-3xl md:text-4xl mb-2"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
              >
                T&L Executive Cars
              </h4>
              <p className="text-[10px] uppercase tracking-[0.4em] text-white/30">Est. 2008</p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 mb-16">
              <div className="text-center md:text-left">
                <h5 className="text-[10px] uppercase tracking-[0.25em] text-white/30 mb-4">Contact</h5>
                <div className="space-y-2 text-sm text-white/50">
                  <p>Thrifts Mead</p>
                  <p>Theydon Bois CM16 7NE</p>
                </div>
              </div>
              <div className="text-center">
                <h5 className="text-[10px] uppercase tracking-[0.25em] text-white/30 mb-4">Services</h5>
                <div className="space-y-2 text-sm text-white/50">
                  <p>Airport Transfers</p>
                  <p>Corporate Travel</p>
                  <p>Special Occasions</p>
                </div>
              </div>
              <div className="text-center md:text-right">
                <h5 className="text-[10px] uppercase tracking-[0.25em] text-white/30 mb-4">Legal</h5>
                <div className="space-y-2 text-sm text-white/50">
                  <a href="#" className="block hover:text-white transition">Privacy Policy</a>
                  <a href="#" className="block hover:text-white transition">Cookies Policy</a>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 text-center">
              <p className="text-[11px] text-white/20">
                © {new Date().getFullYear()} T&L Executive Cars. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
