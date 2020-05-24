import React, { useState, useEffect } from 'react';
import InfoboxContainer from '../components/InfoboxContainer/InfoboxContainer';
import InfoboxContainerCard from '../components/InfoBoxContainerCard/InfoboxContainerCard';
import { observer, inject } from 'mobx-react';
import InfoBoxLoader from '../components/InfoBoxLoader/InfoBoxLoader';
import SearchBar from '../components/SearchBar/SearchBar';
import { getSpeakers } from '../services/speakers';
import sessionStore from '../stores/sessionStore/sessionStore';
const speakersSectionHeading = "Sudionik sekcija";
const footerText = "Prati sudionika";
const cardClass = "typeSpeaker";

const Speakers = (props) => {
    const [speakers, setSpeakers] = useState('');
    const [speakersComputed, setSpeakersComputed] = useState('');
    const [loaded, setLoaded] = useState(false);
    var filterCriteria = '';
    const session = props.sessionStore;

    useEffect(() => {
        getSpeakers(session.getToken()).then(response => {
            if (response !== undefined) {
                if (response.data.speakers) {
                    setSpeakers(response.data.speakers);
                    setLoaded(true);
                } else {
                    setLoaded(false);
                }
            }
        });
        setSpeakersComputed(speakersComputed || speakers);
    }, [loaded, speakersComputed, speakers, session]);

    const handleSearchBarInputChange = (inputValue) => {
        filterCriteria = inputValue.target.value;
        var filtered = filterItems(speakers, filterCriteria);
        setSpeakersComputed(filtered);
    }

    const filterItems = (arr, query) => {
        return arr.filter(el => el.title.toLowerCase().includes(query.toLowerCase()));
    }

    const getSpeakersFormated = () => {
        return (
            <InfoboxContainer>
                {speakersComputed.map((speaker, index) => {
                    return (<InfoboxContainerCard headerIcon={cardClass} headerHeading={speaker.title} footerLinkText={footerText} key={index} footerLink={speaker.link}>
                        <p>{speaker.about}</p>
                    </InfoboxContainerCard>);
                })
                }
            </InfoboxContainer>
        );
    }

    return (
        <>
            <h1>{speakersSectionHeading}</h1>
            <SearchBar searchPlaceholder="Search speakers" handleChange={handleSearchBarInputChange} searchDisabled={!loaded} ></SearchBar>
            {speakersComputed ? getSpeakersFormated() : <InfoBoxLoader type="ThreeDots"></InfoBoxLoader>}
        </>
    );
}

function mapServicesToProps() {
    return {
        sessionStore
    }
}

export default inject(mapServicesToProps)(observer(Speakers));