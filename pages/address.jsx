import React, { useState } from 'react'

function address() {
    const [pin, setpin] = useState()
    const [avilable, setAvilable] = useState('/')

    const onchnagePin = (e) => {
        setpin((e.target.value))
    }


    const delAib = async () => {
        var pinraw = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pinCode`);
        var pinarr = (await pinraw.json());
        if (pinarr.includes(parseInt(pin))) {
            setAvilable(true)
        } else {
            setAvilable(false)
        }
    }
    return (
        <div>
            <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col m-auto w-full md:py-8 mt-8 md:mt-0">
                <div className="relative mb-4">
                    <label html-for="pincode" className="leading-7 text-sm text-gray-600">PinCode</label>
                    <input type="pincode" id="pincode" name="pincode" placeholder='Enter PinCode' value={pin} onChange={onchnagePin} pattern="[0-9]{6}" className="w-full bg-white rounded border border-gray-300 focus:border-g-500 focus:ring-2 focus:ring-g-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                {<button className="flex ml-auto text-white bg-g-500 border-0 py-2 px-4 m-auto focus:outline-none hover:bg-g-600 rounded" onClick={delAib}>Delivery Check</button>}
                <div className='m-auto'>
                    {!avilable && avilable != null && avilable != undefined && <span className='text-red-400 text-sm'>sorry! Delivery services are currently unavailable in your area.</span>}
                    {avilable != '/' && avilable && avilable != null && <span className='text-g-500 text-sm'>yes, we do offer delivery to your location for this product.</span>}
                </div>
            </div>
            {avilable != '/' && avilable && avilable != null &&

                <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col m-auto w-full md:py-8 mt-8 md:mt-0">
                    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Enter Address</h2>
                    <p className="leading-relaxed mb-5 text-gray-600">Please provide your delivery address for your plant and seed purchases.</p>
                    <div className="relative mb-4">
                        <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
                        <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-g-500 focus:ring-2 focus:ring-g-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-g-500 focus:ring-2 focus:ring-g-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label html-for="phone" className="leading-7 text-sm text-gray-600">Phone</label>
                        <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" className="w-full bg-white rounded border border-gray-300 focus:border-g-500 focus:ring-2 focus:ring-g-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label for="address" className="leading-7 text-sm text-gray-600">Address</label>
                        <textarea id="address" name="address" className="w-full bg-white rounded border border-gray-300 focus:border-g-500 focus:ring-2 focus:ring-g-200 h-24 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                    <div className="relative mb-4">
                        <label html-for="city" className="leading-7 text-sm text-gray-600">Town/city</label>
                        <input type="city" id="city" name="city" className="w-full bg-white rounded border border-gray-300 focus:border-g-500 focus:ring-2 focus:ring-g-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label html-for="state" className="leading-7 text-sm text-gray-600">State</label>
                        <input type="state" id="state" name="state" className="w-full bg-white rounded border border-gray-300 focus:border-g-500 focus:ring-2 focus:ring-g-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>

                    <button className="text-white bg-g-600 border-0 py-2 px-6 focus:outline-none hover:bg-g-700 rounded text-lg">Add Address</button>
                </div>
            }

        </div >
    )
}

export default address