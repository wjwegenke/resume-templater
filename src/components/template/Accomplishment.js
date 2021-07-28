import React from 'react';

function Accomplishment(props) {

    const nameJSX = props.accomplishment.website ? (<a href={props.accomplishment.website}>{props.accomplishment.title}</a>) : <span>{props.accomplishment.title}</span>;

    let dateJSX = null;
    if (props.accomplishment.startDate) {
        const startDate = new Date(props.accomplishment.startDate);
        const startDateString = String(startDate.getMonth()).padStart(2, '0') + '/' + startDate.getFullYear();
        let endDateString = 'Present';
        if (props.accomplishment.endDate) {
            const endDate = new Date(props.accomplishment.endDate);
            endDateString = String(endDate.getMonth()).padStart(2, '0') + '/' + endDate.getFullYear();
        }
        dateJSX = startDateString + ' - ' + endDateString;
    } else if (props.accomplishment.date) {
        const date = new Date(props.accomplishment.date);
        const dateString = String(date.getMonth()).padStart(2, '0') + '/' + date.getFullYear();
        dateJSX = dateString;
    }

    return (
        <div className="accomplishment item">
            <div className="acc-header item-header">
                <div className="acc-label item-label">
                    <div className="acc-name item-name">
                        {nameJSX}
                    </div>
                    <div className="acc-position item-position">
                        {props.accomplishment.awarder}
                    </div>
                </div>
                <div className="acc-date item-date">
                    {dateJSX}
                </div>
            </div>
            <div className="acc-body item-summary">
                {props.accomplishment.summary}
            </div>
        </div>
    );
}

export default Accomplishment;