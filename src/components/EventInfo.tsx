
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, MapPin } from 'lucide-react';

const EventInfo = () => {
  const eventDetails = {
    date: 'Rabu, 28 Mei 2025',
    time: '07:00 - 15:00 WIB',
    location: 'SMKN 21 Jakarta',
    address: 'Jl. Siaga 1 Gg. swadaya 3 Kemayoran Gempol, Jakarta, Indonesia 10630'
  };

  return (
    <div className="grid md:grid-cols-3 gap-6">
      <Card className="bg-white/90 backdrop-blur-sm border-maroon/20 hover:shadow-maroon transition-all duration-300">
        <CardContent className="p-6 text-center">
          <Calendar className="w-12 h-12 text-maroon mx-auto mb-4" />
          <h3 className="font-playfair text-lg font-semibold text-maroon mb-2">
            Tanggal
          </h3>
          <p className="text-gray-700">{eventDetails.date}</p>
        </CardContent>
      </Card>

      <Card className="bg-white/90 backdrop-blur-sm border-maroon/20 hover:shadow-maroon transition-all duration-300">
        <CardContent className="p-6 text-center">
          <Clock className="w-12 h-12 text-maroon mx-auto mb-4" />
          <h3 className="font-playfair text-lg font-semibold text-maroon mb-2">
            Waktu
          </h3>
          <p className="text-gray-700">{eventDetails.time}</p>
        </CardContent>
      </Card>

      <Card className="bg-white/90 backdrop-blur-sm border-maroon/20 hover:shadow-maroon transition-all duration-300">
        <CardContent className="p-6 text-center">
          <MapPin className="w-12 h-12 text-maroon mx-auto mb-4" />
          <h3 className="font-playfair text-lg font-semibold text-maroon mb-2">
            Lokasi
          </h3>
          <p className="text-gray-700 font-medium">{eventDetails.location}</p>
          <p className="text-sm text-gray-600 mt-2">{eventDetails.address}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default EventInfo;
