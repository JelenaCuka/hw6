import React from 'react';
import InfoboxContainer from '../components/InfoboxContainer/InfoboxContainer';
import InfoboxContainerCard from '../components/InfoBoxContainerCard/InfoboxContainerCard';
import InfoBoxLoader from '../components/InfoBoxLoader/InfoBoxLoader';
import SearchBar from '../components/SearchBar/SearchBar';

import ImgEventLocation from '../assets/images/location-icon.png';
import ImgEventClock from '../assets/images/time-icon.png';

import getEvents from '../services/events';
import { useState, useEffect } from 'react';

const eventsSectionHeading = "Događanja";
const img1Caption = "Dvorana D09";
const img2Caption = "24.3. u 13:45";

const Events = () => {
    const [events, setEvents] = useState('');
    const [eventsComputed, setEventsComputed] = useState('');
    const [loaded, setLoaded] = useState(false);
    var filterCriteria = '';
    useEffect(() => {
        setTimeout(function () {
            setEvents(getEvents);
            setLoaded(true);
        }, 1000);
    }
    );
    useEffect(() => {
        setEventsComputed(eventsComputed || events);
    }
    );
    function handleSearchBarInputChange(inputValue) {
        filterCriteria = inputValue.target.value;
        var filtered = filterItems(events, filterCriteria);
        setEventsComputed(filtered);
    }
    const filterItems = (arr, query) => {
        return arr.filter(el => el.title.toLowerCase().includes(query.toLowerCase()));
    }

    function getEventsFormated() {
        return (
            <>
                <InfoboxContainer>
                    {eventsComputed.map(function (event, i) {
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
        return (
            <>
                <InfoBoxLoader type="Oval"></InfoBoxLoader>
            </>
        );
    }

    return (
        <>
            <h1>{eventsSectionHeading}</h1>
            <SearchBar searchPlaceholder="Search events" handleChange={handleSearchBarInputChange} searchDisabled={!loaded} ></SearchBar>
            {eventsComputed ? getEventsFormated() : getLoader()}
        </>
    );
}

export default Events;