import React from 'react'

export const ComingSoon = () => {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6 p-8 rounded-lg bg-[#EFF6FF] border-l-4 border-[#172554]">
            <h2 className="text-2xl md:text-3xl font-bold text-[#172554]">
              Noirledge Official Website
            </h2>
            <p className="text-gray-700">
              We are redesigning our official
              website. The new design will feature a minimalistic approach with
              upgraded functionality.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#172554] mr-2">✓</span>
                <span>Clean, minimalist design focused on readability</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#172554] mr-2">✓</span>
                <span>Enhanced catalog and book showcase features</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#172554] mr-2">✓</span>
                <span>Streamlined author and publication information</span>
              </li>
            </ul>
          </div>
          <div className="space-y-6 p-8 rounded-lg bg-[#030712] border-l-4 border-[#D65D2B] text-white">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Ibadan Book and Arts Festival
            </h2>
            <p className="text-gray-300">
              Ibadan Book and Arts Festival (ÌbàFest) is a vibrant celebration
              of African literature, creativity, and cultural dialogue. Rooted
              in the historic city of Ibadan, ÌbàFest brings together writers,
              artists, readers, educators, and change-makers to explore the
              power of stories and the potential of the Creative and Cultural
              Industries.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="text-[#D65D2B] mr-2">✓</span>
                <span>Annual festival and year-round programming</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D65D2B] mr-2">✓</span>
                <span>Nurturing literacy and artistic excellence</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D65D2B] mr-2">✓</span>
                <span>
                  Supporting library development and cultural leadership
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}