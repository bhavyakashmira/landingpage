import React from 'react'
import Image from 'next/image'

function Testimonials() {
  return (
      <div>
          <div className="   " >
              <p className=' flex justify-center ' >TESTIMONIAL</p>
              <h1 className='text-3xl flex justify-center font-bold text-center ' >What Other <br></br> Users Say Aabout Us?</h1>
          </div>
          <div className='grid grid-cols-2 items-center m-20 ' >
              <div className=' mr-20 ' >
                  <Image src="/test.png" height="500" width="500" />
              </div>
              <div className='m-20 text-left ' >

             
                     
                 <h1 className='text-black text-xl font-bold' >The best financial accounting app ever!</h1>
                 
                  <p className='text-gray-700' >Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
                  <Image className='m-2' src="/icons.png" height="100" width="200" />
                  <p className='font-bold' >Nick jonas</p>

              </div>
          </div>
      
    </div>
  )
}

export default Testimonials
