import React, {useRef, useEffect} from "react";

import './Map.css';

const Map = props => {
    const mapRef = useRef();

    useEffect(() => {}, []);

    return <div ref={mapRef} className={`map`}>
        <h1>adresaaaaaa</h1>
    </div>
};

export default Map;
