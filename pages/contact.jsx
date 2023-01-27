import React from 'react'

const contact = () => {
  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="absolute inset-0 bg-gray-300">
          <iframe width="100%" height="100%"  title="map"  loading="lazy"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1244.0562027102171!2d76.74887051042674!3d14.71296720880576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb74bf5487c5637%3A0x616955d1f1e8d3f4!2sSri%20sadhana!5e0!3m2!1sen!2sin!4v1674820623853!5m2!1sen!2sin" className='opacity-80 '></iframe>
        </div>
        <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
            <p className="leading-relaxed mb-5 text-gray-600">Your satisfaction is our top priority, we would appreciate if you could take a moment to share your thoughts on our products and service.</p>
            <div className="relative mb-4">
              <label html-for="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div className="relative mb-4">
              <label html-for="phone" className="leading-7 text-sm text-gray-600">Phone</label>
              <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div className="relative mb-4">
              <label html-for="message" className="leading-7 text-sm text-gray-600">Message</label>
              <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <div className='flex '>

            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mx-5">Call Request </button>
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit Feedback</button>
            </div>
            <p className="text-xs text-gray-500 mt-3">Recive call from our end and submit your Feedback</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default contact