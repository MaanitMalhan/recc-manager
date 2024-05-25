import { useState } from 'react';
import { useReccContext } from '../hooks/useReccContext';

const ReccForm = () => {
    const { dispatch } = useReccContext();
    const [ARCcode, setARCcode] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [template, setTemplate] = useState('');
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const recc = {ARCcode, location, description, template};

        const response = await fetch('/api/reccs', {
            method: 'POST',
            body: JSON.stringify(recc),
            headers: {'Content-Type': 'application/json'}
        })
        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
            setEmptyFields(json.emptyFields);
        }
        if (response.ok) {
            setError(null);
            setEmptyFields([]);
            console.log("New recommendation added!")
            setARCcode('');
            setLocation('');
            setDescription('');
            setTemplate('');
            console.log('Saved data:', recc); 
            dispatch({type: 'CREATE_RECC', payload: json});
        }
        }
    

    return (
        <form className = "create" onSubmit={handleSubmit}>
            <h3>Create a New Recommendation Template</h3>

            <label>ARC Code:</label>
            <input 
                type="number"
                required
                onChange={(e) => setARCcode(e.target.value)}
                value={ARCcode}
                className={emptyFields.includes('ARCcode') ? 'error' : ''}
            />

            <label>Location:</label>
            <input 
                type="text"
                onChange={(e) => setLocation(e.target.value)}
                value={location}
                className={emptyFields.includes('location') ? 'error' : ''}
            />

            <label>Description:</label>
            <input
                type="text"
                required
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                className={emptyFields.includes('description') ? 'error' : ''}
            />

            <label>Recommendation Template:</label>
            <input
                type="text"
                required
                onChange={(e) => setTemplate(e.target.value)}
                value={template}
                className={emptyFields.includes('template') ? 'error' : ''}
            />

            <button>Submit</button>
            {error && <div className='error'>{error}</div>}
            
        </form>

    )}

export default ReccForm;