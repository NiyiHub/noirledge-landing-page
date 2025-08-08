import React from 'react';
import { Instagram, Twitter, Facebook, Linkedin, MessageCircle, Youtube } from 'lucide-react';

export const Footer = () => {
  return <footer className="w-full bg-[#030712] text-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Noirledge</h3>
            <p className="text-gray-300 max-w-md">
              A publishing company committed to excellence and innovation in
              literature.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Ibadan Book and Arts Festival
            </h3>
            <p className="text-gray-300 max-w-md">
              Celebrating African literature, creativity, and cultural dialogue
              in the historic city of Ibadan.
            </p>
            <p className="text-gray-300 mt-2">
              <strong>Contact:</strong> hello@ibadanfestival.org |
              +2349096664359, +2348098164359
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Noirledge & Ibadan Book and Arts
            Festival. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="https://instagram.com/ibadanfestival" className="text-gray-400 hover:text-[#D65D2B] transition-colors" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="https://x.com/ibadanfestival" className="text-gray-400 hover:text-[#D65D2B] transition-colors" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="https://facebook.com/ibadanfestival" className="text-gray-400 hover:text-[#D65D2B] transition-colors" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="https://www.linkedin.com/showcase/ibadanfestival/" className="text-gray-400 hover:text-[#D65D2B] transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="https://tiktok.com/ibadanfestival" className="text-gray-400 hover:text-[#D65D2B] transition-colors" aria-label="TikTok">
              <MessageCircle size={20} />
            </a>
            <a href="https://youtube.com/@ibadanfestival" className="text-gray-400 hover:text-[#D65D2B] transition-colors" aria-label="YouTube">
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>;
};