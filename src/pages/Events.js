import React from 'react';
import InfoboxContainer from '../components/InfoboxContainer/InfoboxContainer';
import InfoboxContainerCard from '../components/InfoBoxContainerCard/InfoboxContainerCard';

import ImgEventLocation from '../assets/images/location-icon.png';
import ImgEventClock from '../assets/images/time-icon.png';

const templateEvent = {
    title: "How can we benefit from React Redux",
    cardClass: "typeEvent",
    img1: ImgEventLocation,
    img1Caption: "Dvorana D09",
    img2: ImgEventClock,
    img2Caption: "24.3. u 13:45",
    paragraph: "Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one. ",
    footerText: "Prijavi se na predavanje"
};
const eventsSectionHeading = "Događanja";

function generateItems() {
    let events = [];
    for (let i = 0; i < 5; i++) {
        var newEvent = JSON.parse(JSON.stringify(templateEvent));
        newEvent.title = templateEvent.title + " " + (i + 1).toString();
        events.push(newEvent);
    }
    return events;
}
const eventsArray = generateItems();

const eventList = eventsArray.map(
    function (event, i) {
        return (<InfoboxContainerCard headerIcon={event.cardClass} headerHeading={event.title} footerLinkText={event.footerText} key={("e" + i)}>
            <p>
                <figure><img src={event.img1} alt="LocationIcon" /><figcaption>{event.img1Caption}</figcaption></figure>
                <figure><img src={event.img2} alt="StopwatchIcon" /><figcaption>{event.img2Caption}</figcaption></figure>
            </p>
            <p>{event.paragraph}</p>
        </InfoboxContainerCard>);
    }

);

const Events = () => {

    return (
        <>
            <h1>{eventsSectionHeading}</h1>
            <InfoboxContainer>
                {eventList}
            </InfoboxContainer>
        </>
    );
}

export default Events;