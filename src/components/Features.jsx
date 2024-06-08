import React from 'react'
import Image from 'next/image'
function Features() {
  return (
      <div className='grid grid-cols-2 p-5 ml-20 mr-20 items-center '  >
        
          <div>
              <Image src="/mobile.png" height="500" width="500"  />
          </div>
          <div>
              <p className='text-red-400 text-xl ' >FEATURES</p>
              <h1 className='font-bold text-5xl' >uifry premium</h1>
              <ul className='gap-10 m-2 ' >
                  <li className='m-2' >
                      <div className='flex gap-1 ' >
                          <Image src="/star-05.png" height="1" width="15" />
                          <h1 className='text-black font-bold' >budgeting intervals</h1>
                      </div>
                          <p className='text-gray-700' >Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                     
                      
                  </li>
                  <li className='m-2' >
                      <div className='flex gap-1 ' >
                          <Image src="/cube-02.png" height="1" width="15" />
                          <h1 className='text-black font-bold' >budgeting intervals</h1>
                      </div>
                      <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                  </li>
                  <li className='m-2' >
                      <div className='flex gap-1 ' >
                          <Image src="/star-05.png" height="1" width="15" />
                          <h1 className='text-black font-bold' >budgeting intervals</h1>
                      </div>
                      <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                  </li>
              </ul>
          </div>
          
      
    </div>
  )
}

export default Features
