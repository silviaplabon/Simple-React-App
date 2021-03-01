import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import './Player.css'
const Player = (props) => {
    const { id, name, email, gender, salary, image,team } = props.player;//destructuring necessary data
    const handleAddPlayer = props.handleAddPlayer;//destructuring handleAddPlayer
    return (
        <div className="player-section">
            <div className="half-section">
                <img src={image} alt="" className="image" />
            </div>
            <div className="half-section">
                <h1 className="player-name">{name}</h1>
                <br/>
                <p><span className="pdesign">Salary: </span>{salary}</p>
                <p><span className="pdesign">Email: </span>{email}</p>
                <p><span className="pdesign">Team:</span>{team}</p>
                <button className="main-button" onClick={() => handleAddPlayer(props.player)}><FontAwesomeIcon icon={faPlus}/> Add Player</button>
            </div>
        </div>
    );
};

export default Player;
