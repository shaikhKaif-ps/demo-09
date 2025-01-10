import React from 'react'

const ContactAddress = () => {
    const mystyle = {
        width: "100%",
        height: "450px",
        border: "0",
    }; 

  return (
    <main className='ourContainer py-6'>
            <div className='md:flex  md:h-[500px] justify-between '>
                <div className="leftContact md:w-[50%]">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7051926963177!2d77.55557877588683!3d12.926659815860383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f4815145bad%3A0x3aebf33ea9569338!2sMRS%20Shipping%20LLP!5e0!3m2!1sen!2sin!4v1712295826246!5m2!1sen!2sin" style={mystyle} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" data-aos="fade-in" data-aos-duration="500" data-aos-delay="400" data-aos-once="true"></iframe>
                </div> 
                <div className="rightContact md:w-[40%] py-6 md:py-0">
                    <div className="">
                        <h3 className='text-5xl font-semibold pb-4'>Head Office</h3>
                        <div className="flex text-lg font-medium flex-col gap-4">

                            <div className="">
                                <h4>Mumbai</h4>
                                <p>Ground Floor, Shop No. 6, Agrawal Trade Centre, Belapur, Belapur, Navi Mumbai, Thane, Maharashtra, 400614</p>
                            </div>
                            <div className="">
                                <h4>General Enquiries:</h4>
                                <p>+91 98989 98989</p>
                            </div>
                            <div className="">
                                <h4>RFQ Enquiries:</h4>
                                <p>+91 98989 98989</p>
                            </div>
                            <div className="">
                                <h4>Email</h4>
                                <p>tlcMumbia@info.com</p>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
    </main>
  )
}

export default ContactAddress