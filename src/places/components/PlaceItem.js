import React from "react";
import {Link} from "react-router-dom";



const PlaceItem = props => {
    return <li>
        <div class="card" >
            <img src={props.image} className="card-img-top" alt={props.title} />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{props.address}</h6>
                    <p className="card-text">{props.description}</p>
                    <div>
                        <Link to={`/places/${props.id}`}>
                            <button className="btn btn-success" >EDIT</button>
                        </Link>
                        <button class="btn btn-danger">VIEW ON MAP</button>

                        <button class="btn btn-primary">DELETE</button>
                    </div>
                </div>
        </div>
    </li>
};

export default PlaceItem;
