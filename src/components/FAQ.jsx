import React from 'react'
import Image from 'next/image'

function FAQ() {
  return (
      <div>
          <section className=" text-black p-20 ">
              <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                  <div className="max-w-xl">
                      <p>FAQ</p>
                      <h2 className="text-3xl font-bold sm:text-4xl">FREQUENTLY ASKED QUESTIONS</h2>
                  </div>

                  <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-2">
                      <div className="flex items-start gap-4">

                          <div className='bg-red-500 p-10 rounded-lg' >
                              <h2 className="text-xl text-white font-bold">the best financial accounting app ever!</h2>

                              <p className="mt-1 text-sm text-gray-700">
                                  “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.
                              </p>
                          </div>
                      </div>

                      <div className="flex items-start gap-4">
                        
                    

                          <div className=' p-10 rounded-lg' >
                              <h2 className="text-xl text-black font-bold">the best financial accounting app ever!</h2>

                              <p className="mt-1 text-sm text-gray-700">
                                  “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.
                              </p>
                          </div>
                      </div>

                      <div className="flex items-start gap-4">
                      

                          <div className=' p-10 rounded-lg' >
                              <h2 className="text-xl text-black font-bold">the best financial accounting app ever!</h2>

                              <p className="mt-1 text-sm text-gray-700">
                                  “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.
                              </p>
                          </div>
                      </div>

                      <div className="flex items-start gap-4">
                  

                          <div className='bg-red-500 p-10 rounded-lg' >
                              <h2 className="text-xl text-white font-bold">the best financial accounting app ever!</h2>

                              <p className="mt-1 text-sm text-gray-700">
                                  “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.
                              </p>
                          </div>
                      </div>

                      <div className="flex items-start gap-4">
                       

                          <div className='bg-red-500 p-10 rounded-lg'  >
                              <h2 className="text-xl text-white font-bold">the best financial accounting app ever!</h2>

                              <p className="mt-1 text-sm text-gray-700">
                                  “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.
                              </p>
                          </div>
                      </div>

                      <div className="flex items-start gap-4">
                   

                          <div className=' p-10 rounded-lg' >
                              <h2 className="text-xl text-black font-bold">the best financial accounting app ever!</h2>

                              <p className="mt-1 text-sm text-gray-700">
                                  “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
             
              <div className='m-20' >
                  <Image src="/Frame.png" height="1000" width="1000" />
              </div>
            
          </section>
          
          
      
    </div>
  )
}

export default FAQ
