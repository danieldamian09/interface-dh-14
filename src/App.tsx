import './App.css'
import { useEffect, useState } from 'react';
import { getDatos } from './service/getDatos';
import { Datos } from './interface/datosApi';

function App() {

  const [datos, setDatos] = useState<Datos[]>([])

  useEffect(() => {
    getDatos().then(datos => setDatos(datos as Datos[]))
  }, [])
  

  return (
    <div className="App">
      <h1>Camada 1 Hola 😊👀</h1>
      {datos.map(dato => (<p key={dato.id}>{dato.title }</p>))}
    </div>
  )
}

export default App
