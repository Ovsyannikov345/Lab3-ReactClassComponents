import React from 'react';
import Photo from './Photo';

import '../styles/Gallery.css';

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    
    render() {
        let noPhotosMessage = <></>;

        if (this.props.images.length === 0) {
            noPhotosMessage = <p>No photos</p>;
        }

        return (
            <div className='gallery'>
                {noPhotosMessage}
                {this.props.images.map(image =>
                    <Photo currentImage={image} key={image.id}/>
                )}
            </div>
        )
    }
}

export default Gallery;