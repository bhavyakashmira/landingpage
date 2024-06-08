import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
      <div>
          <footer className="bg-white">
              <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8">
               

                  <div
                      className="mt-16 grid grid-cols-1 gap-8   pt-16 md:grid-cols-4 lg:grid-cols-6"
                  >
                      
                      <div className="text-center sm:text-left">
                          <Image src="/logo.png" height="100" width="100"  />
                      

                          <ul className="mt-8 space-y-4 text-sm">
                              <li>
                                  <a className="text-gray-700 transition hover:text-gray-700/75" href="#">
                                      help@frybix.com
                                  </a>
                              </li>

                              <li>
                                  <a className="text-gray-700 transition hover:text-gray-700/75" href="#">+1 234 456 678 89 </a>
                              </li>

                           

                             
                          </ul>
                      </div>

                      <div className="text-center sm:text-left">
                          <p className="text-lg font-medium text-black">Links</p>

                          <ul className="mt-8 space-y-4 text-sm">
                              <li>
                                  <a className="text-gray-700 transition hover:text-gray-700/75" href="#">
                                     home
                                  </a>
                              </li>

                              <li>
                                  <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> ABout us</a>
                              </li>

                              <li>
                                  <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> bookings</a>
                              </li>

                              <li>
                                  <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Blogs</a>
                              </li>
                          </ul>
                      </div>

                      <div className="text-center sm:text-left">
                          <p className="text-lg font-medium text-gray-900">Legal</p>

                          <ul className="mt-8 space-y-4 text-sm">
                              <li>
                                  <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Term of use </a>
                              </li>

                              <li>
                                  <a className="text-gray-700 transition hover:text-gray-700/75" href="#">
                                     Privacy policy
                                  </a>
                              </li>

                              <li>
                                  <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Cookie policy </a>
                              </li>

                             
                          </ul>
                      </div>

                      <div className="text-center sm:text-left">
                          <p className="text-lg font-medium text-gray-900">Products</p>

                          <ul className="mt-8 space-y-4 text-sm">
                              <li>
                                  <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> FAQs </a>
                              </li>

                              <li>
                                  <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Take tour</a>
                              </li>

                             
                          </ul>
                      </div>

                      <div className="text-center sm:text-left md:col-span-4 lg:col-span-2">
                          <p className="text-lg font-medium text-gray-900">Newsletter</p>

                          <div className="mx-auto mt-8 max-w-md sm:ms-0">
                              <p className="text-center leading-relaxed text-gray-500 ltr:sm:text-left rtl:sm:text-right">
                                stay updated 
                              </p>

                              <form className="mt-4">
                                  <div className=" flex ">
                                      <label htmlFor="email" className="sr-only">Email</label>

                                      <input
                                          className="w-full outline-none  border-gray-200 px-6 py-3 shadow-sm"
                                          type="email"
                                          placeholder="Enter your email"
                                      />

                                      <button
                                          className=" bg-black px-8 py-3 font-medium text-white transition hover:bg-indigo-600"
                                          type="submit"
                                      >
                                          Subscribe
                                      </button>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
                  <hr className='border border-black mt-12' />

                  <div className="mt-10 border-gray-100  ">
                      <p className="text-center text-sm text-black font-bold flex justify-center  sm:text-left">
                          Copyright &copy; 2022. All rights reserved.
                      </p>

                 
                  </div>
              </div>
          </footer>
      
    </div>
  )
}

export default Footer
