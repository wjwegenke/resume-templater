import React from 'react';
import Section from './Section';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Summary(props) {

    return (
        <Section title="Summary" icon={faUser}>
            <div className="summary item">{props.summary}</div>
        </Section>
    );
}

export default Summary;