import { Music2, Menu, X, Search, User } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'discover', label: 'Discover Artists' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 group"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Music2 className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <div className="text-xl font-bold text-white">Young King Nation</div>
              <div className="text-xs text-slate-400">Artist Booking</div>
            </div>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`font-medium transition-colors relative group ${
                  currentPage === item.id
                    ? 'text-cyan-400'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.label}
                {currentPage === item.id && (
                  <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-teal-500"></div>
                )}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 text-slate-300 hover:text-white transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold rounded-lg hover:scale-105 transition-all">
              Sign In
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                  currentPage === item.id
                    ? 'bg-cyan-500/10 text-cyan-400'
                    : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold rounded-lg">
              Sign In
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
