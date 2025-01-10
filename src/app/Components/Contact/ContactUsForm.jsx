import React from 'react'

const ContactUsForm = () => {
  return (
    <main className='ourContainer md:flex justify-between pb-32 pt-20 '>
        <div className="FormRigth md:w-[50%] pb-4 md:pb-0 flex justify-start flex-col items-start ">
            <h2 className='font-semibold text-5xl'>Connect With Us</h2>
            <p className='text-xl py-4'>We’re always happy to hear from potential customers, partners, and collaborators.</p>
        </div>
        <div className="FormLeft md:w-[40%]">
            <form action="" className='flex flex-col gap-7'>
                <div className='flex flex-col items-start justify-start'>
                    <label htmlFor="" className='text-xl'>Name</label>
                    <input type="text" name="" id=""  className='w-[100%] md:w-[80%] py-[2px] bg-transparent outline-none border-b-[1px]'/>
                </div>
                <div className='flex flex-col items-start justify-start'>
                    <label htmlFor="" className='text-xl'>Email</label>
                    <input type="text" name="" id=""  className='w-[100%] md:w-[80%] py-[2px] bg-transparent outline-none border-b-[1px]'/>
                </div>
                <div className='flex flex-col items-start justify-start'>
                    <label htmlFor="" className='text-xl'>Phone</label>
                    <input type="number" name="" id=""  className='w-[100%] md:w-[80%] py-[2px] bg-transparent outline-none border-b-[1px]'/>
                </div>
                <div className='flex flex-col items-start justify-start'>
                    <label htmlFor="" className='text-xl'>Organaisation</label>
                    <input type="text" name="" id=""  className='w-[100%] md:w-[80%] py-[2px] bg-transparent outline-none border-b-[1px]'/>
                </div>
                <div className='flex flex-col items-start justify-start'>
                    <label htmlFor="" className='text-xl'>Message</label>
                    <textarea name="message" id="" className='w-[100%] md:w-[80%] py-[2px] bg-transparent outline-none border-b-[1px]'></textarea>
                </div>

                <button className='bg-slate-500 py-2 text-lg font-semibold'>Submit</button>
            </form>
        </div>
        
    </main>
  )
}

export default ContactUsForm