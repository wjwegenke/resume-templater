import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Section from './Section';

function Category(props) {

    const sectionsJSX = props.category.sections?.map((s, i) => <Section key={i} section={s} />);

    return (
        <category>
            <div className="cat-header">
                <div className="cat-icon icon">
                    <FontAwesomeIcon icon={[props.category.icon.style || 'fas', props.category.icon.name]} />
                </div>
                <h1>{props.category.title}</h1>
            </div>
            {sectionsJSX}
        </category>
    );
}

export default Category;