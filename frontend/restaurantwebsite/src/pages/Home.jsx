import React from 'react';
import BarInfo from '../components/BarInfo';
import { Navbar } from '../components/Navbar';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <div className="absolute inset-0 bg-black/60 z-0">
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>
      
      <BarInfo />
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col justify-center px-6 py-24 md:py-32 max-w-5xl mx-auto">
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-light mb-4">
            Welcome to <br />
            <span className="font-normal">Our Company</span>
          </h1>
          <p className="text-lg max-w-lg mb-8 text-gray-300">
            Delivering excellence in every product we create. Join us as we bring innovative solutions
            that meet your needs, with a focus on quality and customer satisfaction.
          </p>
          <button className="bg-transparent hover:bg-white text-white hover:text-black border border-white px-8 py-3 uppercase transition-colors">
            Learn More
          </button>
        </div>
      </section>

      {/* Chef preparing food section */}
      <section className="px-6 py-16 bg-black/40">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl mb-4">Our Expertise</h2>
            <p className="text-gray-300 mb-6">
              Our team brings together a wealth of experience to deliver outstanding results across various industries.
              We strive to make an impact through cutting-edge technology and a client-centered approach.
            </p>
            <button className="bg-transparent hover:bg-white text-white hover:text-black border border-white px-6 py-2 uppercase transition-colors">
              Explore Services
            </button>
          </div>
          <div className="relative h-64 md:h-full">
            {/* Placeholder for generic image */}
            <div className="bg-gray-800 h-full w-full rounded"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
