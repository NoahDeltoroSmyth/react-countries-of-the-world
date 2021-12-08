import React from 'react';
import './CountriesCard.css';

export default function CountriesCard({ name, iso2 }) {
  return (
    <div className="countries-card">
      <div className="name">
        <h3>{name}</h3>
      </div>
      <div className="image">
        <img src={`https://flagcdn.com/72x54/${iso2.toLowerCase()}.png`} />
      </div>
    </div>
  );
}
