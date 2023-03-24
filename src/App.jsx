import { useState } from 'react'
import ItemListContainer from './components/ItemList'
import NavBar from './components/NavBar'


function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <NavBar/>
      <ItemListContainer/>


      
    </>

  )
}

export default App
