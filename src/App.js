import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import { getCountries } from '../src/services/countries';
import CountriesCard from './components/CountriesCard/CountriesCard';

function App() {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState('');
  const [continent, setContinent] = useState('All');
  const [order, setOrder] = useState('asc');

  useEffect(() => {
    const grabData = async () => {
      const data = await getCountries();
      setCountries(data);
      // console.log(data);
    };
    grabData();
  }, []);

  const filterCountries = countries
    .filter(
      (c) =>
        (c.name.toLowerCase().includes(query) || c.name.includes(query)) &&
        (c.continent === continent || continent === 'All')
    )
    .sort((a, b) => {
      if (order === 'a-z') {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      } else {
        if (a.name < b.name) return 1;
        if (a.name > b.name) return -1;
        return 0;
      }
    });

  return (
    <section>
      <Header />
      <input
        type="text"
        placeholder="Search for a country"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <select value={continent} onChange={(e) => setContinent(e.target.value)}>
        <option value="All">All</option>
        <option value="Asia">Asia</option>
        <option value="Africa">Africa</option>
        <option value="North America">North America</option>
        <option value="South America">South America</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
        <option value="Antarctica">Antarctica</option>
      </select>
      <select className="order" value={order} onChange={(e) => setOrder(e.target.value)}>
        <option value="a-z">a-z</option>
        <option value="z-a">z-a</option>
      </select>
      <section className="container">
        {filterCountries.map((c) => (
          <CountriesCard key={c.name} {...c} />
        ))}
      </section>
      <Footer />
    </section>
  );
}

export default App;
