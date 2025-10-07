import { useEffect, useState } from 'react';
import { CheckCircle, Download, Share2, Calendar, Clock, MapPin, Mail, Phone } from 'lucide-react';

interface ConfirmationPageProps {
  data: any;
  onNavigate: (page: string, data?: any) => void;
}

export default function ConfirmationPage({ data, onNavigate }: ConfirmationPageProps) {
  const [showConfetti, setShowConfetti] = useState(false);
  const bookingId = `YKN${Date.now().toString().slice(-8)}`;

  useEffect(() => {
    setShowConfetti(true);
    const timer = setTimeout(() => setShowConfetti(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const { artist, bookingData, total } = data || {};

  if (!data || !artist) {
    onNavigate('home');
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-950 pt-20 pb-12 relative overflow-hidden">
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-${Math.random() * 20}%`,
                backgroundColor: ['#06B6D4', '#14B8A6', '#F97316', '#EAB308'][Math.floor(Math.random() * 4)],
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-6 animate-scale-in">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Booking Confirmed!
          </h1>
          <p className="text-xl text-slate-300">
            Your event is set. Get ready for an amazing experience!
          </p>
        </div>

        <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 mb-8">
          <div className="flex items-center justify-between mb-6 pb-6 border-b border-slate-800">
            <div>
              <div className="text-slate-400 text-sm mb-1">Booking ID</div>
              <div className="text-2xl font-bold text-white">{bookingId}</div>
            </div>
            <div className="flex gap-3">
              <button className="p-3 bg-slate-800 rounded-lg text-white hover:bg-slate-700 transition-all border border-slate-700">
                <Download className="w-5 h-5" />
              </button>
              <button className="p-3 bg-slate-800 rounded-lg text-white hover:bg-slate-700 transition-all border border-slate-700">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Artist Details</h3>
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={artist.imageUrl}
                  alt={artist.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <div className="text-xl font-bold text-white">{artist.stageName}</div>
                  <div className="text-slate-400">{artist.name}</div>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-slate-400">
                  <Phone className="w-4 h-4" />
                  <span>Contact info will be sent via email</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <Mail className="w-4 h-4" />
                  <span>Confirmation sent to your inbox</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Event Details</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-slate-400">Date</div>
                    <div className="text-white font-medium">{bookingData.date}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-slate-400">Time</div>
                    <div className="text-white font-medium">{bookingData.time} ({bookingData.duration} hours)</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-slate-400">Location</div>
                    <div className="text-white font-medium">{bookingData.location}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-800">
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Total Paid</span>
              <span className="text-3xl font-bold text-cyan-400">${total.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 mb-8">
          <h3 className="text-xl font-bold text-white mb-6">What Happens Next?</h3>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0 border border-cyan-500/30">
                <span className="text-cyan-400 font-bold">1</span>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Confirmation Email</h4>
                <p className="text-slate-400 text-sm">
                  You'll receive a detailed confirmation email with all booking information and artist contact details within 5 minutes.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0 border border-orange-500/30">
                <span className="text-orange-400 font-bold">2</span>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Artist Reaches Out</h4>
                <p className="text-slate-400 text-sm">
                  {artist.stageName} will contact you within {artist.responseTime} to discuss your event details and preferences.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center flex-shrink-0 border border-teal-500/30">
                <span className="text-teal-400 font-bold">3</span>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Final Planning</h4>
                <p className="text-slate-400 text-sm">
                  Work together to finalize music selection, timeline, and any special requests for your event.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 border border-green-500/30">
                <span className="text-green-400 font-bold">4</span>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Event Day!</h4>
                <p className="text-slate-400 text-sm">
                  Sit back and enjoy an incredible performance. Your event is in great hands!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
            <h3 className="text-white font-semibold mb-4">Need to Make Changes?</h3>
            <p className="text-slate-400 text-sm mb-4">
              You can modify your booking up to 72 hours before the event. Contact us or reach out to the artist directly.
            </p>
            <button className="w-full px-4 py-2.5 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-all border border-slate-700 font-medium">
              Modify Booking
            </button>
          </div>

          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
            <h3 className="text-white font-semibold mb-4">Have Questions?</h3>
            <p className="text-slate-400 text-sm mb-4">
              Our support team is available 24/7 to help with any questions or concerns about your booking.
            </p>
            <button className="w-full px-4 py-2.5 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-all border border-slate-700 font-medium">
              Contact Support
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-2xl p-8 border border-cyan-500/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Create an Account to Track Your Bookings</h3>
            <p className="text-slate-300 mb-6">
              Save your favorite artists, get exclusive discounts, and manage all your events in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold rounded-lg hover:scale-105 transition-all">
                Create Account
              </button>
              <button
                onClick={() => onNavigate('home')}
                className="px-6 py-3 bg-slate-800 text-white font-semibold rounded-lg hover:bg-slate-700 transition-all border border-slate-700"
              >
                Return to Home
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => onNavigate('discover')}
            className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
          >
            Book Another Artist →
          </button>
        </div>
      </div>
    </div>
  );
}
