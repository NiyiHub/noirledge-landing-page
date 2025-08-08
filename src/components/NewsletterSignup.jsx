import React from 'react';

export const NewsletterSignup = () => {
  return <section className="w-full bg-[#172554] text-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated</h2>
        <p className="text-lg md:text-xl text-[#DBEAFE] max-w-2xl mx-auto mb-8">
          Subscribe to our newsletter to receive updates about our website
          launches, upcoming events, and the inaugural Ibadan Book and Arts
          Festival on October 24-25, 2025.
        </p>
        <form className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <input type="email" placeholder="Your email address" className="flex-grow px-4 py-3 rounded-md text-black focus:outline-none" required />
            <button type="submit" className="bg-[#D65D2B] text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-[#DBEAFE] mt-3">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </form>
      </div>
    </section>;
};