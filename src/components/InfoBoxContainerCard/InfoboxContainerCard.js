import React from 'react';
import './InfoboxContainerCard.scss';

const InfoboxContainerCard = (props) => {
    const linkFormatHelper = props.footerLink ? `${props.footerLink}#` : "/#";
    return (
        <div className="InfoboxContainerCard">
            <div className="InfoboxContainerCard-Header">
                <div className={`InfoboxContainerCard-Header-Icon_${props.headerIcon}`}></div>
                <h2>{props.headerHeading}</h2>
            </div>
            <div className="InfoboxContainerCard-MiddleContent">
                {props.children}
            </div>
            <div className="InfoboxContainerCard-Footer">
                <a href={linkFormatHelper} >{props.footerLinkText}</a>
            </div>
        </div>
    );
}

export default InfoboxContainerCard;