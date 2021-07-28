import React from 'react';

function Education(props) {

    const studies = props.education.studies.map((s, i) => {
        return (
            <div key={`study${i}`} className="study">{s.studyType} in {s.area}</div>
        );
    });


    const startDate = new Date(props.education.startDate);
    const startDateString = String(startDate.getMonth()).padStart(2, '0') + '/' + startDate.getFullYear();
    let endDateString = 'Present';
    if (props.education.endDate) {
        const endDate = new Date(props.education.endDate);
        endDateString = String(endDate.getMonth()).padStart(2, '0') + '/' + endDate.getFullYear();
    }
    const dateString = startDateString + ' - ' + endDateString;

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