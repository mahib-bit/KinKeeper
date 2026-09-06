import React from 'react';
import Banner from '../../components/Banner/Banner';
import Kins from '../Kins/Kins';
import { useLoaderData } from 'react-router';

const Home = () => {

const data = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <h1 className='text-4xl font-bold my-6 ml-4'>Your Friends</h1>
            <Kins data={data}></Kins>
        </div>
    );
};

export default Home;