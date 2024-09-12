import React, { useState } from 'react';

export const SearchFilter = () => {
  const [fruit, setFruit] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const listOfFruits = ['Apple','apricot', 'amazon tree-grape', 'Avocado','AMLA', 'Banana', 'Beetroot', 'Oranges', 'Pineapple', 'Papaya', 'Kiwi', 'Kakadu Plum'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (event) => {
    setFruit(event.target.value);
    setIsOpen(true); 
  };

  const filteredFruits = listOfFruits
    .filter((curElem) =>
      curElem.toLowerCase().startsWith(fruit.toLowerCase())
    );

  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen px-4">
      <button
        onClick={toggleDropdown}
        className='px-4 py-2 border border-black rounded'
      >
        {isOpen ? 'Hide' : 'Show'}
      </button>

      {isOpen && (
        <ul className="absolute z-10 bg-white border border-gray-300 rounded my-5 py-1 w-ful max-w-xl mx-auto">
          {filteredFruits.map((curElem, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setFruit(curElem);
                setIsOpen(false); 
              }}
            >
              {curElem}
            </li>
          ))}
        </ul>
      )}

      <img
        src="https://www.health.com/thmb/zDNG9Mpy-ck_p0Dc4Qw9WUEPGDI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Fruits-Cherries-7f33b8cbd4184848937005f123021be5.jpg"
        alt="fruitsImages"
        className="absolute inset-0 object-cover w-full h-full opacity-80"
      />

      <div className="relative bg-light-beige border border-gray-300 shadow-lg rounded-lg p-8 w-custom-lg h-custom-lg">
        <h1 className="text-black font-garamond mt-10 py-4 text-4xl font-bold text-center">
          Search your favorite fruits
        </h1>
        <input
          type="text"
          className="border-2 border-black p-4 rounded w-80 mx-auto block"
          placeholder="Browse your favorite fruits..."
          value={fruit}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};
