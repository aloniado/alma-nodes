import React from "react";
import Gallery from '../../components/Gallery/index'

const Picture = () => {
    console.log('gallery pg')

    return (
        <div className="gallery-container">
            <h1>gallery page</h1>
            <Gallery />
        </div>
    );
};

export default Picture;