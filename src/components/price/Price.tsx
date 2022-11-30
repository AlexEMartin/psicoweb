import React, { useState } from "react";
import "./Price.scss";

const Price = () => {
  const [selectedOption, setSelectedOption] = useState<String>();

  // This function is triggered when the select changes
  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
  };


  return (
    <div className='price-container' data-aos='fade-left'>
      <h1 className='home-title'>Costo por consulta</h1>
      <div>
        <select onChange={selectChange} className='select'>
          <option>
            Choose one
          </option>
          <option value="2500 AR$ 🇦🇷">Pesos Argentinos</option>
          <option value="40 U$D 🇺🇸">Dólares</option>
          <option value="40 EUR 🇪🇺">Euros</option>
        </select>
        {selectedOption && <h2>{selectedOption}</h2>}
      </div>
    </div>
  );
};

export default Price;
