const CardPaciente = ({ paciente,setPaciente, eliminarPaciente }) => {

    const {nombre, propietario, email, fecha, sintomas, id} = paciente

    const handleDelete = ()=> {
        const respuesta = confirm('¿Deseas eliminar?')
        if (respuesta) {
            eliminarPaciente(id)
        }
    }

    const handleHealth = ()=> {
        const respuesta = confirm('¿El paciente ya se curo?')
        if (respuesta) {
            eliminarPaciente(id)
        }
    }

    return (
        <figure>  
            <div className="bg-gray-500 shadow-2xl rounded-xl mx-auto py-5 px-5 md:w-4/5 h-auto items-center mb-3">
                <div className="w-full h-auto flex">
                    <div className='w-4/6 content-center' >
                        <p className="text-white text-left font-bold text-sm mb-2">Nombre: {''}
                            <span className="font-normal">{nombre}</span>
                        </p>
                        <p className="text-white text-left font-bold text-sm mb-2">Dueño: {''}
                            <span className="font-normal">{propietario}</span>
                        </p>
                        <p className="text-white text-left font-bold text-sm mb-2">Correo: {''}
                            <span className="font-normal">{email}</span>
                        </p>
                        <p className="text-white text-left font-bold text-smg">Fecha: {''}
                            <span className="font-normal">{fecha}</span>
                        </p>
                    </div>
                </div>
                <div className="w-full mt-2">
                    <p className="text-white text-left font-bold text-sm mb-2">Sintomas: {''}
                        <span className="font-normal">{sintomas}</span>
                    </p>
                </div>
                <div className='flex content-evenly w-full mt-4'>
                    <button className='w-2/6 bg-red-500 text-white font-bold text-sm md:text-1xl uppercase
                    py-2 transition-all cursor-pointer hover:bg-red-600 rounded-lg ' type="button"
                    onClick={handleDelete}>
                        Eliminar</button>
                    <button className='w-2/6 bg-blue-500 text-white font-bold text-sm md:text-1xl uppercase
                    py-2 transition-all cursor-pointer hover:bg-blue-600 rounded-lg mx-5' type="button"
                    onClick={()=> setPaciente(paciente)}>
                        Editar</button>
                    <button className='w-2/6 bg-green-500 text-white font-bold text-sm md:text-1xl uppercase
                    py-2 transition-all cursor-pointer hover:bg-green-600 rounded-lg ' type="button" onClick={handleHealth}>Dar de alta</button>
                </div>
            </div>
        </figure>
    )
}

export default CardPaciente