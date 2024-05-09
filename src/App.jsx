import { useState } from 'react'
import './App.css'
import Categoria from './Categoria'
import MostrarGifs from './MostrarGifs';

function App() {
  const [categoria, setCategoria] = useState("");

  return (
    <div className="App">
      <h1>Buscador de Gifs</h1>
      <Categoria setCategoria={setCategoria} />
      <MostrarGifs categoria={categoria} />
    </div>

  )
}

export default App
