import { useState } from 'react';
import { Calendar, Clock, MapPin, FileText, CreditCard, CheckCircle, ChevronLeft, ChevronRight, DollarSign, Plus } from 'lucide-react';
import { artists } from '../data/sampleData';

interface BookingFlowProps {
  artistId: string;
  onNavigate: (page: string, data?: any) => void;
}

const eventTypes = [
  { id: 'wedding', name: 'Wedding', icon: '💍', description: 'Celebrate your special day' },
  { id: 'corporate', name: 'Corporate Event', icon: '💼', description: 'Professional gatherings' },
  { id: 'birthday', name: 'Birthday Party', icon: '🎂', description: 'Make it memorable' },
  { id: 'festival', name: 'Festival', icon: '🎪', description: 'Large-scale events' },
  { id: 'private', name: 'Private Party', icon: '🎉', description: 'Intimate celebrations' },
  { id: 'other', name: 'Other', icon: '🎵', description: 'Custom events' },
];

const addOns = [
  { id: 'sound', name: 'Premium Sound System', price: 500, icon: '🔊' },
  { id: 'lighting', name: 'Professional Lighting', price: 400, icon: '💡' },
  { id: 'backup', name: 'Backup Artist', price: 800, icon: '👥' },
  { id: 'extended', name: 'Extended Performance (+2hrs)', price: 600, icon: '⏰' },
];

