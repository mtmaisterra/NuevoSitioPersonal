import React from 'react';
import { cursos } from '../data/EstudiesData.js';

const HomeStudies = () => {
  return (
    <div className="w-full h-auto p-6 md:p-8 lg:p-12 md:items-center md:justify-center md:justify-items-center">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-6 text-white">CAPACITACIÓN</h1>
      <div className="space-y-6">
        <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center">
          {cursos.map((curso) => (
            <div className="p-4 rounded-lg shadow-md w-3/4" key={curso.id}>
              <div className="mb-4 text-center text-black">
                <img className='text-center w-full h-auto mt-4 bg-none' src={curso.image} />
                <div className='w-full bg-purpleDark opacity-85 text-white items-center text-center p-6'>
                  <h2 className="text-lg md:text-xl font-semibold">{curso.name}</h2>
                  <h3 className="text-sm md:text-base">{curso.description}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default HomeStudies;
