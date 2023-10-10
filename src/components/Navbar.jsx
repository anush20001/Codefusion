import React from 'react'
import newlogo from "../assets/newlogo.png"
function Navbar() {
    return (
        <div
            className='main lg:flex md:flex flex-wrap justify-between items-center px-4 bg-[#2f3640] py-2'>
            <div className="left">
                <div className="logo font-bold text-2xl text-white text-center">
                    <img className=' w-50' src={newlogo} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Navbar