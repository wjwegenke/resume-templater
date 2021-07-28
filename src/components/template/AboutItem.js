import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function AboutItem(props) {

    return (
        <div className="about-item">
            <div className="about-icon icon">
                <FontAwesomeIcon icon={props.icon}/>
            </div>
            <div className="about-name name">
                {props.link ? (<a href={props.link} target="_blank" rel="noreferrer">{props.name}</a>) : props.name}
            </div>
        </div>
    );
}

export default AboutItem;