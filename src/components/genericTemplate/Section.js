import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FormatDate from './FormatDate';

function Section(props) {

    const nameJSX = props.section.title ? (props.section.website ? (<a href={props.section.website} target="_blank" rel="noreferrer">{props.section.title}</a>) : <span>{props.section.title}</span>) : null;
    
    const dateString = FormatDate(props.section);

    const summaryJSX = props.section.summary?.map((s, i) => <div key={i} className="summary">{s}</div>);

    const listJSX = props.section.list?.map((s, i) => {
        return (
            <div key={i} className="list-item">
                {s.icon ?
                    (<div className="list-icon">
                        <FontAwesomeIcon icon={[s.icon.style || 'fas', s.icon.name]} />
                    </div>) : null
                }
                <div className="list-name">
                    {s.url ? (<a href={s.url} target="_blank" rel="noreferrer">{s.name}</a>) : s.name}
                </div>
            </div>
        );
    });

    const bunchJSX = props.section.bunch?.map((b, i) => <div key={i} className="bunch-item">{b}</div>);

    return (
        <section>
            <div className="sec-header">
                <div className="sec-label">
                    <div className="sec-title">
                        {nameJSX}
                    </div>
                    <div className="sec-subtitle">
                        {props.section.subtitle}
                    </div>
                </div>
                <div className="sec-date">
                    {dateString}
                </div>
            </div>
            <div className="sec-summary">
                {summaryJSX}
            </div>
            <div className="sec-subsummary">
                {props.section.subsummary}
            </div>
            <div className="sec-list">
                {listJSX}
            </div>
            <div className="sec-bunch">
                {bunchJSX}
            </div>
        </section>
    );
}

export default Section;