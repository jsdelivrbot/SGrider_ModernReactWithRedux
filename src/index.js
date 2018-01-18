import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBmtlAmBdlxrlbQ6usnHrac9DDlA-mwEW4';

// create new component. this component should produce
// some html

const App = () => {
    return (
    <div>
        <SearchBar />    
    </div>
    );
}

// take this components html and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));