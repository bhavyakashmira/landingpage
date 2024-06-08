import React from 'react'
import Image from 'next/image'

function HeroSection() {
  return (
      <div className='' >
          
          <section>
              <div className="mx-auto max-w-screen-xl px-4 ">
                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                          <Image src="/Iphone.png" height="500" width="500"  />
                      </div>
                      <div className='p-24 mt-10 ' >
                          <div className="">
                              <p className=" text-gray-600">
                                  Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
                              </p>

                              <div className='flex gap-5 items-center ' >
                                  <a
                                      href="#"
                                      className="mt-8 inline-block rounded bg-black p-5 text-sm font-medium text-white transition focus:outline-none focus:ring focus:ring-yellow-400"
                                  >
                                      Get Started 
                                  </a>
                                  <a
                                      href="#"
                                      className="mt-8 inline-block rounded px-12 py-3 text-sm font-medium text-black transition focus:outline-none focus:ring focus:ring-yellow-400"
                                  >
                                      Watch video
                                  </a>
                               </div>
                             
                          </div>
                          <div>
                              <Image src="/herosec.png" height="600" width="600" />
                          </div>
                     </div>
                      
                  </div>
              </div>
          </section>
      
    </div>
  )
}

export default HeroSection
