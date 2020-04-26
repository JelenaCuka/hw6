import React, { useState } from 'react';
import './SearchBar.scss';

const SearchBar = (props) => {
    return (
        <div className="SearchBar">
            {props.searchDisabled ?
                <div className="SearchBar-Input"><input disabled type="text" name="name" placeholder={props.searchPlaceholder} onChange={props.handleChange} /></div>
                : <div className="SearchBar-Input"><input type="text" name="name" placeholder={props.searchPlaceholder} onChange={props.handleChange} /></div>}
        </div>
    );
}

export default SearchBar;