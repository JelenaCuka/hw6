import React from 'react';
import InfoboxContainer from '../components/InfoboxContainer/InfoboxContainer';
import InfoboxContainerCard from '../components/InfoBoxContainerCard/InfoboxContainerCard';

const templateParticipant = {
    title: "Johan Bach",
    cardClass: "iconType_speaker",
    paragraph: "Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one. ",
    footerText: "Prati sudionika"
};
const speakersSectionHeading = "Sudionik sekcija";

function generateItems() {
    var speakers = [];
    for (let i = 0; i < 5; i++) {
        var newParticipant = JSON.parse(JSON.stringify(templateParticipant));
        newParticipant.title = templateParticipant.title + " " + (i + 1).toString();
        speakers.push(newParticipant);
    }
    return speakers;
}
const speakersArray = generateItems();

const speakersList = speakersArray.map(
    function (event, index) {
        return   (  <InfoboxContainerCard headerIcon={event.cardClass} headerHeading={event.title} footerLinkText={event.footerText} key={index}>
        <p>{event.paragraph}</p>
    </InfoboxContainerCard>);
    }
);

//<InfoboxContainerCard headerIcon="" headerHeading="" footerLinkText="">{/*children */}</InfoboxContainerCard>
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


//-	Events.js instead of events.html TODO >>DELETE COMMENT