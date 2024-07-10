import { useReccContext } from '../hooks/useReccContext';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';

const ReccDetails = ({ recc }) => {
    const { dispatch } = useReccContext();
    const { user } = useAuthContext();
    const iconClassName = "edit-icon material-symbols-outlined"


    const handleClick = async () => {
        // Delete the recommendation
        if(!user){
            return
        }
        const response = await fetch('/api/reccs/' + recc._id, {
            method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    }) 
    
        const json = await response.json()

        if(response.ok){
            dispatch({ type: 'DELETE_RECC', payload: json })
        }
    }

    const handleEdit = async (e) => {
        
       console.log("Edit button clicked")

        }
    

    return (
        <div className="recc-details">
            <h4><strong>ARC Code: </strong>{recc.ARCcode}</h4>
            <p><strong>Location: </strong>{recc.location}</p>
            <p><strong>Description: </strong>{recc.description}</p>
            <p><strong>Recommendation Template: </strong>{recc.template}</p>
            <p><strong>Report Name: </strong>{recc.reportName}</p>
            <p><strong>Last Updated: </strong>{formatDistanceToNow(new Date(recc.updatedAt), {addSuffix: true})}</p>
            <span onClick={handleClick} className="material-symbols-outlined">Delete</span>
            <span onClick={handleEdit} className={ iconClassName }>Edit</span>
        </div>
    );
    }

export default ReccDetails;