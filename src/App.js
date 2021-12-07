import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import { getCountries } from '../src/services/countries';

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const grabData = async () => {
      const data = await getCountries();
      console.log(data);
      setCountries(data);
    };
    grabData();
  }, []);
  return (
    <section className="main">
      <Header />
      <Footer />
    </section>
  );
}

export default App;
