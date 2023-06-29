import React, { useState, useEffect } from 'react'
import ApiComponent from '../data/ApiComponent'
import '../css/cards.css'

const Cards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await ApiComponent();
      setCards(data);
    }
    getData();
  }, []);


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 bg-green-100">
      {cards.map((card) => (

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-8 my-4">
          <div class="bg-green-300 rounded-lg overflow-hidden shadow-md w-80">
            <div class="relative">
              <img src={card.image} alt={card.title} class="w-full h-40 object-cover" />
              <div class="absolute inset-0 bg-black bg-opacity-40 transition-opacity opacity-0 hover:opacity-100">
                <div class="flex items-center justify-center h-full">
                  <button class="text-white font-bold text-lg">View Details</button>
                </div>
              </div>
            </div>
            <div class="p-4 mb-1">
              <h3 class="text-lg font-semibold">{card.title}</h3>
              <p class="text-gray-600">{card.category}</p>
              <div class="flex justify-center mb-1">
                <span class="text-gray-600">{card.rating.rate}</span>
              </div>
            </div>
          </div>

        </div>

      ))}
    </div>
  );
}

export default Cards