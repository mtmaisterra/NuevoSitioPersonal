import React from 'react';
import { proyects } from '../data/ProyectsData.js';
import { projects } from '../data/ProyectsData.js';

const HomeProyects = () => {
  return (
    <div className="w-full h-auto p-6 md:p-8 lg:p-12 items-center md:items-center">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-6 text-white">CAPACITACIÓN</h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full items-center my-8">
        {proyects.map((proyect) => (
          <div className=" p-4 text-white rounded-lg shadow-md items-center text-center w-full" key={proyect.id}>
           <h2 className="text-lg md:text-xl my-4 font-extrabold">{proyect.title}</h2> 
           <div className="mb-4 my-6 font-bold bg-purpleDark opacity-85 w-full items-center">              
              <img src={proyect.image} className='w-full h-3/4 pb-4'/>
              <h3 className="text-sm md:text-base text-white px-4">{proyect.description}</h3>
              <h3 className="text-white mt-1 p-4">{proyect.program}</h3>
              <h3 className="text-white mt-1 p-4">{proyect.thecnology}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full items-center">
        {projects.map((project) => (
          <div className="p-4 text-white rounded-lg shadow-md items-center text-center w-full" key={project.id}>
             <h2 className="text-lg font-extrabold md:text-xl my-4 py-4">{project.title}</h2>
             <div className="mb-4 my-6 font-bold bg-purpleDark opacity-85 w-full items-center">             
              <img src={project.image} className='w-full h-3/4 pb-4'/>
              <h3 className="text-sm md:text-base text-white px-4">{project.description}</h3>
              <h3 className="text-white mt-1 p-4 ">{project.program}</h3>
              <h3 className="text-white mt-1 p-4">{project.thecnology}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default HomeProyects;

{/* <div className="flex mx-auto p-4 items-center">
      <h1 className=" text-3xl font-bold m-4 text-center md:text-4xl lg:text-5xl">Proyectos</h1>
      <div className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 w-full">
        {proyects.map((proyect, id) => (
          <div className="bg-white shadow-md rounded-lg overflow-hidden w-full mx-8" key={proyect.id}>
                    <div className="p-4">
              <img className="w-full h-48 object-cover" src={proyect.image} alt={proyect.id} />
              <h2 className="text-xl font-semibold mt-2">{proyect.title}</h2>
              <h3 className="text-gray-600 mt-1">{proyect.description}</h3>
              <h3 className="text-gray-500 mt-1">{proyect.program}</h3>
              <h3 className="text-gray-500 mt-1">{proyect.thecnology}</h3>             
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 w-full items-center">
        {projects.map((project, id) => (
          <div className="bg-white shadow-md rounded-lg overflow-hidden w-full" key={project.id}>
            <div className="p-4">
              <img className="w-full h-48 object-cover" src={project.image} alt={project.id} />
              <h2 className="text-xl font-semibold mt-2">{project.title}</h2>
              <h3 className="text-gray-600 mt-1">{project.description}</h3>
              <h3 className="text-gray-500 mt-1">{project.program}</h3>
              <h3 className="text-gray-500 mt-1">{project.thecnology}</h3>             
            </div>
          </div>
        ))}
      </div> 
    </div>*/}

