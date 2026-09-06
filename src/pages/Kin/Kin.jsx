import React from 'react';

const Kin = ({ kin }) => {
    const { picture, name, tags , status, days_since_contact } = kin;

    const statusStyle = (status) => {
        if (status === 'on_track') return 'bg-green-700 hover:bg-green-800 text-white border-none';
        if (status === 'overdue') return 'bg-red-600 hover:bg-red-700 text-white border-none';
    };

    return (
        <div className="card bg-base-200 w-full max-w-xs shadow-sm p-1">
            <figure className="pt-4">
                <img
                    src={picture}
                    alt={name}
                    className="rounded-full w-20 h-20 object-cover" 
                />
            </figure>
            <div className="card-body p-4 items-center text-center space-y-1">
                <h2 className="card-title text-base font-semibold">{name}</h2>
                <p className="text-xs opacity-70">{days_since_contact}d ago</p>

                <div className="card-actions flex flex-wrap justify-center gap-1.5 py-1">
                    {tags.map((tag, index) => (
                        <button className="btn btn-xs bg-[#244D3F] text-white border-none rounded-2xl text-[11px]" key={index}>
                            {tag}
                        </button>
                    ))}
                </div>

                <button className={`btn btn-sm rounded-2xl mt-1 ${statusStyle(status)}`}>
                    {status}
                </button>
            </div>
        </div>
    );
};

export default Kin;