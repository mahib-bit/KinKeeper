import React, { Suspense } from 'react';
import Kin from '../Kin/Kin';

const Kins = ({data}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <Suspense fallback={<span>Loading...</span>}>
                {
                    data.map((kin) => 
                    <Kin key={kin.id} kin={kin}></Kin>
                    )
                }
            </Suspense>
        </div>
    );
};

export default Kins;