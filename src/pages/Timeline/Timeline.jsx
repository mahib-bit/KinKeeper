import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router';
import { Phone, MessageSquare, Video } from 'lucide-react';
import { getStoredTimeline } from '../../utility/addDB';

const Timeline = () => {
    const kins = useLoaderData() || [];
    const [timelineLogs, setTimelineLogs] = useState([]);
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        // Read directly from LocalStorage on mount
        const storedLogs = getStoredTimeline();
        setTimelineLogs(storedLogs);
    }, []);

    const getKinName = (kinId) => {
        const found = kins.find((k) => k.id === kinId);
        return found ? found.name : 'Friend';
    };

    const getIcon = (type) => {
        switch (type) {
            case 'Call':
                return <Phone className="w-5 h-5 text-emerald-800" />;
            case 'Text':
                return <MessageSquare className="w-5 h-5 text-emerald-800" />;
            case 'Video':
                return <Video className="w-5 h-5 text-emerald-800" />;
            default:
                return <MessageSquare className="w-5 h-5 text-emerald-800" />;
        }
    };

    const formatDate = (isoString) => {
        const date = new Date(isoString);
        return date.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        });
    };

    const filteredLogs = filter === 'All' 
        ? timelineLogs 
        : timelineLogs.filter(log => log.type.toLowerCase() === filter.toLowerCase());

    return (
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-8">
            <h1 className="text-3xl font-extrabold text-base-content mb-6">Timeline</h1>

            <div className="mb-6">
                <select 
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="select select-bordered w-full max-w-xs bg-base-100 text-sm"
                >
                    <option value="All">Filter timeline</option>
                    <option value="Call">Call</option>
                    <option value="Text">Text</option>
                    <option value="Video">Video</option>
                </select>
            </div>

            {filteredLogs.length === 0 ? (
                <div className="text-center py-12 bg-base-100 rounded-2xl border border-base-200 text-base-content/60">
                    <p className="text-lg font-medium">No check-ins recorded yet.</p>
                    <p className="text-sm mt-1">Visit a friend's details page and click Call, Text, or Video to generate timeline events.</p>
                </div>
            ) : (
                <div className="flex flex-col gap-3">
                    {filteredLogs.map((log) => (
                        <div 
                            key={log.id} 
                            className="bg-base-100 p-4 rounded-xl shadow-xs border border-base-200 flex items-center gap-4 transition-hover hover:border-base-300"
                        >
                            <div className="p-2.5 rounded-lg bg-base-200/50 flex items-center justify-center">
                                {getIcon(log.type)}
                            </div>
                            <div>
                                <p className="text-sm sm:text-base font-semibold text-base-content">
                                    <span className="font-bold text-green-900">{log.type}</span> with {getKinName(log.kinId)}
                                </p>
                                <p className="text-xs text-base-content/60 mt-0.5">
                                    {formatDate(log.date)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Timeline;