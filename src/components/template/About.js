import React from 'react';
import AboutItem from './AboutItem';
import Section from './Section';
import { faMapMarkerAlt, faAt, faUser, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function About(props) {

    const location = props.basics.location.city + ', ' + props.basics.location.stateCode + ' ' + props.basics.location.postalCode;

    const profiles = props.basics.profiles.map((p, i) => {
        let icon = faUser;
        const network = p.network.toLowerCase()
        if (network === 'linkedin')
            icon = faLinkedin;
        else if (network === 'github')
            icon = faGithub;
        return (<AboutItem key={`aboutItem${i}`} icon={icon} name={p.username} link={p.url} />);
    });

    return (
        <Section title="About" icon={faAddressCard}>
            <div className="about item">
                <AboutItem icon={faMapMarkerAlt} name={location} />
                <AboutItem icon={faAt} name={props.basics.email} link={`mailto:${props.basics.email}`} />
                {profiles}
            </div>
        </Section>
    );
}

export default About;