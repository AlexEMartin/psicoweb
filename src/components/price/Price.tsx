import React, { useState } from "react";
import "./Price.scss";

const Price = () => {
  const [selectedOption, setSelectedOption] = useState<String>();


  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
  };


  return (
    <div className='price-container' data-aos='fade-left'>
      <h1 className='home-title'>Costo por consulta</h1>
      <div>
        <select onChange={selectChange} className='select' defaultValue='Elige moneda'>
          <option disabled>
            Elige moneda
          </option>
          <option value="2500 AR$ 🇦🇷">Pesos Argentinos</option>
          <option value="40 U$D 🇺🇸">Dólares</option>
          <option value="40 EUR 🇪🇺">Euros</option>
        </select>
        {selectedOption && <h2 className='input-price'>{selectedOption}</h2>}
      </div>
    </div>
  );
};

export default Price;
