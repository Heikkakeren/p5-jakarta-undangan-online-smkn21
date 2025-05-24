
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';

interface RSVPFormProps {
  onSubmit: (data: { name: string; guests: number }) => void;
}

const RSVPForm = ({ onSubmit }: RSVPFormProps) => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onSubmit({ name: name.trim(), guests });
      toast({
        title: "RSVP Berhasil!",
        description: `Terima kasih ${name}, kami menunggu kehadiran Anda!`,
      });
    } else {
      toast({
        title: "Mohon isi nama Anda",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-white/95 backdrop-blur-sm shadow-maroon border-maroon/20">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-playfair text-maroon">
          Konfirmasi Kehadiran
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Mohon isi data untuk konfirmasi kehadiran Anda
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-maroon font-medium">
              Nama Lengkap
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Masukkan nama lengkap Anda"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-maroon/30 focus:border-maroon focus:ring-maroon"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="guests" className="text-maroon font-medium">
              Jumlah yang Hadir
            </Label>
            <Input
              id="guests"
              type="number"
              min="1"
              max="10"
              value={guests}
              onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
              className="border-maroon/30 focus:border-maroon focus:ring-maroon"
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-gradient-maroon hover:bg-maroon-dark text-white font-medium py-3 transition-all duration-300 hover:shadow-maroon"
          >
            Konfirmasi Kehadiran
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default RSVPForm;
