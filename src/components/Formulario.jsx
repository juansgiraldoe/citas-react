import { useState, useEffect } from 'react'
import Error from './error'

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {

    const [ nombre, setNombre ] =useState('')
    const [ propietario, setPropietario ] =useState('')
    const [ email, setEmail ] =useState('')
    const [ fecha, setFecha ] =useState('')
    const [ sintomas, setSintomas ] =useState('')
    const [error, setError ] = useState(false)

    useEffect(()=>{
        if ( Object.keys( paciente ).length > 0 ) {
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
        //Lee los cambios en las dependencias.
    }, [paciente])

    const generarId = ()=> {
        const random = Math.random().toString(36).substr(2)
        const fecha = Date.now().toString(36)

        return random + fecha
    }

    const handleSumbit = (e) => {
        e.preventDefault()
        //validacion del formulario.
        if ([nombre, propietario, email, fecha, sintomas].includes('')) {
            setError(true)
            return
        }
        setError(false)

        //Objeto de pacientes:

        const objetoPacientes = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas
        }

        if (paciente.id) {
            //Editando el registro
            objetoPacientes.id = paciente.id
            const pacienteUpdate = pacientes.map ( pacienteState =>
            pacienteState.id === paciente.id ? objetoPacientes : pacienteState)
            setPacientes(pacienteUpdate)
            setPaciente({})
            
        } else {
            //Nuevo registro.
            objetoPacientes.id = generarId()
            setPacientes([...pacientes, objetoPacientes])
        }

        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')

    }

    return (
        <section className="md:w-2/5 md:h-auto my-auto py-5 px-2">
            <p className="text-xl font-semibold">En el siguiente formulario podras ingresar los datos de tus
                <span className="text-indigo-600 font-medium"> pacientes</span> para poder generar una tarjeta de cada uno.
            </p>
            <form action="" className="px-6 bg-gray-500 shadow-xl rounded-lg py-5 mt-8 h-auto" onSubmit={ handleSumbit }>
                { error && <Error><p>'Todos los campos son obligatorios'</p></Error> }
                <label htmlFor="nombre" className="block py-2 text-left text-white font-bold text-1xl uppercase">
                    Nombre:
                </label>
                <input id="nombre"
                type="text"
                className="w-full rounded-lg p-2 mb-3"
                placeholder="Escibe tu nombre"
                value={nombre}
                onChange={ (e) => setNombre(e.target.value) }/>
                <label htmlFor="propietario" className="block py-2 text-left text-white font-bold text-1xl uppercase">
                    Nombre del Propietario:
                </label>
                <input id="propietario" type="text" className="w-full rounded-lg p-2 mb-3" placeholder="Escibe tu nombre"
                value={propietario}
                onChange={ (e) => setPropietario(e.target.value) }
                />
                <label htmlFor="email" className="block py-2 text-left text-white font-bold text-1xl uppercase">
                    E-mail:
                </label>
                <input id="email" type="email" className="w-full rounded-lg p-2 mb-3" placeholder="Correo electronico"
                value={email}
                onChange={ (e) => setEmail(e.target.value) }
                />
                <label htmlFor="fecha" className="block py-2 text-left text-white font-bold text-1xl uppercase">
                    Fecha de ingreso:
                </label>
                <input id="fecha" type="date" className="w-full rounded-lg p-2 mb-3" placeholder="Correo electronico"
                value={fecha}
                onChange={ (e) => setFecha(e.target.value) }
                />
                <label htmlFor="sintomas" className="block py-2 text-left text-white font-bold text-1xl uppercase">
                    Sintomas:
                </label>
                <textarea id="sintomas" className="w-full rounded-md p-2" placeholder="Sintomas"
                value={sintomas}
                onChange={ (e) => setSintomas(e.target.value) }
                ></textarea>
                <input type="submit"
                className="w-full bg-blue-500 text-white font-bold text-1xl uppercase py-2 mt-5 transition-all
                cursor-pointer hover:bg-blue-600 rounded-lg"
                value={ paciente.id ? 'Editar paciente' : 'Agregar paciente'}
                />
            </form>
        </section>
    )
}

export default Formulario