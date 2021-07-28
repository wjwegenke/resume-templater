import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Section(props) {

    return (
        <section className="section">
            <div className="sec-header">
                <div className="sec-icon icon">
                    <FontAwesomeIcon icon={props.icon} />
                </div>
                <h1>{props.title}</h1>
            </div>
            {props.children}
        </section>
    );
}

export default Section;