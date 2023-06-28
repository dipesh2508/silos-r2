import React, { useState } from 'react'
import ApiComponent from '../data/ApiComponent'

const Cards = () => {
    const data = ApiComponent()
    console.log(data)

    if (!data) {
        return <div>Loading...</div>;
    }
    return (
        <div className="bg-green-100 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-4">
            {data.map((item, index) => (
                <div key={index} className="border p-4 rounded-lg bg-green-200">
                    <img src={item.image} alt={item.title} className="w-full h-48 object-cover mb-4 rounded-lg" />
                    <h2 className="text-xl font-bold mb-2 text-green-800">{item.title}</h2>
                    <p className="text-gray-700 mb-2">{item.category}</p>
                    <div className="flex items-center mb-2">
                        <span className="text-yellow-500 mr-1">Rating:</span>
                        <span className="text-yellow-500">{item.rating.rate}</span>
                    </div>
                    <p className="text-gray-700 mb-2">{item.rating.count} ratings</p>
                    <p className="text-gray-800">{item.description}</p>
                </div>
            ))}
        </div>
    )
}

export default Cards