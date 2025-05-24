
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const EventRundown = () => {
  const rundown = [
    { time: '05:00 - 06:00', activity: 'Persiapan tempat dan perlengkapan', description: '📍 Lapangan & Multimedia' },
    { time: '06:00 - 06:30', activity: 'Persiapan panitia dan MC', description: '📍 Lapangan & Multimedia' },
    { time: '06:30 - 07:30', activity: 'Sterilisasi lokasi & Tarian Pembuka', description: '📍 Lapangan' },
    { time: '07:30 - 08:42', activity: 'Pembukaan, doa, menyanyikan lagu Indonesia Raya, dan sambutan', description: '📍 Lapangan' },
    { time: '08:42 - 08:55', activity: 'Sejarah Jakarta & Pembukaan Drama', description: '📍 Lapangan' },
    { time: '08:55 - 09:37', activity: 'Pertunjukan Drama & Tarian', description: '📍 Lapangan' },
    { time: '09:37 - 09:57', activity: 'Apresiasi & Pengarahan Fashion Show', description: '📍 Lapangan' },
    { time: '09:57 - 10:27', activity: 'Fashion Show per kelas', description: '📍 Lapangan' },
    { time: '10:27 - 10:47', activity: 'Penutupan, Flashmob, dan pengarahan sesi foto', description: '📍 Lapangan' },
    { time: '10:47 - 11:52', activity: 'Sesi Foto: Kepala Sekolah, Guru, dan Kelas', description: '📍 Ruang Multimedia' },
    { time: '11:52 - 12:00', activity: 'Pengarahan istirahat', description: '📍 Lapangan' }
  ];

  return (
    <Card className="bg-white/95 backdrop-blur-sm shadow-maroon">
      <CardHeader className="bg-gradient-maroon text-white">
        <CardTitle className="text-center text-2xl font-playfair">
          Rundown Acara
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-hidden">
          {rundown.map((item, index) => (
            <div 
              key={index} 
              className="border-b border-gray-100 last:border-b-0 hover:bg-maroon/5 transition-colors duration-200"
            >
              <div className="p-4 md:p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="md:w-32 flex-shrink-0">
                    <span className="inline-block bg-maroon text-white px-3 py-1 rounded-full text-sm font-medium">
                      {item.time}
                    </span>
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-semibold text-maroon text-lg mb-1">
                      {item.activity}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default EventRundown;
