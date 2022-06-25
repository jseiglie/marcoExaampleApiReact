import React from 'react';
import PropTypes from 'prop-types';

const CharacterDetail = (props)=> {
    return (
        <div className="card">
            <img src={props.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Gender: {props.gender}</li>
                    <li className="list-group-item">Species: {props.species}</li>
                    <li className="list-group-item">Origin {props.origin}</li>
                    <li className="list-group-item">Location {props.location}</li>
                </ul>
                <a href="#" className={`btn btn-outline-${props.status == 'Alive'? 'success' : 'danger'}`}>{props.status}</a>
            </div>
        </div>
    )
}

CharacterDetail.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    gender: PropTypes.string,
    status: PropTypes.string,
    species: PropTypes.string,
    origin: PropTypes.string,
    location: PropTypes.string,
}

export default CharacterDetail;