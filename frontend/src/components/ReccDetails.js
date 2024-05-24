import { useReccContext } from '../hooks/useReccContext';

const ReccDetails = ({ recc }) => {

    const { dispatch } = useReccContext()

    const handleClick = async () => {
        const response = await fetch('/api/reccs/' + recc._id, {method: "DELETE"}) // Delete the recommendation
    
        const json = await response.json()

        if(response.ok){
            dispatch({ type: 'DELETE_RECC', payload: json })
        }
    }


    return (
        <div className="recc-details">
            <h4><strong>ARC Code: </strong>{recc.ARCcode}</h4>
            <p><strong>Location: </strong>{recc.location}</p>
            <p><strong>Description: </strong>{recc.description}</p>
            <p><strong>Recommendation Template: </strong>{recc.template}</p>
            <p><strong>Last Updated: </strong>{recc.updatedAt}</p>
            <span onClick={handleClick}>Delete</span>
        </div>
    );
}

export default ReccDetails;