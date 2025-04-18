
import React from 'react';

export default function PizzaBuilder() {
  return (
    <section id="pizza" className="py-12 px-6 bg-zinc-900 text-white text-center">
      <h2 className="text-3xl font-bold text-green-500 mb-4">Build Your Pizza</h2>
      <p className="mb-8">We’ll make a pizza with your favorite ingredients</p>
      <img src="/pizza.jpg" alt="Custom pizza" className="mx-auto rounded-lg shadow-lg max-w-md" />
    </section>
  );
}
