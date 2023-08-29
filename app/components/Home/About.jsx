"use client";
import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
export default function About() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 15,
    },
  });
  return (
    <div>
      <div className="main-section relative">
        <div className="circle item-center mx-auto pt-10"></div>
        <div className="contain-box absolute p-5 rounded-lg top-0 w-full left-0 bg-white/20">
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
          <div className="box grid lg:grid-cols-3 md:grid-cols-2 p-5 sm:grid-cols-1 gap-10 ">
            <div className="bg-white/50 backdrop-blur-md text-white py-6 px-8 rounded-md shadow-lg">
              <h3 className="text-lg text-gray-600 font-semibold">
                Leaving from
              </h3>
              <p className="text-2xl font-semibold">Usa America</p>
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
        <div ref={sliderRef} className="keen-slider pb-10">
          <div className="keen-slider__slide number-slide1 rounded-lg">
            <img
              className="w-full rounded-lg"
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
              alt=""
            />
          </div>
          <div className="keen-slider__slide number-slide2 rounded-lg">
            <img
              className="w-full rounded-lg"
              src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
              alt=""
            />
          </div>
          <div className="keen-slider__slide number-slide3 rounded-lg">
            <img
              className="w-full rounded-lg"
              src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
              alt=""
            />
          </div>
          <div className="keen-slider__slide number-slide4 rounded-lg">
            <img
              className="w-full rounded-lg"
              src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
              alt=""
            />
          </div>
          <div className="keen-slider__slide number-slide5 rounded-lg">
            <img
              className="w-full rounded-lg"
              src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80"
              alt=""
            />
          </div>
          <div className="keen-slider__slide number-slide6 rounded-lg">
            <img
              className="w-full rounded-lg"
              src="https://images.unsplash.com/photo-1603808033192-082d6919d3e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2030&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
