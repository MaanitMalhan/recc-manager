import React, { useState } from 'react';
import '/Users/maanitmalhan/Documents/IAC_Center/recc-manager/src/InputBox.css'; 
export default function InputBox() {
    const [inputValue, setInputValue] = useState('');
  
    const handleChange = (event) => {
      setInputValue(event.target.value);
    };
  

    return (
      <div>
        <input className='input-box'
          type="number"
          value={inputValue}
          onChange={handleChange}
          placeholder="ARC Code..."
          step="0.0001"
          style={{ margin: '20px' }}
        />
        <p className='input-text'>ARC Code Entered: {inputValue}</p>
      </div>
    );
  }
  