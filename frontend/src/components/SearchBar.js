import React, { useState } from 'react';
import { json } from 'react-router-dom';
import mappings from '../script/Mappings';


export default function InputBox() {
    
    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState('');
    const [reccId, setReccId] = useState('');
    const [error, setError] = useState(null);
    const [ARCcode, setARCcode] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [template, setTemplate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const value = inputValue;
        
        try {
            // Make a GET request to fetch the recommendation by ID
            const response = await fetch(`/api/reccs/${value}`, {
                method: 'GET',
                headers: {'Content-Type': 'application/json'}
            });

            const result = await response.json();

            if (!response.ok) {
                setError(result.error);
            } else {
                setError(null);
                // Set the state with the fetched recommendation details
                setARCcode(result.ARCcode);
                setLocation(result.location);
                setDescription(result.description);
                setTemplate(result.template);
                console.log('Fetched data:', result);
            }
        } catch (error) {
            setError('An error occurred while fetching the recommendation.');
            console.error(error);
        }
    };



    // Event handler for input change
    const handleChange = (event) => {
      const value = event.target.value;
      setInputValue(value);
      console.log('Input value:', value);
      // Match input value to result from mappings
      setResult(mappings[value] || 'ARC Code not found, Might be too specific or non existent. Please try again.');
    };
  

    return (
      <div className='search-bar'>
        <input className='input-box'
          type="string"
          value={inputValue}
          onChange={handleChange}
          placeholder="ARC Code..."
          step="0.01"
          style={{ margin: '20px' }}
        />
        <p className='input-text'>ARC Code Entered: <span className='output-text'>{inputValue}</span></p>
        <p className='input-text'>Result:  <span className='output-text'>{result}</span></p>
        <button className='input-text' onClick={ handleSubmit }>Submit</button>
      </div>
    );
  }

