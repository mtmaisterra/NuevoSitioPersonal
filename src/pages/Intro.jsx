import React from 'react';
import { Link } from 'react-router-dom';
import { imagen2 } from '../assets';

const Intro = () => {
    return (
        <>
            <div className="w-full bg-cover bg-center h-screen bg-fondo" >
            <div className='flex items-center justify-center min-h-screen'>
                <div className='container bg-purpleDark bg-opacity-80 h-auto p-24 md:p-12 lg:p-24 w-2/4 flex flex-col  md:w-3/4 lg:w-2/4 text-center justify-center items-center border border-w-2 '>
                    <h1 className='text-white md:p-6 lg:p-10 p-10 text-6xl text-center md:text-3xl sm:text-2xl xl:text-8xl lg:text-6xl justify-center items-center animate-moveLeft w-auto'>
                        Bienvenidos a mi sitio
                    </h1>
                    <div className='w-auto items-center '>
                        <img src={imagen2} className='w-auto h-auto m-4 shadow-lg rounded-tl-lg rounded-br-lg rounded-tr-3xl rounded-bl-3xl' />
                    </div>
                    <div className='w-auto bg-greenDark bg-opacity-90 flex flex-col items-center text-xl p-4 mt-12 rounded-xl'>
                        <Link to='/Home'>
                            <button className='text-white text-xl'>
                                Ingresar
                            </button>
                        </Link>
                    </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Intro;
