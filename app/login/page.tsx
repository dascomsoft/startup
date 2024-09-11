

import React from 'react'

function login() {
    return (
        <div className=''>
            <div className="banner-contact bg-orange-600 text-white pt-[10rem] pb-[5rem]">
                <h1 className='text-4xl font-bold text-center'>LOGIN HERE/</h1>
            </div>
            <div className='py-[8rem]'>
                <div className="container mx-auto px-4 flex justify-center items-center">
                    <form className="grid grid-cols-1  w-full max-w-md h-full  bg-white border-2 border-slate-200 p-8  shadow-lg">
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Enter your username"
                            className="w-full p-4 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                      
                     
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            className="w-full p-4 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                   
                        <input
                            type="button"
                            value="SUBMIT"
                            className="w-full font-semibold text-xl p-4 bg-orange-600 text-white rounded-lg cursor-pointer hover:bg-slate-600"
                            id="submit-btn"
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default login