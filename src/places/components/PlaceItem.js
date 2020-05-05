import React, {useContext, useState} from "react";
import {Link} from "react-router-dom";

// import Modal from "../../shared/components/UIElements/Modal";
import Modal from "react-bootstrap/Modal"
import './PlaceItem.css';
import Map from "../../shared/components/UIElements/Map";
import {AuthContext} from "../../shared/context/auth-context";

const PlaceItem = props => {
    const auth = useContext(AuthContext);
    const [showMap, setShowMap] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);

    const openMapHandler = () => setShowMap(true);
    const closeMapHandler = () => setShowMap(false);
    const showDeleteWarningHandler = () => {
        setShowConfirmModal(true);
    };
    const cancelDeleteHandler = () => {
        setShowConfirmModal(false);
    }

    const confirmDeleteHandler = () => {
        setShowConfirmModal(false);
        console.log('DELETED');
    }

    return (
        <React.Fragment>
            <Modal
                show={showMap}
                onCancel={closeMapHandler}
                header={props.address}
                footer={<button className="btn btn-danger" onClick={closeMapHandler}>CLOSE</button>}
            >
                <div className="map-container">
                    <Map />
                </div>
            </Modal>
            <Modal
                show={showConfirmModal}
                onCancel={cancelDeleteHandler}
                header="Are you sure?"
            >
                <Modal.Footer>
                    <button onClick={cancelDeleteHandler}>CANCEL</button>
                    <button onClick={confirmDeleteHandler}>DELETE</button>
                </Modal.Footer>
                <p>Do you want to delete?</p>
            </Modal>
            <li>
                <div className="card">
                    <img src={props.image} className="card-img-top" alt={props.title}/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{props.address}</h6>
                        <p className="card-text">{props.description}</p>
                        <div>
                            {auth.isLoggedIn && <Link to={`/places/${props.id}`}>
                                <button className="btn btn-success">EDIT</button>
                            </Link>}

                            {/*<Link>*/}
                                <button className="btn btn-danger" onClick={openMapHandler}>VIEW ON MAP</button>
                            {/*</Link>*/}
                            {/*<Link>*/}
                            {auth.isLoggedIn && <button className="btn btn-primary" onClick={showDeleteWarningHandler}>DELETE</button>}
                            {/*</Link>*/}
                        </div>
                    </div>
                </div>
            </li>
        </React.Fragment>
    );
};

export default PlaceItem;
