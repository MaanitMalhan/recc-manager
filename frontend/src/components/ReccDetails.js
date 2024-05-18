const ReccDetails = ({ recc }) => {
    return (
        <div className="recc-details">
            <h4>{recc.name}</h4>
            <p><strong>ARC Code: </strong>{recc.ARCcode}</p>
            <p><strong>Location: </strong>{recc.location}</p>
            <p>{recc.createdAt}</p>
        </div>
    );
}

export default ReccDetails;