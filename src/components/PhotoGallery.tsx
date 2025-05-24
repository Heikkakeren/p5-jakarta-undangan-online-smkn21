
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PhotoGallery = () => {
  const photos = [
    {
      id: 1,
      title: 'Persiapan Acara P5',
      description: 'Tim siswa sedang mempersiapkan presentasi',
      placeholder: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      title: 'Workshop Batik',
      description: 'Kegiatan workshop membatik tradisional',
      placeholder: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      title: 'Presentasi Kelompok',
      description: 'Siswa mempresentasikan hasil penelitian',
      placeholder: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop'
    },
    {
      id: 4,
      title: 'Dokumentasi Kegiatan',
      description: 'Momen kebersamaan dalam acara P5',
      placeholder: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=300&fit=crop'
    }
  ];

  return (
    <Card className="bg-white/95 backdrop-blur-sm shadow-maroon">
      <CardHeader className="bg-gradient-maroon text-white">
        <CardTitle className="text-center text-2xl font-playfair">
          Galeri Dokumentasi
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {photos.map((photo) => (
            <div 
              key={photo.id} 
              className="group cursor-pointer overflow-hidden rounded-lg border border-maroon/20 hover:shadow-maroon transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={photo.placeholder}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <h4 className="font-semibold text-maroon mb-1">
                  {photo.title}
                </h4>
                <p className="text-sm text-gray-600">
                  {photo.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PhotoGallery;
