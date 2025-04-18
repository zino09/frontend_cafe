
import React from 'react';

export default function Services() {
  const services = [
    { name: 'Family Events', icon: '🎉' },
    { name: 'Catering', icon: '🍽️' },
    { name: 'Corporate Lunches', icon: '🏢' },
  ];

  return (
    <section id="services" className="py-12 px-6 bg-black text-white text-center">
      <h2 className="text-3xl font-bold text-green-500 mb-6">Our Services</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {services.map((s, index) => (
          <div key={index} className="bg-zinc-800 p-6 rounded-lg shadow-lg w-40">
            <div className="text-4xl">{s.icon}</div>
            <p className="mt-2">{s.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
