import React, { useState } from 'react';
import mappings from '../script/Mappings';


export default function InputBox() {
    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState('');
  
    // Event handler for input change
    const handleChange = (event) => {
      const value = event.target.value;
      setInputValue(value);
  
      // Match input value to result from mappings
      setResult(mappings[value] || 'ARC Code not found, Might be too specific or non existent. Please try again.');
    };
  

    return (
      <div className='search-bar'>
        <input className='input-box'
          type="number"
          value={inputValue}
          onChange={handleChange}
          placeholder="ARC Code..."
          step="0.01"
          style={{ margin: '20px' }}
        />
        <p className='input-text'>ARC Code Entered: <span className='output-text'>{inputValue}</span></p>
        <p className='input-text'>Result:  <span className='output-text'>{result}</span></p>
      </div>
    );
  }
