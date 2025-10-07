import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import DiscoverPage from './components/DiscoverPage';
import ArtistProfile from './components/ArtistProfile';
import BookingFlow from './components/BookingFlow';
import ConfirmationPage from './components/ConfirmationPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';

type Page = 'home' | 'discover' | 'artist' | 'booking' | 'confirmation' | 'about' | 'contact';

interface NavigationState {
  page: Page;
  data?: any;
}

function App() {
  const [navigation, setNavigation] = useState<NavigationState>({ page: 'home' });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [navigation.page]);

  const handleNavigate = (page: string, data?: any) => {
    setNavigation({ page: page as Page, data });
  };

  const renderPage = () => {
    switch (navigation.page) {
      case 'home':
        return <LandingPage onNavigate={handleNavigate} />;
      case 'discover':
        return <DiscoverPage onNavigate={handleNavigate} />;
      case 'artist':
        return <ArtistProfile artistId={navigation.data} onNavigate={handleNavigate} />;
      case 'booking':
        return <BookingFlow artistId={navigation.data} onNavigate={handleNavigate} />;
      case 'confirmation':
        return <ConfirmationPage data={navigation.data} onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;
      default:
        return <LandingPage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <Header currentPage={navigation.page} onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
