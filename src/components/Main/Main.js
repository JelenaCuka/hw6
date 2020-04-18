import React from 'react';
import './Main.scss';


const Main = (props) => {
    return (
        <div className="Main">
            {props.children}
        </div>
    );
}

export default Main;
