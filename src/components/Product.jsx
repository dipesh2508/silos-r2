import React, { useState, useEffect } from 'react'
import ApiComponent from '../data/ApiComponent'
import ProductDetails from './ProductDetails'
import Cards from './Cards'
import '../css/cards.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const Product = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        async function getData() {
            const data = await ApiComponent();
            setCards(data);
        }
        getData();
    }, []);


    return (
        <Router>
            <Routes>
                <Route path="/" element={<Cards key={cards.id} cards={cards} />}>
                    
                </Route>
                <Route path="/product/:productId" element={<ProductDetails key={cards.id} cards={cards} />}>

                </Route>
            </Routes>
        </Router>
    );
}

export default Product