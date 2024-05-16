import React from 'react';
import '/Users/maanitmalhan/Documents/IAC_Center/recc-manager/src/Button.css'; 

function RecButton(){
    return(
        <div>
        <button className='rounded-button'>Find Recommendations</button>
        </div>
    );
}

function FindButton(){
    return(
        <div>
        <button className='rounded-button' style={{ margin: '10px' }}>Find ARC Code</button>
        </div>
    );
}
export default RecButton;
export { FindButton };
