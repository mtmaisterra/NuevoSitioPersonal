import React from 'react'

const contact = () => {
  return (
    <div>
      <form className="" action="/index.html" method="post" enctype="multipart/form-data">
                <h1 id="contact" className="">Contacto</h1>
                <div className="t">
                    <div>
                        <label className="">Email:</label>
                    </div>
                    <div>
                        <p className=''>tmaisterra75@gmail.com</p>
                    </div>
                    <div>
                        <label className=''>Linkedln:</label>
                    </div>
                    <div>
                        <p className=''>www.linkedin.com/in/mariateresamaisterra</p>
                    </div>
                    <div>
                        <label className=''>GitHub:</label>
                    </div>
                    <div>
                        <p className=''>https://github.com/mtmaisterra</p>
                    </div>
                </div>
            </form>
    </div>
  )
}

export default contact
