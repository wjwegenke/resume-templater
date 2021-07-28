import React from 'react';
import FormatDate from './FormatDate';

function Volunteer(props) {

    const nameJSX = props.volunteer.website ? (<a href={props.volunteer.website}>{props.volunteer.organization}</a>) : <span>{props.volunteer.organization}</span>;
    
    const dateString = FormatDate(props.volunteer);

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
                    {dateString}
                </div>
           </div>
           <div className="vol-body item-summary">
                {props.volunteer.summary}
           </div>
       </div>
    );
}

export default Volunteer;