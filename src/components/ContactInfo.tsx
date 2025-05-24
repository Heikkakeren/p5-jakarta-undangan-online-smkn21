
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, User } from 'lucide-react';

const ContactInfo = () => {
  const contacts = [
    {
      name: 'Budi Santoso, S.Pd',
      role: 'Koordinator P5',
      phone: '0812-3456-7890',
      email: 'budi.santoso@smkn21jkt.sch.id'
    },
    {
      name: 'Sari Dewi, S.Pd',
      role: 'Sie. Acara',
      phone: '0856-7890-1234',
      email: 'sari.dewi@smkn21jkt.sch.id'
    }
  ];

  return (
    <Card className="bg-white/95 backdrop-blur-sm shadow-maroon">
      <CardHeader className="bg-gradient-maroon text-white">
        <CardTitle className="text-center text-2xl font-playfair">
          Kontak Person
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid md:grid-cols-2 gap-6">
          {contacts.map((contact, index) => (
            <div key={index} className="bg-maroon/5 rounded-lg p-4 border border-maroon/20">
              <div className="flex items-center mb-3">
                <User className="w-5 h-5 text-maroon mr-2" />
                <div>
                  <h4 className="font-semibold text-maroon">{contact.name}</h4>
                  <p className="text-sm text-gray-600">{contact.role}</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <Phone className="w-4 h-4 text-maroon mr-2" />
                  <a href={`tel:${contact.phone}`} className="text-gray-700 hover:text-maroon">
                    {contact.phone}
                  </a>
                </div>
                <div className="flex items-center text-sm">
                  <Mail className="w-4 h-4 text-maroon mr-2" />
                  <a href={`mailto:${contact.email}`} className="text-gray-700 hover:text-maroon">
                    {contact.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Untuk informasi lebih lanjut, silakan hubungi kontak person di atas
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactInfo;
