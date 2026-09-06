import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { getStoredTimeline } from '../../utility/addDB';

const Stats = () => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const logs = getStoredTimeline();

        const counts = { Call: 0, Text: 0, Video: 0 };
        logs.forEach((log) => {
            if (counts[log.type] !== undefined) {
                counts[log.type] += 1;
            }
        });

        const total = counts.Call + counts.Text + counts.Video;
       
            setChartData([
                { name: 'Text', value: counts.Text, color: '#8B3DFF' },
                { name: 'Call', value: counts.Call, color: '#0080FE' },
                { name: 'Video', value: counts.Video, color: '#31B057' }
            ]);
    }, []);

    return (
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-8">
            <h1 className="text-3xl font-extrabold text-base-content mb-8">
                Friendship Analytics
            </h1>

            <div className="bg-base-100 p-6 sm:p-8 rounded-2xl shadow-xs border border-base-200">
                <h2 className="text-sm font-semibold text-emerald-900 mb-4">
                    By Interaction Type
                </h2>

                <div className="h-64 sm:h-72 w-full flex flex-col items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={chartData}
                                cx="50%"
                                cy="50%"
                                innerRadius={70}
                                outerRadius={95}
                                paddingAngle={6}
                                dataKey="value"
                                cornerRadius={4}
                            >
                                {chartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>

                    <div className="flex items-center justify-center gap-6 mt-2">
                        {chartData.map((item) => (
                            <div key={item.name} className="flex items-center gap-2">
                                <span
                                    className="w-2.5 h-2.5 rounded-full"
                                    style={{ backgroundColor: item.color }}
                                />
                                <span className="text-xs font-medium text-base-content/70">
                                    {item.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;