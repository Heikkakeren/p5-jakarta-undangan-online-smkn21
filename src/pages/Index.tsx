
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import RSVPForm from '@/components/RSVPForm';
import CountdownTimer from '@/components/CountdownTimer';
import EventInfo from '@/components/EventInfo';
import LocationMap from '@/components/LocationMap';
import EventRundown from '@/components/EventRundown';
import PhotoGallery from '@/components/PhotoGallery';
import ContactInfo from '@/components/ContactInfo';

const Index = () => {
  const [showMainContent, setShowMainContent] = useState(false);
  const [rsvpData, setRSVPData] = useState<{ name: string; guests: number } | null>(null);

  const handleRSVPSubmit = (data: { name: string; guests: number }) => {
    setRSVPData(data);
    setTimeout(() => {
      setShowMainContent(true);
    }, 1000);
  };

  const handleBackToLanding = () => {
    setShowMainContent(false);
    setRSVPData(null);
  };

  if (!showMainContent) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-maroon via-maroon-light to-maroon-dark batik-pattern">
        <div className="min-h-screen bg-black/20 flex items-center justify-center p-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Header */}
            <div className="mb-12 animate-fade-in">
              <div className="mb-6">
                <div className="w-24 h-24 bg-gold rounded-full flex items-center justify-center mx-auto mb-6 animate-float">
                  <span className="text-3xl font-bold text-maroon">P5</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white text-shadow mb-4">
                Undangan P5
              </h1>
              <h2 className="text-2xl md:text-3xl font-playfair text-gold text-shadow mb-6">
                SMKN 21 Jakarta
              </h2>
              <div className="w-32 h-1 bg-gold mx-auto rounded-full mb-6"></div>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                Proyek Penguatan Profil Pelajar Pancasila<br />
                Tema: <span className="text-gold font-semibold">Kearifan Lokal</span>
              </p>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-10 left-10 w-20 h-20 border-2 border-gold/30 rounded-full animate-float"></div>
            <div className="absolute top-20 right-20 w-16 h-16 border-2 border-gold/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-20 left-20 w-12 h-12 border-2 border-gold/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

            {/* RSVP Form */}
            <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <RSVPForm onSubmit={handleRSVPSubmit} />
            </div>

            {/* Traditional Pattern */}
            <div className="mt-12 text-center">
              <div className="text-gold text-4xl mb-4">❋ ❋ ❋</div>
              <p className="text-white/70 text-sm">
                Dengan hormat mengundang Bapak/Ibu/Saudara/i
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 batik-pattern">
      {/* Header */}
      <header className="bg-gradient-maroon text-white shadow-maroon sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl md:text-3xl font-playfair font-bold">
                P5 SMKN 21 Jakarta
              </h1>
              <p className="text-gold text-sm md:text-base">Kearifan Lokal</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-white/90">Selamat datang,</p>
              <p className="font-semibold text-gold">{rsvpData?.name}</p>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleBackToLanding}
                className="mt-2 border-white text-white hover:bg-white hover:text-maroon"
              >
                Kembali
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 space-y-12">
        {/* Countdown Section */}
        <section className="animate-fade-in">
          <CountdownTimer />
        </section>

        {/* Event Info Section */}
        <section className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl font-playfair font-bold text-maroon text-center mb-8">
            Informasi Acara
          </h2>
          <EventInfo />
        </section>

        {/* Location Section */}
        <section className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-3xl font-playfair font-bold text-maroon text-center mb-8">
            Lokasi & Peta
          </h2>
          <div className="max-w-2xl mx-auto">
            <LocationMap />
          </div>
        </section>

        {/* Rundown Section */}
        <section className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <h2 className="text-3xl font-playfair font-bold text-maroon text-center mb-8">
            Agenda Kegiatan
          </h2>
          <EventRundown />
        </section>

        {/* Gallery Section */}
        <section className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <h2 className="text-3xl font-playfair font-bold text-maroon text-center mb-8">
            Galeri Kegiatan
          </h2>
          <PhotoGallery />
        </section>

        {/* Contact Section */}
        <section className="animate-fade-in" style={{ animationDelay: '1s' }}>
          <h2 className="text-3xl font-playfair font-bold text-maroon text-center mb-8">
            Hubungi Kami
          </h2>
          <ContactInfo />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-maroon text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <h3 className="text-xl font-playfair font-bold mb-2">P5 SMKN 21 Jakarta</h3>
            <p className="text-gold">Kearifan Lokal - Membangun Karakter Bangsa</p>
          </div>
          <div className="text-gold text-2xl mb-4">❋ ❋ ❋</div>
          <p className="text-sm text-white/70">
            © 2025 SMKN 21 Jakarta. Semua hak cipta dilindungi.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
