const ReccDetails = ({ recc }) => {
    return (
        <div className="recc-details">
            <h4><strong>ARC Code: </strong>{recc.ARCcode}</h4>
            <p><strong>Location: </strong>{recc.location}</p>
            <p><strong>Description: </strong>{recc.description}</p>
            <p><strong>Recommendation Template: </strong>{recc.template}</p>
            <p><strong>Last Updated: </strong>{recc.updatedAt}</p>
        </div>
    );
}

export default ReccDetails;