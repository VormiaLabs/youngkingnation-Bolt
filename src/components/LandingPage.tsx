import { Music2, Users, Check, Clock, Headphones, Star, ArrowRight, Shield, TrendingUp } from 'lucide-react';
import { artists, testimonials } from '../data/sampleData';

// Mock stats data since we're importing artists but not stats
const stats = {
  totalBookings: 1500,
  activeArtists: 250,
  happyClients: 1200,
  citiesServed: 85
};

interface LandingPageProps {
  onNavigate: (page: string, data?: any) => void;
}

export default function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="/src/assets/hero-bg.jpg" 
            alt="Concert background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Find the Perfect <span className="text-cyan-400">Artist</span> for Your Event
              </h1>
              <p className="text-lg text-slate-300 mb-8 max-w-lg leading-relaxed">
                Book top-tier artists for any occasion. From live music to DJs, we've got you covered with our curated selection of talented performers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate('discover')}
                  className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300 flex items-center gap-2 justify-center"
                >
                  Browse Artists <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => onNavigate('how-it-works')}
                  className="bg-transparent hover:bg-slate-800/50 text-white font-semibold py-3 px-8 rounded-full border border-slate-600 transition-colors duration-300"
                >
                  How It Works
                </button>
              </div>
            </div>

            {/* Right Side - Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-900/80 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50">
                <div className="text-3xl font-bold text-cyan-400 mb-2">250+</div>
                <p className="text-slate-300 text-sm">Artists</p>
              </div>
              <div className="bg-slate-900/80 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50">
                <div className="text-3xl font-bold text-purple-400 mb-2">1.5K+</div>
                <p className="text-slate-300 text-sm">Events</p>
              </div>
              <div className="bg-slate-900/80 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50">
                <div className="text-3xl font-bold text-amber-400 mb-2">85+</div>
                <p className="text-slate-300 text-sm">Cities</p>
              </div>
              <div className="bg-slate-900/80 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50">
                <div className="text-3xl font-bold text-green-400 mb-2">1.2K+</div>
                <p className="text-slate-300 text-sm">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">Simple steps to book your favorite artist</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-cyan-400">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Browse Artists</h3>
              <p className="text-slate-400">Explore our diverse roster of talented artists and find the perfect match for your event.</p>
            </div>

            <div className="bg-slate-800 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple-400">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Book & Confirm</h3>
              <p className="text-slate-400">Check availability, select your package, and confirm your booking instantly.</p>
            </div>

            <div className="bg-slate-800 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-amber-400">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Enjoy the Show</h3>
              <p className="text-slate-400">Sit back and enjoy an unforgettable performance at your event.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">Simple steps to book your favorite artist</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-cyan-400">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Browse Artists</h3>
              <p className="text-slate-400">Explore our diverse roster of talented artists and find the perfect match for your event.</p>
            </div>

            <div className="bg-slate-800 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple-400">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Book & Confirm</h3>
              <p className="text-slate-400">Check availability, select your package, and confirm your booking instantly.</p>
            </div>

            <div className="bg-slate-800 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-amber-400">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Enjoy the Show</h3>
              <p className="text-slate-400">Sit back and enjoy an unforgettable performance at your event.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Artists
            </h2>
            <p className="text-xl text-slate-400">Discover the talent behind unforgettable moments</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artists.slice(0, 6).map((artist, index) => (
              <div
                key={artist.id}
                onClick={() => onNavigate('artist', artist.id)}
                className="group cursor-pointer relative bg-slate-800 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 border border-slate-700 hover:border-cyan-500/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={artist.imageUrl}
                    alt={artist.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{artist.stageName}</h3>
                      <p className="text-slate-300 text-sm">{artist.name}</p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      artist.availability === 'available'
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                    }`}>
                      {artist.availability === 'available' ? 'Available' : 'Limited'}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {artist.genres.slice(0, 3).map((genre) => (
                      <span key={genre} className="px-3 py-1 bg-slate-700/50 backdrop-blur-sm text-slate-300 text-xs rounded-full border border-slate-600">
                        {genre}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 text-amber-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="font-semibold">{artist.rating}</span>
                      <span className="text-slate-400">({artist.totalBookings} bookings)</span>
                    </div>
                    <div className="text-white font-bold">
                      ${artist.price.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('discover')}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold rounded-full hover:scale-105 transition-all hover:shadow-2xl hover:shadow-cyan-500/30"
            >
              View All Artists
            </button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Trusted by Event Organizers
            </h2>
            <p className="text-xl text-slate-400">See what our clients have to say</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all">
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">"{testimonial.comment}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.imageUrl}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-slate-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Verified Artists</h3>
                <p className="text-slate-400 text-sm">All performers are background-checked and vetted</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Secure Payments</h3>
                <p className="text-slate-400 text-sm">Protected transactions with full refund policy</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-teal-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-teal-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Instant Confirmation</h3>
                <p className="text-slate-400 text-sm">Get booking confirmation in minutes, not days</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">24/7 Support</h3>
                <p className="text-slate-400 text-sm">Our team is here to help every step of the way</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Book Your Next Event?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join our community of event organizers and discover amazing artists for your next occasion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('discover')}
              className="px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-full transition-colors duration-300"
            >
              Browse Artists
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="px-8 py-4 bg-transparent hover:bg-slate-700/50 text-white font-semibold rounded-full border border-slate-600 transition-colors duration-300"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
