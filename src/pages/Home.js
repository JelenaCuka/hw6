import React, { useState, useEffect } from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import MoreSection from '../components/MoreSection/MoreSection';
import LastSection from '../components/LastSection/LastSection';
import Progress from 'rsup-progress';

const Home = () => {
    const [home, setHome] = useState('');
    const progress = new Progress({
        height: 5,
        color: '#d0003e',
    });

    useEffect(() => {
        progress.start();
        setTimeout(() => {
            progress.end();
            setHome(homeComponents);
        }, 1000);
    }, []);

    const homeComponents = () => {
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
            {home}
        </>
    );

}

export default Home;