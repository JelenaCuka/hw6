import React from 'react';
import InfoboxContainer from '../components/InfoboxContainer/InfoboxContainer';
import InfoboxContainerCard from '../components/InfoBoxContainerCard/InfoboxContainerCard';

import InfoBoxLoader  from '../components/InfoBoxLoader/InfoBoxLoader';
import getSpeakers from '../services/speakers';
import { useState, useEffect } from 'react';

const speakersSectionHeading = "Sudionik sekcija";
const footerText = "Prati sudionika";
const cardClass = "typeSpeaker";

const Speakers = () => {

    const [speakers, setSpeakers] = useState('');
    useEffect(() => {
        setTimeout(function () { setSpeakers(getSpeakers); }, 50000);
    }
    );

    function getSpeakersFormated() {
        return (
            <>
                <InfoboxContainer>
                    {speakers.map(function (speaker, index) {
                        return  (<InfoboxContainerCard headerIcon={cardClass} headerHeading={speaker.title} footerLinkText={footerText} key={index} footerLink={speaker.link}>
            <p>{speaker.about}</p>
        </InfoboxContainerCard>);
                    })
                    }
                </InfoboxContainer>
            </>
        );
    }
    function getLoader() {
        return (
            <InfoboxContainer>
            <InfoBoxLoader type="ThreeDots"></InfoBoxLoader>
            </InfoboxContainer>
        );
    }

    return (
        <>
            <h1>{speakersSectionHeading}</h1>
            {speakers ? getSpeakersFormated() : getLoader()}
        </>
    );
}

export default Speakers;