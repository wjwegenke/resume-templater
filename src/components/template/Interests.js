import React from 'react';
import Interest from './Interest';
import Section from './Section';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function Interests(props) {

    const interestsJSX = props.interests.map((e, i) => {
        return (<Interest key={`interest${i}`} interest={e}/>)
    });

    return (
        <Section title="Interests" icon={faHeart}>
            {interestsJSX}
        </Section>
    );
}

export default Interests;