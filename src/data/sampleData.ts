export interface Artist {
  id: string;
  name: string;
  stageName: string;
  genres: string[];
  price: number;
  rating: number;
  totalBookings: number;
  responseTime: string;
  location: string;
  availability: string;
  imageUrl: string;
  videoUrl?: string;
  bio: string;
  experience: string;
  specialties: string[];
  socialMedia: {
    instagram?: string;
    tiktok?: string;
    youtube?: string;
  };
  skills: {
    stagePresence: number;
    crowdEnergy: number;
    versatility: number;
    professionalism: number;
    musicality: number;
  };
  testimonials: Testimonial[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  eventType: string;
  rating: number;
  comment: string;
  date: string;
  videoUrl?: string;
}

export interface Booking {
  id: string;
  artistId: string;
  artistName: string;
  eventType: string;
  date: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  price: number;
  location: string;
}

export const artists: Artist[] = [
  {
    id: '1',
    name: 'Marcus "Flow" Johnson',
    stageName: 'DJ Flow',
    genres: ['Hip-Hop', 'R&B', 'Trap'],
    price: 2500,
    rating: 4.9,
    totalBookings: 247,
    responseTime: '< 2 hours',
    location: 'Atlanta, GA',
    availability: 'available',
    imageUrl: 'https://images.pexels.com/photos/1644888/pexels-photo-1644888.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://example.com/video1.mp4',
    bio: 'Award-winning DJ with 10+ years of experience bringing the heat to every event. Specializing in high-energy performances that keep the crowd moving all night.',
    experience: '10+ years',
    specialties: ['Club Events', 'Corporate Parties', 'Festivals', 'Private Events'],
    socialMedia: {
      instagram: '@djflow',
      tiktok: '@flowbeats',
      youtube: 'DJFlowOfficial'
    },
    skills: {
      stagePresence: 95,
      crowdEnergy: 98,
      versatility: 90,
      professionalism: 96,
      musicality: 93
    },
    testimonials: [
      {
        id: 't1',
        clientName: 'Sarah Mitchell',
        eventType: 'Wedding Reception',
        rating: 5,
        comment: 'DJ Flow absolutely killed it at our wedding! The energy was incredible and everyone was on the dance floor all night. Worth every penny!',
        date: '2024-09-15'
      },
      {
        id: 't2',
        clientName: 'Tech Corp Events',
        eventType: 'Corporate Gala',
        rating: 5,
        comment: 'Professional, talented, and brought exactly the vibe we wanted. Our team is still talking about it!',
        date: '2024-08-22'
      }
    ]
  },
  {
    id: '2',
    name: 'Jasmine "Vibe Queen" Williams',
    stageName: 'Vibe Queen',
    genres: ['Afrobeats', 'Dancehall', 'Reggae'],
    price: 3200,
    rating: 5.0,
    totalBookings: 189,
    responseTime: '< 1 hour',
    location: 'Miami, FL',
    availability: 'available',
    imageUrl: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=800',
    bio: 'International performer bringing authentic Caribbean and African rhythms to the global stage. Known for creating unforgettable cultural experiences.',
    experience: '8 years',
    specialties: ['Cultural Festivals', 'Beach Parties', 'International Events', 'Fashion Shows'],
    socialMedia: {
      instagram: '@vibequeenofficiel',
      tiktok: '@vibequeen',
      youtube: 'VibeQueenMusic'
    },
    skills: {
      stagePresence: 98,
      crowdEnergy: 96,
      versatility: 94,
      professionalism: 99,
      musicality: 97
    },
    testimonials: [
      {
        id: 't3',
        clientName: 'Miami Events Co',
        eventType: 'Festival',
        rating: 5,
        comment: 'Absolutely phenomenal! Vibe Queen brought authentic energy that had the entire crowd engaged. A true professional.',
        date: '2024-09-01'
      }
    ]
  },
  {
    id: '3',
    name: 'Andre "Sonic" Thompson',
    stageName: 'DJ Sonic',
    genres: ['EDM', 'House', 'Techno'],
    price: 2800,
    rating: 4.8,
    totalBookings: 312,
    responseTime: '< 3 hours',
    location: 'Los Angeles, CA',
    availability: 'limited',
    imageUrl: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800',
    bio: 'Electronic music producer and DJ known for mind-bending sets and cutting-edge sound design. Festival veteran with a passion for innovation.',
    experience: '12 years',
    specialties: ['Music Festivals', 'Raves', 'Club Residencies', 'Brand Activations'],
    socialMedia: {
      instagram: '@djsonic',
      tiktok: '@sonicbeats',
      youtube: 'SonicSounds'
    },
    skills: {
      stagePresence: 91,
      crowdEnergy: 95,
      versatility: 88,
      professionalism: 94,
      musicality: 96
    },
    testimonials: [
      {
        id: 't4',
        clientName: 'Alex Rivera',
        eventType: 'Birthday Party',
        rating: 5,
        comment: 'DJ Sonic transformed our venue into an absolute experience. The production value and music selection were next level!',
        date: '2024-09-10'
      }
    ]
  },
  {
    id: '4',
    name: 'Crystal "Harmony" Lee',
    stageName: 'DJ Harmony',
    genres: ['Jazz', 'Soul', 'Neo-Soul'],
    price: 2200,
    rating: 4.9,
    totalBookings: 156,
    responseTime: '< 2 hours',
    location: 'New York, NY',
    availability: 'available',
    imageUrl: 'https://images.pexels.com/photos/1034651/pexels-photo-1034651.jpeg?auto=compress&cs=tinysrgb&w=800',
    bio: 'Classically trained musician turned DJ, bringing sophisticated grooves and timeless vibes to intimate and upscale events.',
    experience: '6 years',
    specialties: ['Weddings', 'Cocktail Hours', 'Brunch Events', 'Gallery Openings'],
    socialMedia: {
      instagram: '@djharmony',
      tiktok: '@harmonysounds',
    },
    skills: {
      stagePresence: 89,
      crowdEnergy: 87,
      versatility: 92,
      professionalism: 97,
      musicality: 98
    },
    testimonials: [
      {
        id: 't5',
        clientName: 'Emma Thompson',
        eventType: 'Wedding',
        rating: 5,
        comment: 'DJ Harmony created the perfect atmosphere for our special day. Elegant, soulful, and exactly what we envisioned.',
        date: '2024-08-30'
      }
    ]
  },
  {
    id: '5',
    name: 'Tyler "Bass King" Jackson',
    stageName: 'Bass King',
    genres: ['Dubstep', 'Bass House', 'Trap'],
    price: 3500,
    rating: 4.7,
    totalBookings: 278,
    responseTime: '< 4 hours',
    location: 'Denver, CO',
    availability: 'limited',
    imageUrl: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800',
    bio: 'Heavy bass specialist known for earth-shaking performances and cutting-edge production. If you want the bass, you want Bass King.',
    experience: '9 years',
    specialties: ['Bass Music Events', 'College Parties', 'Warehouse Shows', 'Festival Main Stages'],
    socialMedia: {
      instagram: '@basskingofficial',
      tiktok: '@bassking',
      youtube: 'BassKingMusic'
    },
    skills: {
      stagePresence: 94,
      crowdEnergy: 99,
      versatility: 85,
      professionalism: 90,
      musicality: 91
    },
    testimonials: [
      {
        id: 't6',
        clientName: 'University Events Board',
        eventType: 'Campus Concert',
        rating: 5,
        comment: 'Bass King brought the energy like never before! Students are still talking about this show weeks later.',
        date: '2024-09-05'
      }
    ]
  },
  {
    id: '6',
    name: 'Sophia "Starlight" Rodriguez',
    stageName: 'DJ Starlight',
    genres: ['Pop', 'Top 40', 'Dance'],
    price: 2000,
    rating: 4.8,
    totalBookings: 201,
    responseTime: '< 2 hours',
    location: 'Chicago, IL',
    availability: 'available',
    imageUrl: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=800',
    bio: 'Energetic performer who knows how to read a room and keep everyone dancing. Perfect for events that need universal appeal and non-stop fun.',
    experience: '7 years',
    specialties: ['Birthday Parties', 'Sweet 16s', 'Bar/Bat Mitzvahs', 'School Dances'],
    socialMedia: {
      instagram: '@djstarlight',
      tiktok: '@starlightdj',
    },
    skills: {
      stagePresence: 92,
      crowdEnergy: 94,
      versatility: 96,
      professionalism: 95,
      musicality: 89
    },
    testimonials: [
      {
        id: 't7',
        clientName: 'Jennifer Parks',
        eventType: 'Sweet 16',
        rating: 5,
        comment: 'DJ Starlight made my daughters sweet 16 absolutely perfect! She played all the right songs and kept the energy high all night.',
        date: '2024-09-12'
      }
    ]
  }
];

export const genres = [
  { name: 'Hip-Hop', count: 45, color: '#EF4444' },
  { name: 'R&B', count: 38, color: '#F59E0B' },
  { name: 'EDM', count: 52, color: '#10B981' },
  { name: 'House', count: 41, color: '#3B82F6' },
  { name: 'Afrobeats', count: 29, color: '#F97316' },
  { name: 'Reggae', count: 24, color: '#14B8A6' },
  { name: 'Jazz', count: 18, color: '#6366F1' },
  { name: 'Soul', count: 22, color: '#EC4899' },
  { name: 'Trap', count: 47, color: '#8B5CF6' },
  { name: 'Pop', count: 56, color: '#06B6D4' }
];

export const stats = {
  totalBookings: 12847,
  activeArtists: 456,
  happyClients: 8932,
  citiesServed: 127
};

export const testimonials = [
  {
    id: '1',
    name: 'Michael Chen',
    role: 'Event Coordinator',
    company: 'TechStart Inc',
    comment: 'Young King Nation made booking talent for our events incredibly easy. The platform is intuitive and the artists are top-tier.',
    rating: 5,
    imageUrl: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '2',
    name: 'Aaliyah Johnson',
    role: 'Wedding Planner',
    company: 'Elegant Affairs',
    comment: 'I use YKN for all my events now. The response time is incredible and the artists always deliver beyond expectations.',
    rating: 5,
    imageUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '3',
    name: 'David Martinez',
    role: 'Private Client',
    company: null,
    comment: 'Booked DJ Flow for my anniversary party and it was the best decision ever. The process was smooth and the performance was unforgettable!',
    rating: 5,
    imageUrl: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];
