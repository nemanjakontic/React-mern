import React from "react";

import UsersList from "../components/UsersList";


const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Max Schwarz',
            image: 'https://images.unsplash.com/photo-1588263270948-311ce48d19eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
            places: 3
        }
    ];
    return <UsersList items={USERS}/>;
};

export default Users;
