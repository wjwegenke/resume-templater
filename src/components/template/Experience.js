import React from 'react';

function Experience(props) {

    const nameJSX = props.experience.website ? (<a href={props.experience.website} target="_blank" rel="noreferrer">{props.experience.name}</a>) : <span>{props.experience.name}</span>;
    const startDate = new Date(props.experience.startDate);
    const startDateString = String(startDate.getMonth()).padStart(2, '0') + '/' + startDate.getFullYear();
    let endDateString = 'Present';
    if (props.experience.endDate) {
        const endDate = new Date(props.experience.endDate);
        endDateString = String(endDate.getMonth()).padStart(2, '0') + '/' + endDate.getFullYear();
    }
    const dateJSX = startDateString + ' - ' + endDateString;

    return (
       <div className="experience item">
           <div className="exp-header item-header">
                <div className="exp-label item-label">
                    <div className="exp-name item-name">
                        {nameJSX}
                    </div>
                    <div className="exp-position item-position">
                        {props.experience.position}
                    </div>
                </div>
                <div className="exp-date item-date">
                    {dateJSX}
                </div>
           </div>
           <div className="exp-body item-summary">
                {props.experience.summary}
           </div>
       </div>
    );
}

export default Experience;