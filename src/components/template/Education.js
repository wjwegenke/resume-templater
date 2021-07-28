import React from 'react';
import FormatDate from './FormatDate';

function Education(props) {

    const studies = props.education.studies.map((s, i) => {
        return (
            <div key={`study${i}`} className="study">{s.studyType} in {s.area}</div>
        );
    });

    const dateString = FormatDate(props.education);

    return (
        <div className="education item">
            <div className="edu-header item-header">
                <div className="edu-label item-label">
                    <div className="edu-name item-name">
                        {props.education.institution}
                    </div>
                </div>
                <div className="edu-date item-date">
                    {dateString}
                </div>
            </div>
            <div className="edu-body item-summary">
                {studies}
                <div className="edu-gpa">
                    GPA: {props.education.score}
                </div>
            </div>
        </div>
    );
}

export default Education;