import React from 'react';

function Volunteer(props) {

    const nameJSX = props.volunteer.website ? (<a href={props.volunteer.website}>{props.volunteer.organization}</a>) : <span>{props.volunteer.organization}</span>;
    const startDate = new Date(props.volunteer.startDate);
    const startDateString = String(startDate.getMonth()).padStart(2, '0') + '/' + startDate.getFullYear();
    let endDateString = 'Present';
    if (props.volunteer.endDate) {
        const endDate = new Date(props.volunteer.endDate);
        endDateString = String(endDate.getMonth()).padStart(2, '0') + '/' + endDate.getFullYear();
    }
    const dateJSX = startDateString + ' - ' + endDateString;

    return (
       <div className="volunteer item">
           <div className="vol-header item-header">
                <div className="vol-label item-label">
                    <div className="vol-name item-name">
                        {nameJSX}
                    </div>
                    <div className="vol-position item-position">
                        {props.volunteer.position}
                    </div>
                </div>
                <div className="vol-date item-date">
                    {dateJSX}
                </div>
           </div>
           <div className="vol-body item-summary">
                {props.volunteer.summary}
           </div>
       </div>
    );
}

export default Volunteer;