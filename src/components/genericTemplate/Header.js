import React from 'react';

function Header(props) {


    return (
        <div className="header">
            <div className="header-label">
                <div className="header-name">
                    {props.personal.name}
                </div>
                <div className="header-title">
                    {props.personal.title}
                </div>
            </div>
            <div className="header-image">
                <img src={props.personal.image} alt="profile-pic" />
            </div>
        </div>
    );
}

export default Header;