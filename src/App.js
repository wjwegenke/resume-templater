import React, { useState, useEffect } from 'react';
import './App.css';
import Template from './components/template/Template';

function App() {
    const [resume, setResume] = useState(null);

    useEffect(() => {
        fetchResume();
    }, []);

    const fetchResume = async () => {
        const fetchedResume = await fetch('/resume.json');
        setResume(await fetchedResume.json());
    };

    return (
    <div className="App">
        <div className="resume">
            <Template resume={resume}/>
        </div>
    </div>
    );
}

export default App;
