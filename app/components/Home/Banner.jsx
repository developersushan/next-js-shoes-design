import React from 'react'
import Image1 from '../../../assets/city1.png'
import Slider from '../../../assets/slider.png'
import Image from 'next/image'
import Link from 'next/link'
export default function Banner() {
    return (
        <div>
            <div className="banner flex items-center">
                <div className=" left" >
                   <h4 className='text-6xl font-semibold mb-3'>Marketing <span className='italic text-orange-600'>Shoes !</span></h4>
                   <p className='mb-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit eaque excepturi laborum consectetur optio quisquam?</p>
                   <Link href='/'><button className='text-2xl mt-10 italic py-2 px-5 btn'>Shoes !</button></Link>
                </div>
                <div className=" right" >
                    <Image src={Slider} width={700} height={900} alt=''></Image>
                </div>
            </div>
        </div>
    )
}
