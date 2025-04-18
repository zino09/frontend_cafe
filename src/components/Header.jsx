
import React from 'react';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-black text-white shadow-md">
      <h1 className="text-xl font-bold text-green-500">TASTE TERRITORY</h1>
      <nav className="space-x-6">
        <a href="#home" className="hover:text-green-500">Home</a>
        <a href="#lunch" className="hover:text-green-500">Business Lunch</a>
        <a href="#services" className="hover:text-green-500">Services</a>
        <a href="#pizza" className="hover:text-green-500">Pizza</a>
        <a href="#events" className="hover:text-green-500">Events</a>
        <a href="#contact" className="hover:text-green-500">Contact</a>
      </nav>
    </header>
  );
}
