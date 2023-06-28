import { useState, useEffect } from 'react'

const ApiComponent = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    };

    return data
}

export default ApiComponent