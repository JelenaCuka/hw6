import React, { useState, useEffect } from 'react';
import InfoboxContainer from '../components/InfoboxContainer/InfoboxContainer';
import InfoboxContainerCard from '../components/InfoBoxContainerCard/InfoboxContainerCard';
import InfoBoxLoader from '../components/InfoBoxLoader/InfoBoxLoader';
import SearchBar from '../components/SearchBar/SearchBar';
import { observer, inject } from 'mobx-react';
import sessionStore from '../stores/sessionStore/sessionStore';
import ImgEventLocation from '../assets/images/location-icon.png';
import ImgEventClock from '../assets/images/time-icon.png';
import { getEvents } from '../services/events';

const eventsSectionHeading = "Događanja";
const img1Caption = "Dvorana D09";
const img2Caption = "24.3. u 13:45";

const Events = (props) => {
    const [events, setEvents] = useState('');
    const [eventsComputed, setEventsComputed] = useState('');
    const [loaded, setLoaded] = useState(false);
    const session = props.sessionStore;
    var filterCriteria = '';

    useEffect(() => {
        getEvents(session.getToken()).then(response => {
            if (response !== undefined) {
                if (response.data.events) {
                    setEvents(response.data.events);
                    setLoaded(true);
                } else {
                    setLoaded(false);
                }
            }
        });
        setEventsComputed(eventsComputed || events);
    }, [loaded, eventsComputed, events, session]);

    const handleSearchBarInputChange = (inputValue) => {
        filterCriteria = inputValue.target.value;
        var filtered = filterItems(events, filterCriteria);
        setEventsComputed(filtered);
    }

    const filterItems = (arr, query) => {
        return arr.filter(el => el.title.toLowerCase().includes(query.toLowerCase()));
    }

    const getEventsFormatted = () => <InfoboxContainer>
        {eventsComputed.map((event, i) => <InfoboxContainerCard headerIcon="typeEvent" headerHeading={event.title} footerLinkText="Prijavi se na predavanje" key={("e" + i)} footerLink={event.link}>
            <div>
                <figure><img src={ImgEventLocation} alt="LocationIcon" /><figcaption>{img1Caption}</figcaption></figure>
                <figure><img src={ImgEventClock} alt="StopwatchIcon" /><figcaption>{img2Caption}</figcaption></figure>
            </div>
            <p>{event.about}</p>
        </InfoboxContainerCard>)}
    </InfoboxContainer>;

    return (
        <>
            <h1>{eventsSectionHeading}</h1>
            <SearchBar searchPlaceholder="Search events" handleChange={handleSearchBarInputChange} searchDisabled={!loaded} ></SearchBar>
            {eventsComputed ? getEventsFormatted() : <InfoBoxLoader type="Oval"></InfoBoxLoader>}
        </>
    );
}

function mapServicesToProps() {
    return {
        sessionStore
    }
}

export default inject(mapServicesToProps)(observer(Events));