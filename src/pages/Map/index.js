import React from "react";
import Node from "../../components/Node";


const Map = () => {
    return (
        <div className="map-container">
            <Node url={'http://18.203.83.17/public/explorePictures?path=root'} type={0} label={'root'}
                  headNode={true} id={'root'} level={0}/>
        </div>
    );
};

export default Map;