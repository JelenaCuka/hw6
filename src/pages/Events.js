import React from 'react';
import InfoboxContainer from '../components/InfoboxContainer/InfoboxContainer';
import InfoboxContainerCard from '../components/InfoBoxContainerCard/InfoboxContainerCard';
import InfoBoxLoader  from '../components/InfoBoxLoader/InfoBoxLoader';

import ImgEventLocation from '../assets/images/location-icon.png';
import ImgEventClock from '../assets/images/time-icon.png';



import getEvents from '../services/events';
import { useState, useEffect } from 'react';

const eventsSectionHeading = "Događanja";
const img1Caption = "Dvorana D09";
const img2Caption = "24.3. u 13:45";

const Events = () => {
    const [events, setEvents] = useState('');
    useEffect(() => {
        setTimeout(function () { setEvents(getEvents); }, 50000);
    }
    );

    function getEventsFormated() {
        return (
            <>
                <InfoboxContainer>
                    {events.map(function (event, i) {
                        return (<InfoboxContainerCard headerIcon="typeEvent" headerHeading={event.title} footerLinkText="Prijavi se na predavanje" key={("e" + i)} footerLink={event.link}>
                            <div>
                                <figure><img src={ImgEventLocation} alt="LocationIcon" /><figcaption>{img1Caption}</figcaption></figure>
                                <figure><img src={ImgEventClock} alt="StopwatchIcon" /><figcaption>{img2Caption}</figcaption></figure>
                            </div>
                            <p>{event.about}</p>
                        </InfoboxContainerCard>);
                    })
                    }
                </InfoboxContainer>
            </>
        );
    }
    function getLoader() {
        //ThreeDots
        //<InfoBoxLoader type="ThreeDots"></InfoBoxLoader>
        return (
            <InfoboxContainer>
            <InfoBoxLoader type="Oval"></InfoBoxLoader>
            </InfoboxContainer>
        );
    }

    return (
        <>
            <h1>{eventsSectionHeading}</h1>
            {events ? getEventsFormated() : getLoader()}
        </>
    );
}

export default Events;