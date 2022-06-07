import CardPaciente from './CardPaciente'

const Pacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {

    return (
        <section className="md:w-3/5 h-[85vh] md:overflow-y-scroll items-center mt-8 px-2">
            { pacientes && pacientes.length ? (
                <>
                    <h2 className='font-bold text-3xl text-center mb-3'>Listado de pacientes.</h2>
                    <p className='text-xl text-center mb-3'>
                        Pacientes y citas pendientes por
                        <span className="text-indigo-600 font-medium"> revisar o atender.</span>
                    </p>
                    {pacientes.map(paciente => (
                        <CardPaciente
                            paciente={ paciente }
                            key={ paciente.id }
                            setPaciente={ setPaciente }
                            eliminarPaciente={ eliminarPaciente }
                        />
                    ))}
                </>

            ) : (
                <>
                    <h2 className='font-bold text-3xl text-center mb-3'>Aun no hay pacientes.</h2>
                    <p className='text-xl text-center mb-3 font-semibold'>
                        Comienza agregando pacientes en el formulario
                        <span className="text-indigo-600 font-medium"> aparecerán aqui.</span>
                    </p>
                </>
            )}


        </section>
    )
}

export default Pacientes