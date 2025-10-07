import { useState } from 'react';
import { MapPin, Star, Clock, CheckCircle, Calendar, Users, Music, Instagram, Youtube, Share2, Heart, Play } from 'lucide-react';
import { artists } from '../data/sampleData';

interface ArtistProfileProps {
  artistId: string;
  onNavigate: (page: string, data?: any) => void;
}

export default function ArtistProfile({ artistId, onNavigate }: ArtistProfileProps) {
  const artist = artists.find(a => a.id === artistId);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [isFavorite, setIsFavorite] = useState(false);

  if (!artist) {
    return <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">Artist not found</div>;
  }

  const availabilityData = [
    { date: 5, status: 'available' },
    { date: 8, status: 'booked' },
    { date: 12, status: 'available' },
    { date: 15, status: 'available' },
    { date: 18, status: 'booked' },
    { date: 22, status: 'available' },
    { date: 25, status: 'available' },
    { date: 28, status: 'booked' },
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="relative h-[70vh] overflow-hidden">
        <img
          src={artist.imageUrl}
          alt={artist.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>

        <div className="absolute top-24 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => onNavigate('discover')}
            className="px-4 py-2 bg-slate-900/50 backdrop-blur-sm text-white rounded-lg hover:bg-slate-900 transition-all border border-slate-700"
          >
            ← Back to Artists
          </button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="flex items-end justify-between">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className={`px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm ${
                  artist.availability === 'available'
                    ? 'bg-green-500/30 text-green-400 border border-green-500/50'
                    : 'bg-orange-500/30 text-orange-400 border border-orange-500/50'
                }`}>
                  {artist.availability === 'available' ? 'Available for Booking' : 'Limited Availability'}
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-2">{artist.stageName}</h1>
              <p className="text-2xl text-slate-300 mb-4">{artist.name}</p>
              <div className="flex flex-wrap gap-4 text-slate-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>{artist.location}</span>
                </div>
                <div className="flex items-center gap-2 text-amber-400">
                  <Star className="w-5 h-5 fill-current" />
                  <span className="font-semibold">{artist.rating}</span>
                  <span className="text-slate-400">({artist.totalBookings} bookings)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>Responds in {artist.responseTime}</span>
                </div>
              </div>
            </div>

            <div className="hidden md:flex gap-3">
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className={`p-3 rounded-full backdrop-blur-sm transition-all ${
                  isFavorite
                    ? 'bg-red-500 text-white'
                    : 'bg-slate-900/50 text-white hover:bg-slate-900 border border-slate-700'
                }`}
              >
                <Heart className={`w-6 h-6 ${isFavorite ? 'fill-current' : ''}`} />
              </button>
              <button className="p-3 bg-slate-900/50 backdrop-blur-sm rounded-full text-white hover:bg-slate-900 transition-all border border-slate-700">
                <Share2 className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
              <h2 className="text-3xl font-bold text-white mb-4">About</h2>
              <p className="text-slate-300 leading-relaxed text-lg mb-6">{artist.bio}</p>
              <div className="flex flex-wrap gap-3">
                {artist.genres.map((genre) => (
                  <span key={genre} className="px-4 py-2 bg-slate-800 text-cyan-400 rounded-lg font-medium">
                    {genre}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
              <h2 className="text-3xl font-bold text-white mb-6">Skills & Expertise</h2>
              <div className="space-y-4">
                {Object.entries(artist.skills).map(([skill, value]) => (
                  <div key={skill}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-300 font-medium capitalize">
                        {skill.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                      <span className="text-cyan-400 font-bold">{value}%</span>
                    </div>
                    <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full transition-all duration-1000"
                        style={{ width: `${value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
              <h2 className="text-3xl font-bold text-white mb-6">Specialties</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {artist.specialties.map((specialty) => (
                  <div key={specialty} className="flex items-center gap-3 p-4 bg-slate-800 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                    <span className="text-slate-300">{specialty}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
              <h2 className="text-3xl font-bold text-white mb-6">Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer">
                    <img
                      src={artist.imageUrl}
                      alt={`Performance ${i}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-slate-950/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Play className="w-12 h-12 text-white" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
              <h2 className="text-3xl font-bold text-white mb-6">Client Testimonials</h2>
              <div className="space-y-6">
                {artist.testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="bg-slate-800 rounded-xl p-6">
                    <div className="flex items-center gap-1 text-amber-400 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                    <p className="text-slate-300 leading-relaxed mb-4">"{testimonial.comment}"</p>
                    <div className="flex items-center justify-between text-sm">
                      <div>
                        <div className="text-white font-semibold">{testimonial.clientName}</div>
                        <div className="text-slate-400">{testimonial.eventType}</div>
                      </div>
                      <div className="text-slate-500">{new Date(testimonial.date).toLocaleDateString()}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
              <h2 className="text-3xl font-bold text-white mb-6">Connect</h2>
              <div className="flex flex-wrap gap-4">
                {artist.socialMedia.instagram && (
                  <a
                    href={`https://instagram.com/${artist.socialMedia.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-lg hover:scale-105 transition-all font-medium"
                  >
                    <Instagram className="w-5 h-5" />
                    Instagram
                  </a>
                )}
                {artist.socialMedia.youtube && (
                  <a
                    href={`https://youtube.com/${artist.socialMedia.youtube}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:scale-105 transition-all font-medium"
                  >
                    <Youtube className="w-5 h-5" />
                    YouTube
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
                <div className="mb-6">
                  <div className="text-slate-400 text-sm mb-1">Starting at</div>
                  <div className="text-4xl font-bold text-white mb-1">
                    ${artist.price.toLocaleString()}
                  </div>
                  <div className="text-slate-400 text-sm">per event</div>
                </div>

                <button
                  onClick={() => onNavigate('booking', artistId)}
                  className="w-full py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-bold rounded-xl hover:scale-105 transition-all shadow-lg shadow-cyan-500/30 mb-4"
                >
                  Book Now
                </button>

                <button className="w-full py-3 bg-slate-800 text-white font-semibold rounded-xl hover:bg-slate-700 transition-all border border-slate-700">
                  Request Quote
                </button>
              </div>

              <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-cyan-400" />
                  Availability
                </h3>
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                    <div key={i} className="text-center text-slate-500 text-xs font-semibold">
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {Array.from({ length: 35 }, (_, i) => {
                    const date = i - 4;
                    const availableDate = availabilityData.find(d => d.date === date);
                    const isCurrentMonth = date > 0 && date <= 31;

                    return (
                      <div
                        key={i}
                        className={`aspect-square flex items-center justify-center text-sm rounded-lg transition-all cursor-pointer ${
                          !isCurrentMonth
                            ? 'text-slate-700'
                            : availableDate?.status === 'booked'
                            ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                            : availableDate?.status === 'available'
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30 hover:bg-green-500/30'
                            : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                        }`}
                      >
                        {isCurrentMonth ? date : ''}
                      </div>
                    );
                  })}
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500/30 border border-green-500/50 rounded"></div>
                    <span className="text-xs text-slate-400">Available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500/30 border border-red-500/50 rounded"></div>
                    <span className="text-xs text-slate-400">Booked</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
                <h3 className="text-xl font-bold text-white mb-4">Quick Stats</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-400">
                      <Users className="w-5 h-5" />
                      <span>Total Bookings</span>
                    </div>
                    <span className="text-white font-bold">{artist.totalBookings}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-400">
                      <Music className="w-5 h-5" />
                      <span>Experience</span>
                    </div>
                    <span className="text-white font-bold">{artist.experience}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-400">
                      <Clock className="w-5 h-5" />
                      <span>Response Time</span>
                    </div>
                    <span className="text-white font-bold">{artist.responseTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
