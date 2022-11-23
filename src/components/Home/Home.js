import React, { useEffect, useState } from 'react';
import Countries from '../Countries/Countries';
const Home = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[]);

    return (
        <div>
            {
                countries.map(countries => <Countries countries = {countries} ></Countries>)
            }
        </div>
    );
};

export default Home;