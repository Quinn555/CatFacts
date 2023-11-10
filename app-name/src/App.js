import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [dataCat, setDataCat] = useState([]);
  const [displayMake, setDisplayMake] = useState([]);
  const [numbers, setNumber] = useState(30);

  async function catLink() {
    const number = numbers;
    const url = `https://catfact.ninja/facts?limit=${number}`;
    const response = await fetch(url);
    const stuff = await response.json();
    setDataCat(stuff.data);
    setNumber(numbers + 30)
  }

  useEffect(() => {
    function openFacts() {
      console.log(dataCat);
      const displayMake = dataCat.map((data, index) => (
        <li key={index}>{data.fact}</li>
      ));
      setDisplayMake(displayMake);
    }
    openFacts();
  }, [dataCat]);

  return (
    <>
      <ul>{displayMake}</ul>
      <button onClick={catLink}>Show more</button>
    </>
  );
}

export default App;
