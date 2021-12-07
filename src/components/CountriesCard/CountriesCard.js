import React from 'react';
import './CountriesCard.css';

export default function CountriesCard({ name, iso2 }) {
  return (
    <div className="countries-card">
      <div className="detail">
        <div className="name">{name}</div>
      </div>
      <div className="image">
        <img src={iso2} />
      </div>
    </div>
  );
}
