import { Key } from 'lucide-react';
import React from 'react';

const Kin = ({ kin }) => {

    const { picture, name, tags, status, days_since_contact } = kin;

    const statusStyle = (status) => {
        if (status === 'on_track'){
            return 'bg-green-700 bg-green-800 text-white border-none';
        }
        if (status === 'overdue') 
        {
            return 'bg-red-600 bg-red-700 text-white border-none';
        }
    }

    return (
        <div className=''>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure className="px-10 pt-10">
                    <img
                        src={picture}
                        className="rounded-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{days_since_contact}d ago</p>
                    <div className="card-actions">
                        {
                            tags.map((tag, index) => (
                                <button className='btn btn-sm bg-[#4b8571] rounded-3xl' key={index}>{tag}</button>
                            ))
                        }
                    </div>
                    <button className={`btn btn-md rounded-3xl ${statusStyle(status)}`}>{status}</button>
                </div>
            </div>
        </div>
    );
};

export default Kin;