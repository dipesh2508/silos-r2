import React from 'react'
import { Link, useParams } from 'react-router-dom'

const ProductDetails = ({cards}) => {
    const { productId } = useParams();
    return (

        
        <div className="flex flex-col md:flex-row bg-green-100 rounded-lg p-4 h-124 md:h-108">

            <div className="flex items-center justify-center mb-4 md:mb-0 md:mr-4">
                <img src={cards[productId-1].image} alt="Product" className="w-64 h-auto rounded-lg" />
            </div>
            <div className="flex-1 ml-4">
                <h2 className="text-xl font-bold">{cards[productId-1].title}</h2>
                <p className="text-sm text-gray-600 mb-2">{cards[productId-1].category}</p>
                <div className="flex justify-center mb-2">
                    <span className="text-yellow-500 mr-1">⭐</span>
                    <span className="text-sm text-gray-600">{cards[productId-1].rating.rate} ({cards[productId-1].rating.count} ratings)</span>
                </div>
                <p className="text-sm text-gray-700">{cards[productId-1].description}</p>
            </div>
            
            <Link to='/'>
            <button className="text-xl top-2 right-2 text-red-600 hover:text-gray-800">
                X
            </button>
        </Link>
    </div >
  )
}

export default ProductDetails