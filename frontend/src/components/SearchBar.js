import React, { useState } from 'react';
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

        try {
            // Make a GET request to fetch the recommendation by ID
            const response = await fetch(`/api/reccs/6652af1c1759bb9cc45de4fb`, {
                method: 'GET',
                headers: {'Content-Type': 'application/json'}
            });

            const json = await response.json();

            if (!response.ok) {
                setError(json.error);
            } else {
                setError(null);
                // Set the state with the fetched recommendation details
                setARCcode(json.ARCcode);
                setLocation(json.location);
                setDescription(json.description);
                setTemplate(json.template);
                console.log('Fetched data:', json);
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
        <button className='input-text' onClick={ handleSubmit }>Submit</button>
      </div>
    );
  }
