import React from 'react';
import Section from './Section';
import Skill from './Skill';
import { faCode, faLaptopCode, faTasks } from '@fortawesome/free-solid-svg-icons';

function Skills(props) {

    const skillsJSX = props.skill.keywords.map((k, i) => {
        return (
            <Skill key={`keyword${i}`} skill={k} />
        );
    });

    const skill = props.skill.name.toLowerCase();
    let icon = faTasks;
    if (skill === "languages")
        icon = faCode;
    if (skill === "technologies")
        icon = faLaptopCode;

    return (
        <Section title={props.skill.name} icon={icon}>
            <div className="skills item">
                {skillsJSX}
            </div>
        </Section>
    );
}

export default Skills;