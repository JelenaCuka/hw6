import React from 'react';
import Card from '../Card/Card';
import './MoreSection.scss';
import * as MoreSectionConst from '../../assets/const/_more-section-const';

//Images
import ImgAbout from '../../assets/images/about.jpg';
import ImgSpeakers from '../../assets/images/speakers.jpg';
import ImgAgenda from '../../assets/images/calendar.jpg';
import ImgPartner from '../../assets/images/partner.jpg';

const MoreSection = (props) => {
    return (
        <>
            <section className="MoreSection">
                <p>{MoreSectionConst.moreSectionParagraph}</p>
                <button type="button">{MoreSectionConst.moreSectionButtonText}</button>
                <div className="MoreSection-Inner">
                    <Card image={ImgAbout} alt={MoreSectionConst.card1Text + ' slika'}>{MoreSectionConst.card1Text}</Card>
                    <Card image={ImgSpeakers} alt={MoreSectionConst.card2Text + ' slika'}>{MoreSectionConst.card2Text}</Card>
                    <Card image={ImgAgenda} alt={MoreSectionConst.card3Text + ' slika'}>{MoreSectionConst.card3Text}</Card>
                    <Card image={ImgPartner} alt={MoreSectionConst.card4Text + ' slika'}>{MoreSectionConst.card4Text}</Card>
                </div>
            </section>
        </>
    );
}

export default MoreSection;
