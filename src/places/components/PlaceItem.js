import React, {useState} from "react";
import {Link} from "react-router-dom";

import Modal from "../../shared/components/UIElements/Modal";
import './PlaceItem.css';
import Map from "../../shared/components/UIElements/Map";

const PlaceItem = props => {
    const [showMap, setShowMap] = useState(false);

    const openMapHandler = () => setShowMap(true);
    const closeMapHandler = () => setShowMap(false);

    return (
        <React.Fragment>
            <Modal
                show={showMap}
                onCancel={closeMapHandler}
                header={props.address}
                contentClass="place-item__modal-content"
                footerClass="place-item__modal-actions"
                footer={<button className="btn btn-danger" onClick={closeMapHandler}>CLOSE</button>}
            >
                <div className="map-container">
                    <Map />
                </div>
            </Modal>
            <li>
                <div className="card">
                    <img src={props.image} className="card-img-top" alt={props.title}/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{props.address}</h6>
                        <p className="card-text">{props.description}</p>
                        <div>
                            <Link to={`/places/${props.id}`}>
                                <button className="btn btn-success">EDIT</button>
                            </Link>
                            {/*<Link>*/}
                                <button className="btn btn-danger" onClick={openMapHandler}>VIEW ON MAP</button>
                            {/*</Link>*/}
                            {/*<Link>*/}
                                <button className="btn btn-primary">DELETE</button>
                            {/*</Link>*/}
                        </div>
                    </div>
                </div>
            </li>
        </React.Fragment>
    );
};

export default PlaceItem;
