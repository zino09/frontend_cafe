
import React from 'react';

export default function HeroSection() {
  return (
    <section id="home" className="bg-cover bg-center h-[80vh] flex flex-col justify-center items-center text-white text-center" style={{ backgroundImage: "url('/hero.jpg')" }}>
      <h2 className="text-4xl md:text-6xl font-bold">Fresh & Hot Food Delivery</h2>
      <p className="mt-4 text-xl">Delivered within 40 minutes</p>
    </section>
  );
}
