import React from 'react';
import osundareImage from '../assets/Niyi Osundare Portrait.png';

export const EventPromo = () => {
  return <section className="w-full bg-[#EFF6FF] py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#172554] mb-4">
            Upcoming Event
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join us for a special literary event presented by Ibadan Book and
            Arts Festival
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-[#40000B] text-white px-4 py-1 rounded-full text-sm font-medium mb-2">
              August 16, 2025
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#172554]">
              Invocations of the Word: A Day of Poetry and Conversations with
              Niyi Osundare
            </h3>
            <p className="text-gray-700">
              The Ibadan Book and Arts Festival (ÌbàFest) presents an
              extraordinary literary event with the renowned poet, scholar, and
              public intellectual, Professor Niyi Osundare. This special event
              will feature live readings from Professor Osundare's poetry
              collections, followed by a thought-provoking conversation with
              leading journalists and scholars.
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="font-medium text-[#172554] w-24">When:</span>
                <span className="text-gray-700">
                  Saturday, August 16, 2025 • 2:00 PM
                </span>
              </div>
              <div className="flex items-start">
                <span className="font-medium text-[#172554] w-24">Where:</span>
                <span className="text-gray-700">
                  RovingHeights Bookstore, Prime Mall, 33 Awolowo Avenue,
                  Opposite Domino's Pizza, Bodija, Ibadan
                </span>
              </div>
              <div className="flex items-start">
                <span className="font-medium text-[#172554] w-24">
                  Admission:
                </span>
                <span className="text-gray-700">
                  Free (Limited seats available)
                </span>
              </div>
            </div>
            <a href="http://www.Bit.ly/OSUNDARE" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#D65D2B] text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors">
              Book Your Seat
            </a>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={osundareImage} alt="Professor Niyi Osundare Event" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>;
};