import React from 'react';
import '../styles/SearchBar.css';

class SearchBar extends React.Component {
    render() {
        return <div class="search-container">
            <input type="search" id="search-input" autocomplete="off" placeholder="Type here to search" />
            <button id="search-button">search</button>
        </div>
    }
}

export default SearchBar;