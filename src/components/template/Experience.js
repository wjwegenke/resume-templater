import React from 'react';
import FormatDate from './FormatDate';

function Experience(props) {

    const nameJSX = props.experience.website ? (<a href={props.experience.website} target="_blank" rel="noreferrer">{props.experience.name}</a>) : <span>{props.experience.name}</span>;
    
    const dateString = FormatDate(props.experience);

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
                    {dateString}
                </div>
           </div>
           <div className="exp-body item-summary">
                {props.experience.summary}
           </div>
       </div>
    );
}

export default Experience;