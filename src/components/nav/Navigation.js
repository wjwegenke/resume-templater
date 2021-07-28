import React from 'react';
import './Navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';

function Navigation(props) {

    const templateOptions = props.templates?.map((t, i) => {
        return (<option key={`template${i}`} value={t.value}>{t.name}</option>)
    });

    const updateTemplate = (e) => {
        console.log(e.target.value);
        props.setTemplate(e.target.value);
    }

    const updateFile = (e) => {
        let file = e.target.files[0];
        console.log(file);
        
        if (file) {
            const fileReader = new FileReader();
            fileReader.readAsText(file, "UTF-8");
            fileReader.onload = e => {
              props.setResume(JSON.parse(e.target.result));
            };
        }
    };

    return (
        <nav className="navigation">
            <h1>Resume Templator</h1>
            <div className="inputs">
                <div className="input-group">
                    <label htmlFor="templateSelector">Select Tempate</label>
                    <select id="templateSelector" onChange={updateTemplate}>
                        {templateOptions}
                    </select>
                </div>
                <div className="input-group">
                    <label htmlFor="templateFileInput">Upload Resume JSON</label>
                    <input type="file" name="templateFileInput" onChange={updateFile} />
                </div>
            </div>
            <a href="/resume-templater/resume.json" target="_blank" rel="noreferrer">Example Resume JSON</a>
            <div className="btn-icon" onClick={window.print}>
                <FontAwesomeIcon icon={faPrint} />
            </div>
        </nav>
    )
}

export default Navigation;