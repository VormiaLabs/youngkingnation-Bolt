import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import { useState } from 'react';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export default function ContactPage({ onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'booking',
    message: '',
  });

  const inquiryTypes = [
    { id: 'booking', label: 'Booking Inquiry', icon: '🎵' },
    { id: 'artist', label: 'Artist Application', icon: '🎤' },
    { id: 'partnership', label: 'Partnership', icon: '🤝' },
    { id: 'press', label: 'Press & Media', icon: '📰' },
    { id: 'support', label: 'Customer Support', icon: '💬' },
    { id: 'other', label: 'Other', icon: '📧' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-slate-950 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">Touch</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Have questions? We're here to help. Reach out and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-cyan-500/50 transition-all">
            <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-4">
              <Mail className="w-7 h-7 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
            <p className="text-slate-400 text-sm mb-4">Send us an email anytime</p>
            <a href="mailto:hello@youngkingnation.com" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
              hello@youngkingnation.com
            </a>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-orange-500/50 transition-all">
            <div className="w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4">
              <Phone className="w-7 h-7 text-orange-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
            <p className="text-slate-400 text-sm mb-4">Mon-Fri from 8am to 6pm PST</p>
            <a href="tel:+15551234567" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
              (555) 123-4567
            </a>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-teal-500/50 transition-all">
            <div className="w-14 h-14 bg-teal-500/10 rounded-xl flex items-center justify-center mb-4">
              <MapPin className="w-7 h-7 text-teal-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
            <p className="text-slate-400 text-sm mb-4">Come say hello at our office</p>
            <p className="text-cyan-400 font-medium">
              123 Music Avenue<br />
              Los Angeles, CA 90028
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
            <h2 className="text-3xl font-bold text-white mb-2">Send us a Message</h2>
            <p className="text-slate-400 mb-8">Fill out the form and we'll get back to you within 24 hours</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-white font-semibold mb-2 block">Your Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-white font-semibold mb-2 block">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-white font-semibold mb-2 block">Phone Number (Optional)</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(555) 123-4567"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <div>
                <label className="text-white font-semibold mb-3 block">What can we help you with?</label>
                <div className="grid grid-cols-2 gap-3">
                  {inquiryTypes.map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, inquiryType: type.id })}
                      className={`p-4 rounded-xl text-left transition-all border-2 ${
                        formData.inquiryType === type.id
                          ? 'border-cyan-500 bg-cyan-500/10'
                          : 'border-slate-700 bg-slate-800 hover:border-slate-600'
                      }`}
                    >
                      <div className="text-2xl mb-1">{type.icon}</div>
                      <div className="text-sm font-medium text-white">{type.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-white font-semibold mb-2 block">Your Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us more about your inquiry..."
                  rows={6}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-bold rounded-xl hover:scale-105 transition-all shadow-lg shadow-cyan-500/30 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Response Time</h3>
                  <p className="text-green-400 text-sm font-semibold">Average: 2-4 hours</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                We pride ourselves on quick response times. Most inquiries are answered within a few hours during business hours.
              </p>
            </div>

            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-cyan-400" />
                Live Chat Available
              </h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Need immediate assistance? Our live chat support is available Monday through Friday, 8am to 6pm PST.
              </p>
              <button className="w-full py-3 bg-cyan-500 text-white font-semibold rounded-xl hover:bg-cyan-600 transition-colors">
                Start Live Chat
              </button>
            </div>

            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div>
                  <button className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium text-left">
                    How do I book an artist?
                  </button>
                </div>
                <div>
                  <button className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium text-left">
                    What's your cancellation policy?
                  </button>
                </div>
                <div>
                  <button className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium text-left">
                    How are payments processed?
                  </button>
                </div>
                <div>
                  <button className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium text-left">
                    Can I request a custom package?
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-2xl p-8 border border-cyan-500/20">
              <h3 className="text-xl font-bold text-white mb-4">Ready to Book?</h3>
              <p className="text-slate-300 text-sm mb-6">
                Skip the form and start browsing our talented artists. Book your perfect performer in minutes.
              </p>
              <button
                onClick={() => onNavigate('discover')}
                className="w-full py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-bold rounded-xl hover:scale-105 transition-all"
              >
                Browse Artists
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
