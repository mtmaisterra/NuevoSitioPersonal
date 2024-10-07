import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="w-full py-4 bg-purpleDark bg-opacity-85 flex justify-center md:fixed">
        <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl text-center justify-between">
           <span>&copy; Derechos reservados</span> 
          <span>- {year} -</span> 
          <span>Maisterra Digital Designs</span>
        </p>
      </footer>
    </>
  )
}
export default Footer;
