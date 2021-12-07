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
  useEffect(() => {
    const grabData = async () => {
      const data = await getCountries();
      console.log(data);
      setCountries(data);
    };
    grabData();
  }, []);

  const filterCountries = () => {
    return countries.filter((c) => c.name.includes(query));
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
      {filterCountries().map((c) => (
        <CountriesCard key={c.name} {...c} />
      ))}
      <Footer />
    </section>
  );
}

export default App;
