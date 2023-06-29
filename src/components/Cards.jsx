import { Link } from "react-router-dom";

const Cards = ({ cards }) => {

  return (
    <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 bg-green-100">
      {cards.map((card) => (

        <div class="grid grid-cols-1  mx-auto md:grid-cols-2 lg:grid-cols-4 md:mx-8 my-4">
          <div class="bg-green-300 rounded-lg overflow-hidden shadow-md w-80">
            <div class="relative">

              <img src={card.image} alt={card.title} class="w-full h-40 object-cover" />
              <Link to={`/product/${card.id}`}>
                <div class="absolute inset-0 bg-black bg-opacity-40 transition-opacity opacity-0 hover:opacity-100">
                  <div class="flex items-center justify-center h-full">
                    <button class="text-white font-bold text-lg">View Details</button>
                  </div>
                </div>
              </Link>
            </div>
            <div class="p-4 mb-1">
              <h3 class="text-lg font-semibold">{card.title}</h3>
              <p class="text-gray-600">{card.category}</p>
              <div class="flex justify-center mt-2">
                <span class="text-gray-600">{card.rating.rate}/5 ({card.rating.count} ratings)</span>
              </div>
            </div>
          </div>
        </div>

      ))
      }
    </div >
  );
}

export default Cards