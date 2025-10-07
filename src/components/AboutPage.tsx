import { Award, Heart, Shield, Target, Users, Zap } from 'lucide-react';
import { stats } from '../data/sampleData';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const values = [
    {
      icon: Heart,
      title: 'Passion for Music',
      description: 'We live and breathe music. Our dedication to the art form drives everything we do.',
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Your safety and satisfaction are our top priorities. Every booking is protected.',
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We curate only the best talent to ensure every event exceeds expectations.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Leveraging technology to make booking world-class talent simple and seamless.',
    },
  ];

  const milestones = [
    { year: '2020', event: 'Young King Nation Founded', description: 'Started with a vision to revolutionize artist booking' },
    { year: '2021', event: '1,000+ Successful Events', description: 'Reached our first major milestone in event bookings' },
    { year: '2022', event: 'National Expansion', description: 'Expanded operations to cover 50+ major cities' },
    { year: '2023', event: '100+ Artists', description: 'Built an impressive roster of verified talent' },
    { year: '2024', event: 'Industry Recognition', description: 'Named Best Booking Platform by Event Professionals' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 pt-20 pb-12">
      <div className="relative h-96 mb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-20 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
          </div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">Story</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl">
              Building bridges between world-class artists and unforgettable events, one booking at a time.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Who We Are</h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Young King Nation was born from a simple observation: booking talented artists for events was unnecessarily complicated, opaque, and often unreliable.
                </p>
                <p>
                  We set out to change that. Our platform connects event organizers directly with verified, professional artists across all genres, making the entire booking process transparent, secure, and incredibly simple.
                </p>
                <p>
                  Today, we're proud to be the trusted choice for thousands of event organizers and hundreds of artists nationwide. Our commitment to excellence and innovation continues to drive us forward.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="DJ performing"
                className="rounded-2xl w-full h-64 object-cover"
              />
              <img
                src="https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Artist performing"
                className="rounded-2xl w-full h-64 object-cover mt-8"
              />
            </div>
          </div>
        </section>

        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-xl text-slate-400">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-cyan-500/50 transition-all"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mb-24">
          <div className="bg-slate-900 rounded-3xl p-12 border border-slate-800">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Impact by Numbers</h2>
              <p className="text-xl text-slate-400">Real results from real events</p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400 mb-2">
                  {stats.totalBookings.toLocaleString()}+
                </div>
                <div className="text-slate-300 font-medium mb-1">Events Powered</div>
                <div className="text-slate-500 text-sm">Successful bookings and counting</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400 mb-2">
                  {stats.activeArtists}+
                </div>
                <div className="text-slate-300 font-medium mb-1">Artists Supported</div>
                <div className="text-slate-500 text-sm">Verified professionals</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 mb-2">
                  {stats.happyClients.toLocaleString()}+
                </div>
                <div className="text-slate-300 font-medium mb-1">Happy Clients</div>
                <div className="text-slate-500 text-sm">5-star experiences</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-orange-400 mb-2">
                  {stats.citiesServed}+
                </div>
                <div className="text-slate-300 font-medium mb-1">Cities Reached</div>
                <div className="text-slate-500 text-sm">Nationwide coverage</div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Journey</h2>
            <p className="text-xl text-slate-400">Key milestones that shaped our story</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 via-teal-500 to-orange-500 hidden md:block"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center`}>
                    <div className="text-3xl font-bold text-cyan-400 mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{milestone.event}</h3>
                    <p className="text-slate-400">{milestone.description}</p>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full flex items-center justify-center z-10 flex-shrink-0">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl p-12 border border-slate-800">
          <div className="text-center max-w-3xl mx-auto">
            <Users className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-4">Join Our Community</h2>
            <p className="text-xl text-slate-300 mb-8">
              Whether you're an artist looking to grow your reach or an event organizer seeking talent, we're here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('discover')}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-bold rounded-xl hover:scale-105 transition-all shadow-lg shadow-cyan-500/30"
              >
                Book an Artist
              </button>
              <button className="px-8 py-4 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-700 transition-all border border-slate-700">
                Become an Artist
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
