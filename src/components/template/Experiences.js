import React from 'react';
import Section from './Section';
import Experience from './Experience';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

function Experiences(props) {

    const experiencesJSX = props.experiences.map((e, i) => {
        return (<Experience key={`experience${i}`} experience={e}/>)
    });

    return (
        <Section title="Experience" icon={faBriefcase}>
            {experiencesJSX}
        </Section>
    );
}

export default Experiences;