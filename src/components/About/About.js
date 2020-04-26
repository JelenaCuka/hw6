import React from 'react';
import {AboutWrapper, AboutBtn, AboutParagraph} from './AboutStyle';
import * as MoreSectionConst from '../../assets/const-values/_more-section-const';

const About = () => {
    return (
        <AboutWrapper>
            <AboutParagraph>
            {MoreSectionConst.moreSectionParagraph}
            </AboutParagraph>
            <AboutBtn href="#" >{MoreSectionConst.moreSectionButtonText}</AboutBtn>
        </AboutWrapper>

    );

}

export default About;