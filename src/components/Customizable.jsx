import React from 'react'
import Image from 'next/image'

function Customizable() {
  return (
      <div className='grid grid-cols-2 p-5 ml-20 mr-20 items-center '  >
          <div>
              <Image src="/customizable.png" height="500" width="500" />
          </div>
          <div>
         
              <div className='flex gap-3 m-4 items-center  ' >
                  <Image src="/noti.png" height="40" width="40" />
                  <h1 className='text-black text-xl font-bold' >Fully customizable</h1>
              </div>
              <p className='text-gray-700' >Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>

          </div>
        


      </div>
  )
}

export default Customizable
