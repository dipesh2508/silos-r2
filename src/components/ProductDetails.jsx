import React from 'react'
import { Link, useParams } from 'react-router-dom'

const ProductDetails = ({cards}) => {
    const { productId } = useParams();
    return (

        
        <div className="flex bg-green-100 rounded-lg p-4 h-108">

            <div className="flex items-center justify-center mr-5">
                <img src={cards[productId].image} alt="Product" className="w-64 h-auto rounded-lg" />
            </div>
            <div className="flex-1 ml-4">
                <h2 className="text-xl font-bold">{cards[productId].title}</h2>
                <p className="text-sm text-gray-600 mb-2">{cards[productId].category}</p>
                <div className="flex items-center mb-2">
                    <span className="text-yellow-500 mr-1">⭐</span>
                    <span className="text-sm text-gray-600">{cards[productId].rating.rate} ({cards[productId].rating.count} ratings)</span>
                </div>
                <p className="text-sm text-gray-700">{cards[productId].description}</p>
            </div>
            
            <Link to='/'>
            <button className=" top-2 right-2 text-gray-600 hover:text-gray-800">
                Close
            </button>
        </Link>
    </div >
  )
}

export default ProductDetails