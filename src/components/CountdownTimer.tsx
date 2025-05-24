
import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-05-28T07:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-maroon text-white p-8 rounded-lg shadow-maroon">
      <h3 className="text-2xl font-playfair text-center mb-6 text-gold">
        Menuju Hari H
      </h3>
      <div className="grid grid-cols-4 gap-4 text-center">
        <div className="bg-white/10 rounded-lg p-4">
          <div className="text-3xl font-bold text-gold">{timeLeft.days}</div>
          <div className="text-sm text-white/80">Hari</div>
        </div>
        <div className="bg-white/10 rounded-lg p-4">
          <div className="text-3xl font-bold text-gold">{timeLeft.hours}</div>
          <div className="text-sm text-white/80">Jam</div>
        </div>
        <div className="bg-white/10 rounded-lg p-4">
          <div className="text-3xl font-bold text-gold">{timeLeft.minutes}</div>
          <div className="text-sm text-white/80">Menit</div>
        </div>
        <div className="bg-white/10 rounded-lg p-4">
          <div className="text-3xl font-bold text-gold">{timeLeft.seconds}</div>
          <div className="text-sm text-white/80">Detik</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
