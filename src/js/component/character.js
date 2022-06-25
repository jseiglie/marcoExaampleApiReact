import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Character = (props)=> {
    return (
        <div className="card">
            <img src={props.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.gender}</p>
                <Link to={`/character/${props.id}`} className={`btn btn-outline-${props.status == 'Alive'? 'success' : 'danger'}`} >
                    Leer mas..
                </Link>
            </div>
        </div>
    )
}

Character.propTypes = {
    id: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    gender: PropTypes.string,
    status: PropTypes.string
}

export default Character;