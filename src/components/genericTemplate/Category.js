import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Section from './Section';

function Category(props) {

    const sectionsJSX = props.category.sections?.map((s, i) => <Section key={i} section={s} />);

    return (
        <div className="category">
            <div className="cat-header">
                <div className="cat-icon icon">
                    <FontAwesomeIcon icon={[props.category.icon.style || 'fas', props.category.icon.name]} />
                </div>
                <h1>{props.category.title}</h1>
            </div>
            <div className={"sections" + (props.category.flow === "row" ? " row" : "")}>
                {sectionsJSX}
            </div>
        </div>
    );
}

export default Category;