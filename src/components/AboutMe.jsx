import React from 'react'

const AboutMe = () => {
    return (
        <div className='w-full flex flex-col items-center'>
            <div className='w-full text-center'>
                <h1 className='text-white my-6 text-4xl md:text-6xl'>
                    Hola, soy María Teresa Maisterra.
                </h1>
            </div>
            <div className='text-white m-4 text-justify font-semibold max-w-4xl'>
                <p className='mb-6 text-lg md:text-2xl'>
                    Actualmente tengo 48 años, vivo en San Pedro,
                    Departamento Castro Barros en la provincia de La Rioja, República Argentina.
                </p>
                <p className='mb-6 text-lg md:text-2xl'>
                    Soy un docente experimentado en técnicas informáticas aplicadas a la computación con una sólida trayectoria educativa obtenida
                    en el Instituto Superior de Profesorado Dr. Joaquín Víctor González en la Ciudad Autónoma de Buenos Aires, donde me gradué en el año 2002.
                    Desde 2004, he ejercido la docencia en colegios de la zona, acumulando 20 años de experiencia en la enseñanza de fundamentos
                    tecnológicos y computacionales.
                </p>
                <p className='mb-6 text-lg md:text-2xl'>
                    Durante la pandemia, descubrí mi pasión por la programación y me dediqué a realizar distintos cursos para profundizar mis
                    conocimientos en esta área.
                    He adquirido habilidades en React Vite, CSS y JavaScript, con un enfoque particular en el desarrollo de interfaces de usuario
                    y la implementación de sitios web dinámicos.
                </p>
                <p className='mb-6 text-lg md:text-2xl'>
                    Estoy en búsqueda de una oportunidad laboral que me permita aplicar y expandir mis conocimientos en desarrollo front-end,
                    preferentemente en un entorno de trabajo remoto. Estoy entusiasmada por la posibilidad de contribuir con mi
                    experiencia docente y técnica para crear soluciones web innovadoras y accesibles.
                </p>
            </div>
        </div>
    )
}

export default AboutMe

