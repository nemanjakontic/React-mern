import React from "react";
import {useParams} from 'react-router-dom';

import PlaceList from "../components/PlaceList";

const UserPlaces = props => {
    const userId = useParams().userId;
    const DUMMY_PLACES = [
        {
            id: 'p1',
            title: 'Empire State Building',
            description: 'One of the most famous buildings',
            imageURL: 'https://images.unsplash.com/photo-1588501302208-26ca3e841c18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
            address: 'Kneza Milosa 15',
            location: {
                lat: 40.7484445,
                lng: -73.9878477
            },
            creator: 'u1'
        },
        {
            id: 'p2',
            title: 'Empire State Building',
            description: 'One of the most famous buildings',
            imageURL: 'https://images.unsplash.com/photo-1588501302208-26ca3e841c18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
            address: 'Kneza Milosa 15',
            location: {
                lat: 40.7484445,
                lng: -73.9878477
            },
            creator: 'u2'
        }
    ];
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
    return (
        <div className="row">
            <div className="col-6 offset-3">
                <PlaceList items={loadedPlaces} />
            </div>
        </div>
    );
};

export default UserPlaces;
