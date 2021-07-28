import React from 'react';
import Education from './Education';
import Section from './Section';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';

function Educations(props) {

    const educationsJSX = props.educations.map((e, i) => {
        return (<Education key={`education${i}`} education={e}/>)
    });

    return (
        <Section title="Education" icon={faUserGraduate}>
            {educationsJSX}
        </Section>
    );
}

export default Educations;