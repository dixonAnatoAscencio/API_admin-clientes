import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import Formulario from '../components/Formulario'

const EditarCliente = () => {
   
     // aqui vamos a manjear la informacion 
     const [cliente, setCliente] = useState({})

     const [cargando, setCargando] = useState(true)
 
 
     //hook para leer y acceder a parametros dinamicos en las url
     const { id } = useParams()
 
     //cuando este listo el componente envia la peticion a la api 
     useEffect(() => {
         
         setCargando(!cargando)
         const obtenerClienteApi = async () =>{
             try {
                 const url = `http://localhost:4000/clientes/${id}`
                 const respuesta = await fetch(url)
                 const resultado = await respuesta.json()
                 setCliente(resultado)
             
             } catch (error) {
                 console.log(error)
             }
             setCargando(!cargando)
             
         }
         obtenerClienteApi()
     }, [])
     
    return (
        <>
            <h1 className='font-black text-4xl text-green-800'>Editar Cliente</h1>
            <p className='mt-3'>Utiliza este formulario para editar datos de un cliente</p>

            
            {cliente?.nombre ? (
                //si esto se cumple el ternario ejecuta el codigo y si no muesta el parrafo con el mensaje
                <Formulario
                    cliente={cliente}
                    cargando={cargando}
              
              />    
            ): <p>Cliente ID no valido</p>}        
        </>
    )
}

export default EditarCliente
