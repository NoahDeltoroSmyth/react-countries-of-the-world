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

  useEffect(() => {
    const grabData = async () => {
      const data = await getCountries();
      console.log(data);
      setCountries(data);
    };
    grabData();
  }, []);

  const filterCountries = () => {
    return countries.filter(
      (c) => c.name.includes(query) && (c.continent === continent || continent === 'All')
    );
  };
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
        <option value="Antartica">Antartica</option>
        <option value="Europe">Europe</option>
        <option value="Australia">Australia</option>
      </select>
      {filterCountries().map((c) => (
        <CountriesCard key={c.name} {...c} />
      ))}
      <Footer />
    </section>
  );
}

export default App;
