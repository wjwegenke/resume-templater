import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Interest(props) {

    return (
        <div className="interest item">
            {props.icon ?
                (<div className="int-icon">
                    <FontAwesomeIcon icon={props.icon} />
                </div>)
                : null
            }
            <div className="int-name item-name">
                {props.interest.name}
            </div>
        </div>
    );
}

export default Interest;