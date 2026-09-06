import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { Bell, Archive, Trash2, Phone, MessageSquare, Video } from 'lucide-react';
import { addToTimeline } from '../../utility/addDB';

const KinDetails = () => {
    const { id } = useParams();
    const singleDetail = useLoaderData();
    const detail = singleDetail?.find((kin) => kin.id == id);

    if (!detail) {
        return <div className="text-center py-20 text-xl font-semibold text-error">Kin details not found!</div>;
    }

    const { picture, name, status, tags = [], bio, days_since_contact, goal, next_due_date, preferred_contact = "email" } = detail;

    const handleQuickCheckIn = (type) => {
        addToTimeline(detail.id, type);
    };

    return (
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

                <div className="lg:col-span-4 flex flex-col gap-4">
                    <div className="bg-base-100 p-6 rounded-2xl shadow-sm border border-base-200 text-center flex flex-col items-center">
                        <img src={picture} alt={name} className="w-24 h-24 rounded-full object-cover shadow-sm mb-4" />
                        <h2 className="text-2xl font-bold text-base-content">{name}</h2>

                        <div className="flex flex-wrap justify-center items-center gap-2 my-3">
                            <span className={`badge border-none font-medium px-3 py-1 ${status === 'on_track' ? 'bg-green-600 text-white' : 'bg-red-500 text-white'}`}>
                                {status === 'on_track' ? 'On Track' : 'Overdue'}
                            </span>
                            {tags.map((tag, idx) => (
                                <span key={idx} className="badge bg-emerald-100 text-emerald-800 border-none uppercase text-xs font-semibold px-2.5 py-1">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {bio && <p className="text-sm italic text-base-content/70 mt-2">"{bio}"</p>}
                        <p className="text-xs text-base-content/50 mt-1">Preferred: {preferred_contact}</p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <button className="btn bg-base-100 hover:bg-base-200 border border-base-200 shadow-sm text-base-content justify-center gap-2 font-medium py-3 rounded-xl">
                            <Bell className="w-4 h-4" /> Snooze 2 Weeks
                        </button>
                        <button className="btn bg-base-100 hover:bg-base-200 border border-base-200 shadow-sm text-base-content justify-center gap-2 font-medium py-3 rounded-xl">
                            <Archive className="w-4 h-4" /> Archive
                        </button>
                        <button className="btn bg-base-100 hover:bg-red-50 border border-base-200 shadow-sm text-red-500 hover:text-red-600 justify-center gap-2 font-medium py-3 rounded-xl">
                            <Trash2 className="w-4 h-4" /> Delete
                        </button>
                    </div>
                </div>

                <div className="lg:col-span-8 flex flex-col gap-6">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="bg-base-100 p-6 rounded-2xl shadow-sm border border-base-200 text-center">
                            <span className="text-3xl font-bold text-green-800">{days_since_contact}</span>
                            <span className="block text-xs font-medium text-base-content/60 mt-2">Days Since Contact</span>
                        </div>
                        <div className="bg-base-100 p-6 rounded-2xl shadow-sm border border-base-200 text-center">
                            <span className="text-3xl font-bold text-green-800">{goal}</span>
                            <span className="block text-xs font-medium text-base-content/60 mt-2">Goal (Days)</span>
                        </div>
                        <div className="bg-base-100 p-6 rounded-2xl shadow-sm border border-base-200 text-center">
                            <span className="text-xl sm:text-2xl font-bold text-green-800">{next_due_date || 'N/A'}</span>
                            <span className="block text-xs font-medium text-base-content/60 mt-2">Next Due</span>
                        </div>
                    </div>

                    <div className="bg-base-100 p-6 rounded-2xl shadow-sm border border-base-200 flex items-center justify-between">
                        <div>
                            <h3 className="text-lg font-bold text-green-900">Relationship Goal</h3>
                            <p className="text-sm text-base-content/80 mt-2">Connect every <span className="font-bold text-base-content">{goal} days</span></p>
                        </div>
                        <button className="btn btn-sm bg-base-200 hover:bg-base-300 border-none font-medium px-4 rounded-lg">Edit</button>
                    </div>

                    <div className="bg-base-100 p-6 rounded-2xl shadow-sm border border-base-200">
                        <h3 className="text-lg font-bold text-green-900 mb-4">Quick Check-In</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <button
                                onClick={() => handleQuickCheckIn('Call')}
                                className="btn bg-base-200/60 hover:bg-base-200 border-none h-24 flex flex-col gap-2 rounded-xl text-base-content font-medium"
                            >
                                <Phone className="w-5 h-5" /> Call
                            </button>
                            <button
                                onClick={() => handleQuickCheckIn('Text')}
                                className="btn bg-base-200/60 hover:bg-base-200 border-none h-24 flex flex-col gap-2 rounded-xl text-base-content font-medium"
                            >
                                <MessageSquare className="w-5 h-5" /> Text
                            </button>
                            <button
                                onClick={() => handleQuickCheckIn('Video')}
                                className="btn bg-base-200/60 hover:bg-base-200 border-none h-24 flex flex-col gap-2 rounded-xl text-base-content font-medium"
                            >
                                <Video className="w-5 h-5" /> Video
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default KinDetails;