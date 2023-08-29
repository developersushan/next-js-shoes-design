import React from 'react'

export default function Footer() {
  return (
    <div>
        <div className="main-section relative">
        <div className="circle-footer item-center mx-auto pt-10"></div>
        <div className="contain-box absolute p-5 rounded-lg top-0 w-full left-0 bg-white/20">

          <div className="box grid lg:grid-cols-3 md:grid-cols-2 p-5 sm:grid-cols-1 gap-10 ">
            <div className="  text-white py-6 px-8 rounded-md ">
              <h3 className="text-lg text-gray-600 font-semibold">
                Customer Care
              </h3>
              <ul className="">
                <li>About</li>
                <li>Carear</li>
                <li>Invester</li>
                <li>press in media</li>
                <li>blog</li>
              </ul>
            </div>
            <div className="  text-white py-6 px-8 rounded-md ">
              <h3 className="text-lg text-gray-600 font-semibold">
                Support
              </h3>
              <ul>
                <li>Merchant support</li>
                <li>Help Center</li>
                <li>Hire in Export</li>
                <li>Shoes Community</li>
                <li></li>
              </ul>
            </div>
            <div className="  text-white py-6 px-8 rounded-md ">
              <h3 className="text-lg text-gray-600 font-semibold">
                Contact
              </h3>
              <form action="">
                <div className='w-full'>
                    <label htmlFor="">Email*</label>
                    <input className='w-full bg-white/20 p-2 rounded outline-none focus:border focus:border-pink-600' type="text" placeholder='Enter your Email' />
                </div>
                <div>
                    <label htmlFor="">Password*</label>
                    <input className='w-full bg-white/20 p-2 rounded outline-none focus:border focus:border-pink-600' type="password" placeholder='password' />
                </div>
                <input type="submit" className='submit mt-5 p-2 uppercase cursor-pointer' value="submit" />
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
