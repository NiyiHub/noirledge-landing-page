import React from 'react';
import noirledgeLogo from '../assets/noirledge-logo.png';
import ibafestLogo from '../assets/ibafest-logo.png';

export const Hero = () => {
  return <section className="w-full bg-[#EFF6FF] py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#172554] mb-6">
          We're Building Something Special
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          Our websites are currently under development. We're working hard to
          bring you an amazing experience.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
          {/* Logo images */}
          <div className="w-64 h-64 flex items-center justify-center bg-white p-4 rounded-lg shadow-md">
            <img src={noirledgeLogo} alt="Noirledge Logo" className="max-w-full max-h-full object-contain" />
          </div>
          <div className="w-64 h-64 flex items-center justify-center bg-white p-4 rounded-lg shadow-md">
            <img src={ibafestLogo} alt="Ibadan Art & Culture Festival Logo" className="max-w-full max-h-full object-contain" />
          </div>
        </div>
      </div>
    </section>;
};