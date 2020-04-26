import React,  { useState, useEffect }  from 'react';
//Components 
import HeroSection from '../components/HeroSection/HeroSection';
import MoreSection from '../components/MoreSection/MoreSection';
import LastSection from '../components/LastSection/LastSection';
import Progress from 'rsup-progress';

const Home = () => {
    const [home, setHome] = useState('');
    
    useEffect(() => {
        setTimeout(function () { setHome(getHome); }, 5000);
    }
    );
    function getLoader() {
        const progress = new Progress({
            height: 5,
            color: '#d0003e',
        });
        progress.start();
        //const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
        //progress.promise(Promise.all([home, delay(100)])) ;
        const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
        progress.promise(delay(1000),600);
        return <p bar={progress.toString()} ></p>;
        
    }
    function getHome() {
        return (
            <>
            <HeroSection />
            <MoreSection />
            <LastSection />
        </>
        );
    }
    return (
        <>
        {home ? getHome() : getLoader()}
    </>
    );
    
}

export default Home;