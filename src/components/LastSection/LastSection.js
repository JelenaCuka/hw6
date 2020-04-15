import React from 'react';
import './LastSection.scss';
import * as LastSectionConst from '../../assets/const/_last-section-const';

import ImgLast from '../../assets/images/last-year.jpg';

const LastSection = (props) => {
    return (
        <>
        <section className="LastSection">
                <div className="LastSection-Inner">
                    <h1>{LastSectionConst.heading}</h1>
                    <p>{LastSectionConst.paragraph}</p>
                    <figure>
                        <img src={ImgLast} alt={LastSectionConst.figcaption + " image"} object-fit="fill" />
                        <figcaption>{LastSectionConst.figcaption}</figcaption>
                    </figure>
                    
                </div>
            </section>

        {props.children}
        </>
    );
}

export default LastSection;
