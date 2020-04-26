import React from 'react';
import InfoboxContainer from '../components/InfoboxContainer/InfoboxContainer';
import InfoboxContainerCard from '../components/InfoBoxContainerCard/InfoboxContainerCard';

import InfoBoxLoader from '../components/InfoBoxLoader/InfoBoxLoader';
import SearchBar from '../components/SearchBar/SearchBar';
import getSpeakers from '../services/speakers';
import { useState, useEffect } from 'react';

const speakersSectionHeading = "Sudionik sekcija";
const footerText = "Prati sudionika";
const cardClass = "typeSpeaker";

const Speakers = () => {

    const [speakers, setSpeakers] = useState('');
    const [speakersComputed, setSpeakersComputed] = useState('');
    const [loaded, setLoaded] = useState(false);
    var filterCriteria = '';
    useEffect(() => {
        setTimeout(function () {
            setSpeakers(getSpeakers);
            setLoaded(true);
        }, 1000);

    }
    );
    useEffect(() => {
        setSpeakersComputed(speakersComputed || speakers);
    }
    );
    function handleSearchBarInputChange(inputValue) {
        filterCriteria = inputValue.target.value;
        var filtered = filterItems(speakers, filterCriteria);
        setSpeakersComputed(filtered);
    }
    const filterItems = (arr, query) => {
        return arr.filter(el => el.title.toLowerCase().includes(query.toLowerCase()));
    }

    function getSpeakersFormated() {
        return (
            <>
                <InfoboxContainer>
                    {speakersComputed.map(function (speaker, index) {
                        return (<InfoboxContainerCard headerIcon={cardClass} headerHeading={speaker.title} footerLinkText={footerText} key={index} footerLink={speaker.link}>
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
            <InfoBoxLoader type="ThreeDots"></InfoBoxLoader>
        );
    }

    return (
        <>
            <h1>{speakersSectionHeading}</h1>
            <SearchBar searchPlaceholder="Search speakers" handleChange={handleSearchBarInputChange} searchDisabled={!loaded} ></SearchBar>
            {speakersComputed ? getSpeakersFormated() : getLoader()}
        </>
    );
}

export default Speakers;