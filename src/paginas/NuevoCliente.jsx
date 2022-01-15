import React from 'react'
import Formulario from '../components/Formulario'

const NuevoCliente = () => {
    return (
        <>
            <h1 className='font-black text-4xl text-green-800'>Nuevo cliente</h1>
            <p className='mt-3'>Llena el siguiente formulario para registrar un cliente</p>
        
        
          <Formulario />          
        </>
    )
}

export default NuevoCliente
