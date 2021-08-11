import React from 'react';
import Header from './Header';
import Category from './Category';
import './Generic.css';

function Generic(props) {
    if (props.resume === null)
        return <div>No resume</div>;

    const asideJSX = props.resume.categories?.filter(c => c.importance === "minor").map((c, i) => <Category key={i} category={c} />);
    const mainJSX = props.resume.categories?.filter(c => c.importance === "major").map((c, i) => <Category key={i} category={c} />);

    const locationString = props.resume.personal.location.city + ', ' + props.resume.personal.location.stateCode + ' ' + props.resume.personal.location.postalCode
    const contactInfo = {
        "title": "Contact",
        "importance": "minor",
        "icon": {
            "style": "fas",
            "name": "address-card"
        },
        "sections": [
            {
                "type": "list",
                "list": [
                    {
                        "icon": {
                            "style": "fas",
                            "name": "map-marker-alt"
                        },
                        "name": locationString
                    },
                    {
                        "icon": {
                            "style": "fas",
                            "name": "phone-square"
                        },
                        "name": props.resume.personal.phone
                    },
                    {
                        "icon": {
                            "style": "fas",
                            "name": "at"
                        },
                        "name": props.resume.personal.email,
                        "url": `mailto:${props.resume.personal.email}`
                    },
                    ...props.resume.personal.profiles
                ]
            }
        ]
    };

    const contactJSX = <Category category={contactInfo} />

    return (
        <div className="generic">
            <header>
                <Header personal={props.resume.personal} />
            </header>
            <div className="content">
                <aside>
                    {contactJSX}
                    {asideJSX}
                </aside>
                <main>
                    {mainJSX}
                </main>
            </div>
        </div>
    );
}

export default Generic;