import React from 'react';
import User from "../User/User";
import {useParams} from "react-router-dom";

const UserPage = () => {
    const params = useParams();
    return (
        <User user={params.id} />
    );
};

export default UserPage;