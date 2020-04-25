import React from 'react';
import './InfoBoxLoader.scss';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';

const InfoBoxLoader = (props) => {
    return (
        <section className="InfoBoxLoader">
            <div>Loading...</div>
            <hr></hr>
            <Loader className="InfoBoxLoader-Loader" type={props.type} color="#d0003e" height={160} width={160} />
        </section>


    );
}

export default InfoBoxLoader;
