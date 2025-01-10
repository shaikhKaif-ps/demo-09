import React from 'react'
import ContactSpotLigth from '../Components/Contact/ContactSpotLigth'
import ContactUsForm from '../Components/Contact/ContactUsForm';
import ContactAddress from '../Components/Contact/ContactAddress';

const page = () => {
    
  return (
    <>
        <ContactSpotLigth />
        <ContactAddress />

        <ContactUsForm />
    </>
  )
}

export default page