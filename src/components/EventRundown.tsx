
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const EventRundown = () => {
  const rundown = [
    { time: '07:00 - 08:00', activity: 'Registrasi & Pembukaan', description: 'Registrasi peserta dan pembukaan acara' },
    { time: '08:00 - 09:30', activity: 'Presentasi Proyek P5', description: 'Presentasi hasil proyek kearifan lokal' },
    { time: '09:30 - 10:00', activity: 'Coffee Break', description: 'Istirahat dan networking' },
    { time: '10:00 - 12:00', activity: 'Workshop Budaya', description: 'Workshop praktek kearifan lokal tradisional' },
    { time: '12:00 - 13:00', activity: 'Makan Siang', description: 'Makan siang bersama dengan menu tradisional' },
    { time: '13:00 - 14:30', activity: 'Pameran & Evaluasi', description: 'Pameran hasil karya dan evaluasi kegiatan' },
    { time: '14:30 - 15:00', activity: 'Penutupan', description: 'Penutupan acara dan foto bersama' }
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
