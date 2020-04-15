import React from 'react';
import './HeroSection.scss';
import * as HeroSectionConst from '../../assets/const/_hero-section-const';


const HeroSection = (props) => {
    return (
        <>
            <section className="HeroSection">
                <div className="HeroSection-Inner">
                    <h1>{HeroSectionConst.heroSectionTitle}</h1>
                    <p>{HeroSectionConst.heroSectionTitle2}</p>
                    <p>{HeroSectionConst.heroSectionParagraph}</p>
                    <button type="button">{HeroSectionConst.heroSectionButtonText}</button>
                </div>
            </section>
            {props.children/*DELETE THIS*/}
        </>
    );
}

export default HeroSection;
