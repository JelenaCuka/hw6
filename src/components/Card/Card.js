import React from 'react';
import './Card.scss';


const Card = (props) => {
    return (
        <>
        <div href="#" className="Card">
            <figure className="Card-Figure">
            <img className="Card-Image"  src={props.image} alt={props.alt} />
            </figure>
            <p className="Card-Title">{props.children}</p>
        </div>

        </>
    );
}

export default Card;


//-	Events.js instead of events.html TODO >>DELETE COMMENT