export default function BookingFlow({ artistId, onNavigate }: BookingFlowProps) {
  const artist = artists.find(a => a.id === artistId);
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    eventType: '',
    date: '',
    time: '',
    duration: 3,
    location: '',
    guestCount: 100,
    specialRequests: '',
    selectedAddOns: [] as string[],
    discountCode: '',
  });

  if (!artist) {
    return <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">Artist not found</div>;
  }

  const steps = [
    { number: 1, name: 'Event Details', icon: FileText },
    { number: 2, name: 'Date & Time', icon: Calendar },
    { number: 3, name: 'Location & Extras', icon: MapPin },
    { number: 4, name: 'Review & Payment', icon: CreditCard },
  ];

  const toggleAddOn = (addOnId: string) => {
    setBookingData(prev => ({
      ...prev,
      selectedAddOns: prev.selectedAddOns.includes(addOnId)
        ? prev.selectedAddOns.filter(id => id !== addOnId)
        : [...prev.selectedAddOns, addOnId]
    }));
  };

  const calculateTotal = () => {
    let total = artist.price;
    bookingData.selectedAddOns.forEach(addOnId => {
      const addOn = addOns.find(a => a.id === addOnId);
      if (addOn) total += addOn.price;
    });
    if (bookingData.discountCode === 'FIRST10') {
      total *= 0.9;
    }
    return total;
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      onNavigate('confirmation', { artist, bookingData, total: calculateTotal() });
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return bookingData.eventType !== '';
      case 2:
        return bookingData.date !== '' && bookingData.time !== '';
      case 3:
        return bookingData.location !== '';
      case 4:
        return true;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => onNavigate('artist', artistId)}
          className="mb-8 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-all border border-slate-700"
        >
          ← Back to Artist Profile
        </button>

        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-2">Book {artist.stageName}</h1>
          <p className="text-slate-400">Complete the booking process in a few simple steps</p>
        </div>

        <div className="flex items-center justify-between mb-12 relative">
          <div className="absolute top-5 left-0 right-0 h-1 bg-slate-800">
            <div
              className="h-full bg-gradient-to-r from-cyan-500 to-teal-500 transition-all duration-500"
              style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
            ></div>
          </div>
          {steps.map((step) => {
            const Icon = step.icon;
            const isActive = currentStep === step.number;
            const isCompleted = currentStep > step.number;
            return (
              <div key={step.number} className="flex flex-col items-center relative z-10">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all ${
                    isCompleted
                      ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white'
                      : isActive
                      ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white scale-110'
                      : 'bg-slate-800 text-slate-500'
                  }`}
                >
                  {isCompleted ? <CheckCircle className="w-6 h-6" /> : <Icon className="w-6 h-6" />}
                </div>
                <span className={`text-sm font-medium hidden md:block ${isActive ? 'text-white' : 'text-slate-500'}`}>
                  {step.name}
                </span>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
              {currentStep === 1 && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">What type of event is this?</h2>
                  <p className="text-slate-400 mb-8">Help us customize your experience</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {eventTypes.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setBookingData({ ...bookingData, eventType: type.id })}
                        className={`p-6 rounded-xl text-left transition-all border-2 ${
                          bookingData.eventType === type.id
                            ? 'border-cyan-500 bg-cyan-500/10'
                            : 'border-slate-700 bg-slate-800 hover:border-slate-600'
                        }`}
                      >
                        <div className="text-4xl mb-3">{type.icon}</div>
                        <h3 className="text-xl font-bold text-white mb-1">{type.name}</h3>
                        <p className="text-slate-400 text-sm">{type.description}</p>
                      </button>
                    ))}
                  </div>

                  <div className="mt-8">
                    <label className="text-white font-semibold mb-3 block">Expected Guest Count</label>
                    <input
                      type="range"
                      min="10"
                      max="1000"
                      step="10"
                      value={bookingData.guestCount}
                      onChange={(e) => setBookingData({ ...bookingData, guestCount: parseInt(e.target.value) })}
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                    />
                    <div className="flex justify-between text-sm text-slate-400 mt-2">
                      <span>10 guests</span>
                      <span className="text-cyan-400 font-bold">{bookingData.guestCount} guests</span>
                      <span>1000+ guests</span>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">When is your event?</h2>
                  <p className="text-slate-400 mb-8">Select your preferred date and time</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-white font-semibold mb-3 block">Event Date</label>
                      <input
                        type="date"
                        value={bookingData.date}
                        onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-white font-semibold mb-3 block">Start Time</label>
                      <input
                        type="time"
                        value={bookingData.time}
                        onChange={(e) => setBookingData({ ...bookingData, time: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="mt-8">
                    <label className="text-white font-semibold mb-3 block">Performance Duration</label>
                    <div className="flex gap-3">
                      {[2, 3, 4, 5, 6].map((hours) => (
                        <button
                          key={hours}
                          onClick={() => setBookingData({ ...bookingData, duration: hours })}
                          className={`flex-1 py-3 rounded-xl font-semibold transition-all border-2 ${
                            bookingData.duration === hours
                              ? 'border-cyan-500 bg-cyan-500/10 text-cyan-400'
                              : 'border-slate-700 bg-slate-800 text-slate-400 hover:border-slate-600'
                          }`}
                        >
                          {hours}h
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-slate-800 rounded-xl border border-slate-700">
                    <div className="flex items-start gap-3">
                      <Clock className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-white font-semibold mb-1">Booking Window</h3>
                        <p className="text-slate-400 text-sm">
                          We recommend booking at least 2-4 weeks in advance for the best availability.
                          Peak season dates may require earlier booking.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">Event Location & Details</h2>
                  <p className="text-slate-400 mb-8">Tell us more about your event</p>

                  <div className="space-y-6">
                    <div>
                      <label className="text-white font-semibold mb-3 block">Event Location</label>
                      <input
                        type="text"
                        value={bookingData.location}
                        onChange={(e) => setBookingData({ ...bookingData, location: e.target.value })}
                        placeholder="Enter venue address or location"
                        className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-white font-semibold mb-3 block">Special Requests or Notes</label>
                      <textarea
                        value={bookingData.specialRequests}
                        onChange={(e) => setBookingData({ ...bookingData, specialRequests: e.target.value })}
                        placeholder="Any specific songs, themes, or requirements? Let us know!"
                        rows={4}
                        className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                      />
                      <div className="text-sm text-slate-500 mt-2">
                        {bookingData.specialRequests.length} / 500 characters
                      </div>
                    </div>

                    <div>
                      <label className="text-white font-semibold mb-4 block flex items-center gap-2">
                        <Plus className="w-5 h-5" />
                        Add-Ons & Upgrades
                      </label>
                      <div className="grid md:grid-cols-2 gap-4">
                        {addOns.map((addOn) => (
                          <button
                            key={addOn.id}
                            onClick={() => toggleAddOn(addOn.id)}
                            className={`p-4 rounded-xl text-left transition-all border-2 ${
                              bookingData.selectedAddOns.includes(addOn.id)
                                ? 'border-cyan-500 bg-cyan-500/10'
                                : 'border-slate-700 bg-slate-800 hover:border-slate-600'
                            }`}
                          >
                            <div className="flex items-start justify-between mb-2">
                              <span className="text-2xl">{addOn.icon}</span>
                              <span className="text-cyan-400 font-bold">+${addOn.price}</span>
                            </div>
                            <h3 className="text-white font-semibold">{addOn.name}</h3>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 4 && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">Review Your Booking</h2>
                  <p className="text-slate-400 mb-8">Please confirm all details are correct</p>

                  <div className="space-y-6">
                    <div className="bg-slate-800 rounded-xl p-6">
                      <h3 className="text-white font-semibold mb-4">Event Details</h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-slate-400">Event Type:</span>
                          <span className="text-white font-medium">
                            {eventTypes.find(t => t.id === bookingData.eventType)?.name}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Date:</span>
                          <span className="text-white font-medium">{bookingData.date}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Time:</span>
                          <span className="text-white font-medium">{bookingData.time}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Duration:</span>
                          <span className="text-white font-medium">{bookingData.duration} hours</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Location:</span>
                          <span className="text-white font-medium">{bookingData.location}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Guest Count:</span>
                          <span className="text-white font-medium">{bookingData.guestCount}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-800 rounded-xl p-6">
                      <h3 className="text-white font-semibold mb-4">Price Breakdown</h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-slate-400">Base Price ({bookingData.duration}h):</span>
                          <span className="text-white font-medium">${artist.price.toLocaleString()}</span>
                        </div>
                        {bookingData.selectedAddOns.map(addOnId => {
                          const addOn = addOns.find(a => a.id === addOnId);
                          return (
                            <div key={addOnId} className="flex justify-between">
                              <span className="text-slate-400">{addOn?.name}:</span>
                              <span className="text-white font-medium">+${addOn?.price.toLocaleString()}</span>
                            </div>
                          );
                        })}
                        {bookingData.discountCode === 'FIRST10' && (
                          <div className="flex justify-between text-green-400">
                            <span>Discount (10%):</span>
                            <span>-${(calculateTotal() * 0.1 / 0.9).toFixed(0)}</span>
                          </div>
                        )}
                        <div className="pt-3 border-t border-slate-700 flex justify-between text-lg">
                          <span className="text-white font-bold">Total:</span>
                          <span className="text-cyan-400 font-bold">${calculateTotal().toLocaleString()}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-800 rounded-xl p-6">
                      <label className="text-white font-semibold mb-3 block">Discount Code</label>
                      <div className="flex gap-3">
                        <input
                          type="text"
                          value={bookingData.discountCode}
                          onChange={(e) => setBookingData({ ...bookingData, discountCode: e.target.value })}
                          placeholder="Enter code"
                          className="flex-1 px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                        />
                        <button className="px-6 py-3 bg-cyan-500 text-white font-semibold rounded-xl hover:bg-cyan-600 transition-colors">
                          Apply
                        </button>
                      </div>
                      {bookingData.discountCode === 'FIRST10' && (
                        <p className="text-green-400 text-sm mt-2 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          Discount applied! 10% off your booking
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={artist.imageUrl}
                    alt={artist.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-white font-bold">{artist.stageName}</h3>
                    <p className="text-slate-400 text-sm">{artist.name}</p>
                  </div>
                </div>

                <div className="space-y-3 text-sm mb-6">
                  <div className="flex items-center gap-2 text-slate-400">
                    <MapPin className="w-4 h-4" />
                    <span>{artist.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-amber-400">
                    <CheckCircle className="w-4 h-4" />
                    <span>{artist.rating} rating ({artist.totalBookings} bookings)</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <Clock className="w-4 h-4" />
                    <span>Responds in {artist.responseTime}</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-800">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400">Estimated Total:</span>
                    <span className="text-2xl font-bold text-white">${calculateTotal().toLocaleString()}</span>
                  </div>
                  <p className="text-xs text-slate-500">Final price may vary based on specific requirements</p>
                </div>
              </div>

              <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  What's Included
                </h3>
                <ul className="space-y-3 text-sm text-slate-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>Professional DJ equipment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>Curated music selection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>Event coordination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>Setup and breakdown</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-8">
          <button
            onClick={handleBack}
            disabled={currentStep === 1}
            className={`px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all ${
              currentStep === 1
                ? 'bg-slate-800 text-slate-600 cursor-not-allowed'
                : 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-700'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
            Back
          </button>

          <button
            onClick={handleNext}
            disabled={!canProceed()}
            className={`px-8 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all ${
              !canProceed()
                ? 'bg-slate-700 text-slate-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white hover:scale-105 shadow-lg shadow-cyan-500/30'
            }`}
          >
            {currentStep === 4 ? 'Confirm Booking' : 'Continue'}
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
