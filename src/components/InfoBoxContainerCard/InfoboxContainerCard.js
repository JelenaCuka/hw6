import React from 'react';
import './InfoboxContainerCard.scss';
//import * as LastSectionConst from '../../assets/const/_last-section-const';
//import ImgLast from '../../assets/images/last-year.jpg';

const InfoboxContainerCard = (props) => {
    return (
        <>
            <div className="InfoboxContainerCard-Header">
                <div className={`InfoboxContainerCard-Header-Icon_${props.headerIcon}`}></div>
                <h2>{props.headerHeading}</h2>
            </div>
                <div className="InfoboxContainerCard-MiddleContent">
                {props.children}
            </div>
            <div className="InfoboxContainerCard-Footer">
                <a href="/#">{props.footerLinkText}</a>
            </div>
        </>
    );
}

export default InfoboxContainerCard;