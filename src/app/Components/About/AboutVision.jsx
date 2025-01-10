import React from 'react'

const AboutVision = () => {
  return (
    <main className="ourContainer py-14">
    <h2 className="text-5xl font-semibold pb-1">Our Beliefs</h2>
    <h3 className="md:text-2xl text-xl pb-4 md:w-[40%]">We are relentless. Our passion helps us to deliver seamless logistics solutions every time.</h3>



    <div className="md:flex justify-between gap-10">
        <div className="1 flex-1 md:h-[630px] lg:h-[550px] bg-cyan-300 mb-10">
            <div className="h-[50%]">
                <img src="/aboutImages/ab1.jpg" className='h-full w-full object-cover' alt="" />
            </div>
            <div className="px-4 py-4">
                <h1 className='text-2xl font-semibold pb-3'>Vision</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, optio quas repellendus corrupti porro ullam ex quisquam adipisci hic id, earum at asperiores. Doloribus nisi amet est maxime? Natus, dignissimos!</p>
            </div>
        </div>
        <div className="2 flex-1 md:h-[630px] lg:h-[550px] bg-cyan-300 mb-10">
            <div className="h-[50%]">
                <img src="/aboutImages/ab1.jpg" className='h-full w-full object-cover' alt="" />
            </div>
            <div className="px-4 py-4">
                <h1 className='text-2xl font-semibold pb-3'>Mission</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, optio quas repellendus corrupti porro ullam ex quisquam adipisci hic id, earum at asperiores. Doloribus nisi amet est maxime? Natus, dignissimos!</p>
            </div>
        </div>
        <div className="3 flex-1 md:h-[630px] lg:h-[550px] bg-cyan-300 mb-10">
            <div className="h-[50%]">
                <img src="/aboutImages/ab1.jpg" className='h-full w-full object-cover' alt="" />
            </div>
            <div className="px-4 py-4">
                <h1 className='text-2xl font-semibold pb-3'>Purpose</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, optio quas repellendus corrupti porro ullam ex quisquam adipisci hic id, earum at asperiores. Doloribus nisi amet est maxime? Natus, dignissimos!</p>
            </div>
        </div>
    </div>

    
</main>
  )
}

export default AboutVision