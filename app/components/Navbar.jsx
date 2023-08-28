import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div>
        <header className='flex justify-between items-center py-5'>
            <div className="logo w-[250px]">
                <Link href='/'><h3 className='logo uppercase text-4xl font-semibold'>LOGO</h3></Link>
            </div>
            <div className="search-ber w-full">
                <input type="search" className='w-full p-2 outline-none rounded-md text-indigo-600 focus:border-2 focus:border-orange-500' placeholder='search ....' />
            </div>
            <div className="menu flex">
                <Link className='mr-10 ms-5' href="/">Home</Link>
                <Link className='mr-10 ms-5' href="/">About</Link>
                <Link className='mr-10 ms-5' href="/users">Product</Link>
                <Link className='mr-10 ms-5' href="/">Contact</Link>
            </div>
        </header>
    </div>
  )
}
