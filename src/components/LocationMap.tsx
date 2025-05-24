
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const LocationMap = () => {
  const handleOpenMap = () => {
    const mapsUrl = 'https://maps.google.com/?q=Jl.+Siaga+1+Gg.+swadaya+3+Kemayoran+Gempol+Jakarta+Indonesia+10630';
    window.open(mapsUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-lg shadow-maroon overflow-hidden">
      <div className="bg-gradient-maroon text-white p-4">
        <h3 className="text-xl font-playfair text-center">Lokasi Acara</h3>
      </div>
      <div className="p-6">
        <div className="bg-gray-100 rounded-lg p-8 text-center mb-4">
          <div className="w-16 h-16 bg-maroon/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <ExternalLink className="w-8 h-8 text-maroon" />
          </div>
          <h4 className="font-semibold text-lg text-maroon mb-2">SMKN 21 Jakarta</h4>
          <p className="text-gray-600 mb-4">
            Jl. Siaga 1 Gg. swadaya 3<br />
            Kemayoran Gempol, Jakarta, Indonesia 10630
          </p>
          <Button 
            onClick={handleOpenMap}
            className="bg-gradient-maroon hover:bg-maroon-dark text-white"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Buka di Google Maps
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;
