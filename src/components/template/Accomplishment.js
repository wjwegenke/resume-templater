import React from 'react';
import FormatDate from './FormatDate';

function Accomplishment(props) {

    const nameJSX = props.accomplishment.website ? (<a href={props.accomplishment.website}>{props.accomplishment.title}</a>) : <span>{props.accomplishment.title}</span>;

    const dateString = FormatDate(props.accomplishment);

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
                    {dateString}
                </div>
            </div>
            <div className="acc-body item-summary">
                {props.accomplishment.summary}
            </div>
        </div>
    );
}

export default Accomplishment;