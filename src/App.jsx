import { useState, useEffect } from 'react'
import Header from './components/Header';
import Formulario from './components/Formulario';
import Pacientes from './components/Pacientes';


function App() {

  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})

  useEffect(() => {
    const obtenerData = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []
      setPacientes( pacientesLS )
    }
    obtenerData()
  }, []);

  useEffect(() => {
      localStorage.setItem('pacientes', JSON.stringify( pacientes ))
  }, [pacientes]);

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id)
    setPacientes(pacientesActualizados)
  }

  return (
      <>
        <Header/>
        <div className='md:flex container mx-auto'>
          <Formulario
            pacientes={ pacientes }
            setPacientes={ setPacientes }
            paciente={ paciente }
            setPaciente={ setPaciente }
          />
          <Pacientes
            pacientes={ pacientes }
            setPaciente={ setPaciente }
            eliminarPaciente={ eliminarPaciente }
          />
        </div> 
      </>
  );
}

export default App;