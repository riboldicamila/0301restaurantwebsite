import React from 'react';

import Button from '../components/Button';
import DishCard from '../components/DishCard';
import BenefitCard from '../components/BenefitCard';

const Home = () => {
  return (
    <div className="bg-[#F1FAEE] min-h-screen">      
      <div className="bg-[#2D3142] text-[#F1FAEE]">
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#E63946]">
              AUTHENTIC THAI STREET FOOD EXPERIENCE
            </h1>
            <p className="text-lg mb-6">
              Bringing the vibrant flavors and energy of Bangkok's street food scene right to your table.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary">ORDER NOW</Button>
              <Button variant="outline">VIEW MENU</Button>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-xl ml-10">
              <img 
                src="https://res.cloudinary.com/dav7tzdzv/image/upload/v1745860375/pexels-photo-175754_exsdk9.jpg" 
                alt="Thai street food dishes" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#2D3142]">STREET FOOD FAVORITES</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <DishCard 
            title="Pad Thai"
            description="Stir-fried rice noodles with eggs, tofu, bean sprouts, and peanuts in a tangy sauce."
            rating={4.8}
            imageUrl="/api/placeholder/400/300"
          />
          
          <DishCard 
            title="Som Tam (Papaya Salad)"
            description="Spicy green papaya salad with tomatoes, peanuts, and a zesty lime dressing."
            rating={4.7}
            imageUrl="/api/placeholder/400/300"
          />
          
          <DishCard 
            title="Mango Sticky Rice"
            description="Sweet sticky rice topped with fresh mango slices and coconut cream."
            rating={4.9}
            imageUrl="/api/placeholder/400/300"
          />
        </div>
        
        <div className="text-center mt-12">
          <Button variant="secondary">EXPLORE FULL MENU</Button>
        </div>
      </div>
      
      <div className="bg-[#E5EFE6] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#2D3142]">THE STREET FOOD EXPERIENCE</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BenefitCard 
              title="Bold Flavors"
              description="Our dishes capture the perfect balance of sweet, sour, salty, and spicy that Thai street food is famous for."
              icon={
                <svg className="w-12 h-12 text-[#E63946]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
            />
            
            <BenefitCard 
              title="Fresh Ingredients"
              description="We use locally sourced ingredients at peak freshness, just like the street vendors in Thailand."
              icon={
                <svg className="w-12 h-12 text-[#E63946]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V6zm6 10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2zm10-10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z" />
                </svg>
              }
            />
            
            <BenefitCard 
              title="Quick & Satisfying"
              description="Just like the streets of Bangkok, our dishes are prepared quickly but never compromise on flavor."
              icon={
                <svg className="w-12 h-12 text-[#E63946]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
            />
          </div>
        </div>
      </div>
      
      <div className="bg-[#2D3142] text-[#F1FAEE] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#E63946]">READY FOR A TASTE OF BANGKOK?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Order now for delivery or pickup and experience the authentic flavors of Thai street food from the comfort of your home.
          </p>
          <Button>ORDER NOW</Button>
        </div>
      </div>
    </div>
  );
};

export default Home;