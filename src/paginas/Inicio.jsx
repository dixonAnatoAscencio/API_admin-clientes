import {useState, useEffect} from 'react'

import Cliente from '../components/Cliente'


const Inicio = () => {
    
    const [clientes, setClientes] = useState([])
    
    //excelente uso para consultar una api una vez se cargue el componente
     useEffect(() =>{
               
        const obtenerClientesAPI = async () =>{
           try {
               const url = 'http://localhost:4000/clientes'
                const respuesta = await fetch(url)
                const resultado = await respuesta.json()

                setClientes(resultado)
            } catch (error) {
               console.log(error)
           } 
        }
        obtenerClientesAPI()
                
    },[])
    
    const handleEliminar = async id =>{
        //confirm para validar si queremos eliminar el cliente
        const confirmar = confirm('¿Quieres eliminar este cliente...?')
        
        //PETICION A LA API PARA ELIMINAR EL ID y este codigo lo va a eliminar de la api
        if(confirmar){
            try {
                const url = `http://localhost:4000/clientes/${id}`
                const respuesta = await fetch(url, {
                    method:'DELETE'
                })

                await respuesta.json()

                //funcion con .filter para eliminarlos del arreglo de clientes
                const arrayClientes = clientes.filter( cliente => cliente.id !== id )
                setClientes(arrayClientes)
           
            } catch (error) {
                console.log(error)
            }
        }
    
    }
    
    return (

        <>
            <h1 className='font-black text-4xl text-green-800'>Clientes</h1>
            <p className='mt-3'>Administra tus clientes</p>
           
           <table className='w-full mt-5 table-auto shadowbg-white'>
                <thead className='bg-green-800 text-white'>
                    <tr>
                        <th className='p-2'>Nombre</th>
                        <th className='p-2'>Contacto</th>
                        <th className='p-2'>Empresas</th>
                        <th className='p-2'>Acciones</th>
                    </tr>
                
                </thead>
                    {clientes.map( cliente =>(
                        <Cliente
                            key={cliente.id}
                            cliente={cliente}
                            handleEliminar={handleEliminar}
                        />
                    ))}    
                <tbody>


                </tbody>

           </table>
    </>
    )
}

export default Inicio
