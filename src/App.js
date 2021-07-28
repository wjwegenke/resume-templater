import React, { useState, useEffect } from 'react';
import './App.css';
import Navigation from './components/nav/Navigation';
import Template from './components/template/Template';

function App(props) {
    const [resume, setResume] = useState(null);
    const [template, setTemplate] = useState('primary');

    useEffect(() => {
        fetchResume();
    }, []);

    const fetchResume = async () => {
        const fetchedResume = await fetch('/resume-templater/resume.json');
        setResume(await fetchedResume.json());
    };

    const templates = [
        {
            value: 'primary',
            name: 'Primary'
        },
        {
            value: 'secondary',
            name: 'Secondary'
        }
    ];

    let templateJSX = <div className="error">No template selected</div>;
    switch (template) {
        case 'primary':
            templateJSX = <Template resume={resume}/>;
            break;
        case 'secondary':
            templateJSX = <div className="error">No template found</div>;
            break;
        default:
            templateJSX = <Template resume={resume}/>;
            break;
    }

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
