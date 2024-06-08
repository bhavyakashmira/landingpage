import React from 'react'
import Image from 'next/image'

function Navbar() {
  return (
      <header className="bg-white p-10  ">
          <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
           
              <div className="flex flex-1 items-center justify-end md:justify-around">
                  
                  <nav aria-label="Global" className="hidden md:block ">
                      <div className='flex gap-10' >
                          <Image src="/logo.png" width="100" height="100" />
                          <ul className="flex items-center gap-6 text-sm">

                              <li>
                                  <a className="text-red-400 text-xl font-bold transition hover:text-black/75" href="#"> Home </a>
                              </li>

                              <li>
                                  <a className="text-black text-xl  transition hover:text-black/75" href="#"> About Us </a>
                              </li>

                              <li>
                                  <a className="text-black text-xl transition hover:text-black/75" href="#"> Pricing</a>
                              </li>

                              <li>
                                  <a className="text-black text-xl transition hover:text-black/75" href="#"> Features </a>
                              </li>


                          </ul>
                      </div>
                      
                  </nav>
                  <div className="flex items-center gap-4">
                      <div className="sm:flex sm:gap-4">
                          <a
                              className="hidden rounded-md bg-black text-white px-5 py-2.5 text-xl font-medium  sm:block"
                              href="#"
                          >
                              Download
                          </a>
                      </div>

                      <button
                          className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                      >
                          <span className="sr-only">Toggle menu</span>
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2"
                          >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                          </svg>
                      </button>
                  </div>
              </div>
          </div>
      </header>
  )
}

export default Navbar
