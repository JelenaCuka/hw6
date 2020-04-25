import React from 'react';
import InfoboxContainer from '../components/InfoboxContainer/InfoboxContainer';
import InfoboxContainerCard from '../components/InfoBoxContainerCard/InfoboxContainerCard';

import ImgEventLocation from '../assets/images/location-icon.png';
import ImgEventClock from '../assets/images/time-icon.png';

import { eventsMockDataTable } from '../lib/events';

const eventsSectionHeading = "Događanja";
const img1Caption = "Dvorana D09";
const img2Caption = "24.3. u 13:45";

const eventList = eventsMockDataTable.map(
    function (event, i) {
        return (<InfoboxContainerCard headerIcon="typeEvent" headerHeading={event.title} footerLinkText="Prijavi se na predavanje" key={("e" + i)} footerLink={event.link} >
            <div>
                <figure><img src={ImgEventLocation} alt="LocationIcon" /><figcaption>{img1Caption}</figcaption></figure>
                <figure><img src={ImgEventClock} alt="StopwatchIcon" /><figcaption>{img2Caption}</figcaption></figure>
            </div>
            <p>{event.about}</p>
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