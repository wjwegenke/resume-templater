import React from 'react';
import Section from './Section';
import Volunteer from './Volunteer';
import { faHandsHelping } from '@fortawesome/free-solid-svg-icons';

function Volunteers(props) {

    const volunteersJSX = props.volunteers.map((e, i) => {
        return (<Volunteer key={`volunteer${i}`} volunteer={e}/>)
    });

    return (
        <Section title="Volunteer" icon={faHandsHelping}>
            {volunteersJSX}
        </Section>
    );
}

export default Volunteers;