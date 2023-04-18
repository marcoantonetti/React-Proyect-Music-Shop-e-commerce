import { useState } from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer'
import { Navigate, Route, Routes } from 'react-router-dom'
import { UrlNotFound } from './components/UrlNotFound'
import { LandingPage } from './components/landing-page/LandingPage'


function App() {


  return (
    <>

      <NavBar/>

     <Routes>


      <Route exact path='/' element={<LandingPage/>}/>
      <Route exact path='/categories/:cid' element={<ItemListContainer title='catalogo'/>}/>
      <Route exact path='/detail/:pid' element={<ItemDetailContainer/>}  />
      <Route exact path='/404error' element={<UrlNotFound/>}  />

      {/* <Route exact path='*' element={<Navigate to={'404error'}/>}/> */}

    </Routes>


      
    </>

  )
}

export default App
