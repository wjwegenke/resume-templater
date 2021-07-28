import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Interest(props) {

    return (
        <div className="interest item">
            <div className="int-icon">
                <FontAwesomeIcon icon={props.icon} />
            </div>
            <div className="int-name item-name">
                {props.interest.name}
            </div>
        </div>
    );
}

export default Interest;