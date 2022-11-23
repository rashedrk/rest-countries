import React from 'react';
import './Countries.css'
const countries = (props) => {
    const {name, flags, area, capital} = props.countries;
    console.log(props.countries);
    const flagStyle = { width : '150px'};
    return (
        <div className='country'>
            <img style={flagStyle} src={flags.svg} alt={name.common} />
            <h1> {name.common} </h1>
            <h4>Area: {area} </h4>
            <p>Capital: {capital} </p>
        </div>
    );
};

export default countries;