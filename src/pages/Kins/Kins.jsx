import React, { Suspense } from 'react';
import Kin from '../Kin/Kin';
import { Link } from 'react-router';

const Kins = ({ data }) => {
    return (
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 justify-items-center">
                    <Suspense fallback={<div className="col-span-full text-center py-10 font-medium">Loading...</div>}>
                        {data.map((kin) => (
                            <Kin key={kin.id} kin={kin} />
                        ))}
                    </Suspense>
                </div>
        </div>
    );
};

export default Kins;