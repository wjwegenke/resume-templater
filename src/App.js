import React, { useState, useEffect } from 'react';
import './App.css';
import Navigation from './components/nav/Navigation';
import Template from './components/template/Template';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Generic from './components/genericTemplate/Generic';

function App(props) {
    const [resume, setResume] = useState(null);
    const [template, setTemplate] = useState('generic');

    useEffect(() => {
        fetchResume();

        library.add(Object.values(fas));
        library.add(Object.values(far));
        library.add(Object.values(fab));
        // dom.watch();
    }, []);

    const fetchResume = async () => {
        const fetchedResume = await fetch('/resume-templater/resume.json');
        setResume(await fetchedResume.json());
    };

    const templates = [
        {
            value: 'generic',
            name: 'Generic'
        },
    ];

    let templateJSX = <div className="error">No template selected</div>;
    switch (template) {
        case 'generic':
            templateJSX = <Generic resume={resume} />;
            break;
        case 'primary':
            templateJSX = <Template resume={resume}/>;
            break;
        case 'secondary':
            templateJSX = <div className="error">No template found</div>;
            break;
        default:
            templateJSX = <div className="error">No template found</div>;
            break;
    }

    if (resume == null)
        templateJSX = <div className="error">No resume found</div>;

    return (
    <div className="App">
        <Navigation setResume={setResume} templates={templates} template={template} setTemplate={setTemplate}/>
        <div className="resume">
            {templateJSX}
        </div>
    </div>
    );
}

export default App;
