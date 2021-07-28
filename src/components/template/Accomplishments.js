import React from 'react';
import Accomplishment from './Accomplishment';
import Section from './Section';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';

function Accomplishments(props) {

    const accomplishmentsJSX = props.accomplishments.map((e, i) => {
        return (<Accomplishment key={`accomplishment${i}`} accomplishment={e}/>)
    });

    return (
        <Section title="Accomplishments" icon={faTrophy}>
            {accomplishmentsJSX}
        </Section>
    );
}

export default Accomplishments;