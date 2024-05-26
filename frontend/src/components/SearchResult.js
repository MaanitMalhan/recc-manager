import { useReccContext } from '../hooks/useReccContext';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const ReccDetails = ({ result }) => {

    
    
    return (
        <div className="recc-details">
            <h4><strong>ARC Code: </strong>{recc.ARCcode}</h4>
            <p><strong>Location: </strong>{recc.location}</p>
            <p><strong>Description: </strong>{recc.description}</p>
            <p><strong>Recommendation Template: </strong>{recc.template}</p>
            <p><strong>Last Updated: </strong>{formatDistanceToNow(new Date(recc.updatedAt), {addSuffix: true})}</p>
            <span onClick={handleClick} className="material-symbols-outlined">Delete</span>
        </div>
    );
}

export default ReccDetails;