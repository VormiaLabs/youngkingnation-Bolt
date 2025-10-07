import { Music2, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center">
                <Music2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-lg font-bold text-white">Young King Nation</div>
                <div className="text-xs text-slate-400">Artist Booking</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm mb-6">
              Connecting world-class artists with unforgettable events since 2020.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Explore</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => onNavigate('discover')}
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Discover Artists
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  About Us
                </button>
              </li>
              <li>
                <button className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                  How It Works
                </button>
              </li>
              <li>
                <button className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                  Pricing
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">For Artists</h3>
            <ul className="space-y-3">
              <li>
                <button className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                  Join Our Roster
                </button>
              </li>
              <li>
                <button className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                  Artist Dashboard
                </button>
              </li>
              <li>
                <button className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                  Resources
                </button>
              </li>
              <li>
                <button className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                  Success Stories
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>123 Music Avenue<br />Los Angeles, CA 90028</span>
              </li>
              <li className="flex items-center gap-2 text-slate-400 text-sm">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-slate-400 text-sm">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>hello@youngkingnation.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-slate-500 text-sm">
              © 2024 Young King Nation. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <button className="text-slate-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </button>
              <button className="text-slate-400 hover:text-cyan-400 transition-colors">
                Terms of Service
              </button>
              <button className="text-slate-400 hover:text-cyan-400 transition-colors">
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
