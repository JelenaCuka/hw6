import React from 'react';
import './InfoboxContainer.scss';

const InfoboxContainer = (props) => {
    return (
        <>
            <section className="InfoboxContainer">
                {props.children}
            </section>
        </>
    );
}

export default InfoboxContainer;
