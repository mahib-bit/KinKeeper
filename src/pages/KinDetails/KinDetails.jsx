import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const KinDetails = () => {

    const {id} =useParams();
    const singleDetail = useLoaderData();

    const detail = singleDetail.find(kin => kin.id == id)

    return (
        <div>
            <h1>details</h1>
        </div>
    );
};

export default KinDetails;