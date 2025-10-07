import { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, MapPin, Star, Heart, Share2, X } from 'lucide-react';
import { artists, genres } from '../data/sampleData';

interface DiscoverPageProps {
  onNavigate: (page: string, data?: any) => void;
}

export default function DiscoverPage({ onNavigate }: DiscoverPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [selectedAvailability, setSelectedAvailability] = useState<string>('all');
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<'popular' | 'price-low' | 'price-high' | 'rating'>('popular');

  const toggleGenre = (genre: string) => {
    setSelectedGenres(prev =>
      prev.includes(genre)
        ? prev.filter(g => g !== genre)
        : [...prev, genre]
    );
  };

  const toggleFavorite = (artistId: string) => {
    setFavorites(prev =>
      prev.includes(artistId)
        ? prev.filter(id => id !== artistId)
        : [...prev, artistId]
    );
  };

  const filteredArtists = useMemo(() => {
    let filtered = artists.filter(artist => {
      const matchesSearch = artist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        artist.stageName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        artist.genres.some(g => g.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesGenre = selectedGenres.length === 0 ||
        artist.genres.some(g => selectedGenres.includes(g));

      const matchesPrice = artist.price >= priceRange[0] && artist.price <= priceRange[1];

      const matchesAvailability = selectedAvailability === 'all' ||
        artist.availability === selectedAvailability;

      return matchesSearch && matchesGenre && matchesPrice && matchesAvailability;
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'popular':
        default:
          return b.totalBookings - a.totalBookings;
      }
    });

    return filtered;
  }, [searchQuery, selectedGenres, priceRange, selectedAvailability, sortBy]);

  return (
    <div className="min-h-screen bg-slate-950 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Discover <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">Artists</span>
          </h1>
          <p className="text-xl text-slate-400">Find the perfect talent for your next event</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className={`lg:w-80 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 sticky top-24 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <SlidersHorizontal className="w-5 h-5" />
                  Filters
                </h3>
                <button
                  onClick={() => setShowFilters(false)}
                  className="lg:hidden text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-300 mb-3 block">
                  Search
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Artist name or genre..."
                    className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-300 mb-3 block">
                  Genres
                </label>
                <div className="flex flex-wrap gap-2">
                  {genres.slice(0, 8).map((genre) => (
                    <button
                      key={genre.name}
                      onClick={() => toggleGenre(genre.name)}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                        selectedGenres.includes(genre.name)
                          ? 'bg-cyan-500 text-white'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      {genre.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-semibold text-slate-300">
                    Price Range
                  </label>
                  <span className="text-sm text-cyan-400 font-semibold">
                    ${priceRange[0]} - ${priceRange[1]}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="5000"
                  step="100"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-300 mb-3 block">
                  Availability
                </label>
                <div className="space-y-2">
                  {['all', 'available', 'limited'].map((status) => (
                    <button
                      key={status}
                      onClick={() => setSelectedAvailability(status)}
                      className={`w-full px-4 py-2 rounded-lg text-sm font-medium text-left transition-all ${
                        selectedAvailability === status
                          ? 'bg-cyan-500 text-white'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedGenres([]);
                  setPriceRange([0, 5000]);
                  setSelectedAvailability('all');
                }}
                className="w-full px-4 py-2 bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700 transition-colors text-sm font-medium"
              >
                Clear All Filters
              </button>
            </div>
          </div>

          <div className="flex-1">
            <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
              <div className="text-slate-400">
                <span className="text-white font-semibold">{filteredArtists.length}</span> artists found
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => setShowFilters(true)}
                  className="lg:hidden px-4 py-2 bg-slate-800 text-white rounded-lg flex items-center gap-2 border border-slate-700"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters
                </button>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                >
                  <option value="popular">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {filteredArtists.map((artist) => (
                <div
                  key={artist.id}
                  className="group bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/10"
                >
                  <div className="relative h-64 overflow-hidden cursor-pointer" onClick={() => onNavigate('artist', artist.id)}>
                    <img
                      src={artist.imageUrl}
                      alt={artist.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>

                    <div className="absolute top-4 right-4 flex gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(artist.id);
                        }}
                        className={`p-2 rounded-full backdrop-blur-sm transition-all ${
                          favorites.includes(artist.id)
                            ? 'bg-red-500 text-white'
                            : 'bg-slate-900/50 text-white hover:bg-slate-900'
                        }`}
                      >
                        <Heart className={`w-5 h-5 ${favorites.includes(artist.id) ? 'fill-current' : ''}`} />
                      </button>
                      <button
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 bg-slate-900/50 backdrop-blur-sm rounded-full text-white hover:bg-slate-900 transition-all"
                      >
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-white">{artist.stageName}</h3>
                          <p className="text-slate-300 text-sm">{artist.name}</p>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                          artist.availability === 'available'
                            ? 'bg-green-500/30 text-green-400 border border-green-500/50'
                            : 'bg-orange-500/30 text-orange-400 border border-orange-500/50'
                        }`}>
                          {artist.availability === 'available' ? 'Available' : 'Limited'}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {artist.genres.slice(0, 3).map((genre) => (
                        <span key={genre} className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full">
                          {genre}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{artist.location}</span>
                      </div>
                      <div className="flex items-center gap-1 text-amber-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="font-semibold">{artist.rating}</span>
                      </div>
                      <div>
                        {artist.totalBookings} bookings
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                      <div>
                        <div className="text-slate-400 text-xs">Starting at</div>
                        <div className="text-2xl font-bold text-white">
                          ${artist.price.toLocaleString()}
                        </div>
                      </div>
                      <button
                        onClick={() => onNavigate('artist', artist.id)}
                        className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold rounded-lg hover:scale-105 transition-all"
                      >
                        View Profile
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredArtists.length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-slate-600" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">No artists found</h3>
                <p className="text-slate-400 mb-6">Try adjusting your filters or search terms</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedGenres([]);
                    setPriceRange([0, 5000]);
                    setSelectedAvailability('all');
                  }}
                  className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
