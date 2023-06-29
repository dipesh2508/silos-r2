import React from 'react'
import tractor from '../images/tractor.png'

const Hero = () => {
  return (
    <section className="bg-green-100 h-max p-16 md:p-36">
      <div className="md:max-w-6xl mx-auto px-4 md:flex items-center">
        <div className="md:w-1/2">
          <h1 className="text-xl md:text-6xl font-extrabold text-green-900 md:mb-4">
            Sustainable Agriculture Solutions
          </h1>
          <p className="text-sm md:text-lg text-gray-700 mb-8">
            We provide innovative and eco-friendly solutions for sustainable agriculture practices.
          </p>
          <a href="/" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md text-lg font-medium transition duration-300">
            Learn More
          </a>
        </div>
        <div className="md:w-1/2 ">
          <img src={tractor} alt="Navbar" className="w-full mt-12 md:mt-0 rounded-lg" />
        </div>
      </div>
    </section>
  )
}

export default Hero