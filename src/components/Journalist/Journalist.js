import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import './Journalist.css';

/* journalist component start */
const Journalist = props => {
    const {name, img, working_at, working_exp, age, lives_in, salary} = props.journalist;

    const addJournalist = <FontAwesomeIcon icon={faUserPlus} />
    const address = <FontAwesomeIcon icon={faAddressBook} />
    return (
        <div className='journalist'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p><small>Working at: {working_at}</small></p>
            <p><small>Working exp: {working_exp}</small></p>
            <p><small>Age: {age}</small></p>
            <h3>Salary: ${salary}</h3>
            <p>{address} {lives_in}</p>
            <button className="btn-invite" onClick={() => props.handleAddToList(props.journalist)}>{addJournalist} add to invite list</button>
        </div>
    );
};
// journalist component end

export default Journalist;