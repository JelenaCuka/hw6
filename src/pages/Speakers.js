import React from 'react';
import InfoboxContainer from '../components/InfoboxContainer/InfoboxContainer';
import InfoboxContainerCard from '../components/InfoBoxContainerCard/InfoboxContainerCard';

import speakersMockDataTable from '../lib/speakers';

const speakersSectionHeading = "Sudionik sekcija";
const footerText = "Prati sudionika";
const cardClass = "typeSpeaker";


const speakersList = speakersMockDataTable.map(
    function (speaker, index) {
        return (<InfoboxContainerCard headerIcon={cardClass} headerHeading={speaker.title} footerLinkText={footerText} key={index} footerLink={speaker.link}>
            <p>{speaker.about}</p>
        </InfoboxContainerCard>);
    }
);

const Speakers = () => {

    return (
        <>
            <h1>{speakersSectionHeading}</h1>
            <InfoboxContainer>
                {speakersList}
            </InfoboxContainer>
        </>
    );
}

export default Speakers;