import React, { useState } from 'react'
import { assets } from "../assets/frontend_assets/assets";
import logo from "../assets/images/logo.png"
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [visible, setVisible] = useState(false)
    return (
        <div className='flex items-center justify-between py-6 font-medium'>
            <img src={logo} className='h-12 w-36' />
            <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
                <NavLink to='/' className='flex flex-col items-center gap-1'>
                    <p>Home</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                    <p>Collection</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/about' className='flex flex-col items-center gap-1'>
                    <p>About</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='contact/' className='flex flex-col items-center gap-1'>
                    <p>Contact</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

            </ul>

            <div className="flex items-center gap-6">
                <img src={assets.search_icon} className="cursor-pointer w-6" alt="" />
                <div className="group relative">
                    <img src={assets.profile_icon} className="w-6 cursor-pointer" alt="" />
                    <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-50">
                        <div className="flex flex-col gap-3 w-32 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                            <Link to="my-profile" className="cursor-pointer hover:text-black">
                                My profile
                            </Link>
                            <Link to="order" className="cursor-pointer hover:text-black">
                                Order
                            </Link>
                            <Link to="/login" className="cursor-pointer hover:text-black">
                                Log In
                            </Link>
                        </div>
                    </div>
                </div>
                <Link to='/cart' className='relative' >
                    <img src={assets.cart_icon} className='w-6 w-mmi-5' alt="" />
                    <p className='absolute right-[-5px] bottom-[-5px] w-5 text-center leading-5 bg-black text-white aspect-square rounded-full text-[15px]'>10</p>
                </Link>
                <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5  cursor-pointer sm:hidden ' />
            </div>

            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ease ${visible ? "w-full" : "w-0"}`}>
                <div className='flex flex-col text-gray-600'>
                    <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                        <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="dropdown icon" />
                        <p>Back</p>
                    </div>
                    <NavLink to='/' className="py-2 pl-6 border-b">HOME</NavLink>
                    <NavLink to='/collection' className="py-2 pl-6 border-b">COLLECTION</NavLink>
                    <NavLink to='/about' className="py-2 pl-6 border-b">ABOUT</NavLink>
                    <NavLink to='/contact' className="py-2 pl-6 border-b">CONTACT</NavLink>
                </div>
            </div>

        </div>
    )
}

export default Navbar