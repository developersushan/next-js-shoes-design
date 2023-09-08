"use client"
import Image from 'next/image'
import React from 'react'
import global from '../../../assets/9a8a27ff99bce89686730d3bc42b9bf4.webp'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import { useState } from 'react'
export default function CountDown() {
  const [scrollCount,setScrollCount] = useState(false)
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
              <h3 className="text-2xl   text-gray-700">
              Millions
              </h3>
               <ScrollTrigger onEnter={()=>setScrollCount(true)} onExit={()=>setScrollCount(false)}> {scrollCount && <h3 className="text-4xl font-semibold"><CountUp start={0} end={1000} duration={10} delay={2}/>+k</h3>}</ScrollTrigger>  
            </div>
            <div className="bg-white/50 backdrop-blur-md text-white py-6 px-8 rounded-md shadow-lg">
              <h3 className="text-xl text-gray-600 font-semibold">
                Destination
              </h3>
              <ScrollTrigger onEnter={()=>setScrollCount(true)} onExit={()=>setScrollCount(false)}> {scrollCount && <h3 className="text-4xl font-semibold"><CountUp start={0} end={350} duration={5} delay={2}/>+k</h3>}</ScrollTrigger>  
            </div>
            <div className="bg-white/50 backdrop-blur-md text-white py-6 px-8 rounded-md shadow-lg">
              <h3 className="text-lg text-gray-600 font-semibold">
                Followers
              </h3>
              <ScrollTrigger onEnter={()=>setScrollCount(true)} onExit={()=>setScrollCount(false)}> {scrollCount && <h3 className="text-4xl font-semibold"><CountUp start={0} end={650} duration={5} delay={2}/>+</h3>}</ScrollTrigger>  
            </div>
            <div className="bg-white/50 backdrop-blur-md text-white py-6 px-8 rounded-md shadow-lg">
              <h3 className="text-lg text-gray-600 font-semibold">
                Pessengers
              </h3>
              <ScrollTrigger onEnter={()=>setScrollCount(true)} onExit={()=>setScrollCount(false)}> {scrollCount && <h3 className="text-4xl font-semibold"><CountUp start={0} end={89} duration={15} delay={2}/>More</h3>}</ScrollTrigger>  
            </div>
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
