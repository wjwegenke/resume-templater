import React from 'react';

function Header(props) {

    return (
        <div className="header">
            <div className="header-label">
                <div className="header-name">
                    {props.info.name}
                </div>
                <div className="header-position">
                    {props.info.label}
                </div>
            </div>
            <div className="header-image">
                <img src={props.info.image} alt="profile-pic" />
            </div>
        </div>
    );
}

export default Header;