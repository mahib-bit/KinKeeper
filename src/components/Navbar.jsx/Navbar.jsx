import { ChartLine, ClockFading, House } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    const lists = <>
        <Link to='/'><li><button><House></House> Home</button></li></Link>
        <Link to='/timeline'><li><button><ClockFading></ClockFading> Timeline</button></li></Link>
        <li><button><ChartLine></ChartLine> Stats</button></li>
    </>

    return (
            <div className="navbar bg-base-100 shadow-sm flex p-3 justify-between">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {
                                lists
                            }
                        </ul>
                    </div>
                    <Link to='/'><h1 className='text-3xl font-bold text-green-800'><span className='text-green-700 font-extrabold'>Kin</span>Keeper</h1></Link>
                </div>
                <div className="navbar-center hidden md:flex lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            lists
                        }
                    </ul>
                </div>
            </div>
    );
};

export default Navbar;