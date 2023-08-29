import Image from 'next/image'
import React from 'react'
import global from '../../../assets/9a8a27ff99bce89686730d3bc42b9bf4.webp'
export default function CountDown() {
  return (
    <div>
        <div className="main-section relative">
        <div className="global item-center mx-auto pt-10"></div>
        <div className="contain-box absolute p-5 rounded-lg top-0 w-full left-0 ">
          <div className="top-box flex items-center justify-between ">
            <div className="menu">
              <ul className="flex gap-8">
                <li>Flights</li>
                <li>brand</li>
                <li>shoes</li>
              </ul>
            </div>
            <div className="on-way">
              <span>on way</span>
            </div>
          </div>
          <div className="box grid lg:grid-cols-2 md:grid-cols-1 p-5 sm:grid-cols-1 gap-10 ">
            <div className=" text-white py-6 px-8 rounded-md relative">
                <Image className='count-img absolute top-0 left-0' src={global} width={1500}  alt=""></Image>
            </div>
            <div className="  text-white py-6 px-8 rounded-md ">
              <h3 className="text-4xl text-white font-semibold">
              Discover why millions of entrepreneurs chose Shopify to build their business — from hello world to IPO.
              </h3>

              <div className="box grid lg:grid-cols-2 md:grid-cols-2 p-5 sm:grid-cols-1 gap-10 ">
            <div className="bg-white/50 backdrop-blur-md text-white py-6 px-8 rounded-md shadow-lg">
              <h3 className="text-4xl text-gray-700 font-semibold">
              Millions
              </h3>
              <p className="">of merchants worldwide</p>
            </div>
            <div className="bg-white/50 backdrop-blur-md text-white py-6 px-8 rounded-md shadow-lg">
              <h3 className="text-xl text-gray-600 font-semibold">
                Destination
              </h3>
              <p className="text-xl font-semibold">countries represented</p>
            </div>
            <div className="bg-white/50 backdrop-blur-md text-white py-6 px-8 rounded-md shadow-lg">
              <h3 className="text-lg text-gray-600 font-semibold">
                Destination
              </h3>
              <p className="text-2xl font-semibold">New York</p>
            </div>
            <div className="bg-white/50 backdrop-blur-md text-white py-6 px-8 rounded-md shadow-lg">
              <h3 className="text-lg text-gray-600 font-semibold">
                Pessengers
              </h3>
              <p className="text-2xl font-semibold">
                2 adult,3 children,1 pets
              </p>
            </div>
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
