import React from 'react';

const Banner = () => {
    return (
        <div className="hero bg-base-200 rounded-2xl p-6 sm:p-10 lg:p-16 my-4 mx-3 sm:mx-6 lg:mx-auto lg:max-w-6xl">
            <div className="hero-content text-center flex-col w-full p-0">
                <div className="max-w-xs sm:max-w-md md:max-w-2xl">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        Friends to keep close in your life
                    </h1>
                    <p className="py-4 sm:py-6 text-sm sm:text-base md:text-lg text-base-content/80">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the
                        relationships that matter most.
                    </p>
                    <button className="btn bg-green-700 hover:bg-green-800 text-white border-none btn-md sm:btn-lg">
                        + Add a Friend
                    </button>
                </div>

                <div className="w-full mt-10 sm:mt-12 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    <div className="bg-base-100 p-6 sm:p-8 rounded-xl shadow-sm flex flex-col items-center justify-center">
                        <span className="text-3xl sm:text-4xl font-bold text-green-700">10</span>
                        <span className="mt-2 text-xs sm:text-sm font-medium text-base-content/80">Total Friends</span>
                    </div>
                    <div className="bg-base-100 p-6 sm:p-8 rounded-xl shadow-sm flex flex-col items-center justify-center">
                        <span className="text-3xl sm:text-4xl font-bold text-green-700">3</span>
                        <span className="mt-2 text-xs sm:text-sm font-medium text-base-content/80">On Track</span>
                    </div>
                    <div className="bg-base-100 p-6 sm:p-8 rounded-xl shadow-sm flex flex-col items-center justify-center">
                        <span className="text-3xl sm:text-4xl font-bold text-green-700">6</span>
                        <span className="mt-2 text-xs sm:text-sm font-medium text-base-content/80">Need Attention</span>
                    </div>
                    <div className="bg-base-100 p-6 sm:p-8 rounded-xl shadow-sm flex flex-col items-center justify-center">
                        <span className="text-3xl sm:text-4xl font-bold text-green-700">12</span>
                        <span className="mt-2 text-xs sm:text-sm font-medium text-base-content/80">Interactions This Month</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;