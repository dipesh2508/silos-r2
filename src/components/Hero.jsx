import React from 'react'
import tractor from '../images/tractor.png'

const Hero = () => {
  return (
    <section className="bg-green-100 p-36">
    <div className="max-w-6xl mx-auto px-4 flex items-center">
      <div className="w-1/2">
        <h1 className="text-4xl md:text-6xl font-extrabold text-green-900 mb-4">
          Sustainable Agriculture Solutions
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          We provide innovative and eco-friendly solutions for sustainable agriculture practices.
        </p>
        <a
          href="#" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md text-lg font-medium transition duration-300">
          Learn More
        </a>
      </div>
      <div className="w-1/2">
        <img src={tractor} alt="Navbar" className="w-full rounded-lg" />
      </div>
    </div>
  </section>
  )
}

export default Hero