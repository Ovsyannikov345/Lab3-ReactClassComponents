import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';

import '../styles/App.css';
import Gallery from './Gallery';
import Footer from './Footer';

class App extends React.Component {
    constructor() {
        super();
        this.state = {images: []}
        this.updateGallery = this.updateGallery.bind(this);
    }
    
    updateGallery(updatedImages) {
        this.setState({images: updatedImages});
    }

    render() {
        return (
            <>
                <Header />
                <main>
                    <SearchBar updateGallery={this.updateGallery} />
                    <Gallery images={this.state.images} />
                </main>
                <Footer />
            </>
        )
    }
}

export default App;