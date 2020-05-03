import React from "react";

import Card from "../../shared/components/UIElements/Card";
import PlaceItem from "./PlaceItem";

const PlaceList = props => {
    if (props.items.length === 0) {
        return (
            <div>
                <Card>
                    <h2>No places found. Mayde create one?</h2>
                    <button>Share place</button>
                </Card>
            </div>
        );
    }

    return <ul>
            {props.items.map(place =>
                <PlaceItem
                    key={place.id}
                    id={place.id}
                    image={place.imageURL}
                    title={place.title}
                    description={place.description}
                    address={place.address}
                    creatorId={place.creator}
                    coordinates={place.location}
                />
            )}
        </ul>

};

export default PlaceList;
