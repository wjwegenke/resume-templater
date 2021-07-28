import React from 'react';
import './Template.css';
import Header from './Header';
import About from './About';
import Skills from './Skills';
import Interests from './Interests';
import Summary from './Summary';
import Experiences from './Experiences';
import Educations from './Educations';
import Volunteers from './Volunteers';
import Accomplishments from './Accomplishments';

function Template(props) {
    if (props.resume == null)
        return (<div className="error">No resume found</div>);

    const info = {
        name: props.resume.basics.name,
        label: props.resume.basics.label,
        image: props.resume.basics.image
    }

    const skillsJSX = props.resume.skills.map((s, i) => {
        return (
            <Skills key={`skill${i}`} skill={s}/>
        );
    });

    return (
        <div className="template">
            <header>
                <Header info={info} />
            </header>
            <div className="body">
                <aside>
                    <About basics={props.resume.basics}/>
                    {skillsJSX}
                    <Interests interests={props.resume.interests}/>
                </aside>
                <main>
                    <Summary summary={props.resume.basics.summary}/>
                    <Experiences experiences={props.resume.work}/>
                    <Educations educations={props.resume.education}/>
                    <Volunteers volunteers={props.resume.volunteer}/>
                    <Accomplishments accomplishments={props.resume.awards}/>
                </main>
            </div>
        </div>
    );
}

export default Template;