import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { UrlNotFound } from './components/UrlNotFound'
import { LandingPage } from './components/landing-page/LandingPage'
import { CartContextProvider } from './context/CartContext'
import { CartConteiner } from './components/cart/CartConteiner'
import ScrollToHashElement from './functions/ScrollToHashElement'
import { Footer } from './components/footer'


function App() {

  return (

    <CartContextProvider>

    <BrowserRouter>
    
    <ScrollToHashElement /> {/* This component allows the use of internal links and enables smooth scrolling*/}

     <NavBar/>
    
     <Routes>


      <Route  path='/' element={<LandingPage/>}/>
      <Route exact path='/categories/:cid' element={<ItemListContainer />}/>
      <Route  path='/#categories' element={<LandingPage/>}/>
      <Route exact path='/detail/:pid' element={<ItemDetailContainer/>}  />
      <Route exact path='/cart' element={<CartConteiner/>}  />
      <Route exact path='/404error' element={<UrlNotFound/>}  />

      {/* <Route exact path='*' element={<Navigate to={'404error'}/>}/> */}

    </Routes>


    <Footer/>
    </BrowserRouter>

   </CartContextProvider>


  )
}

export default App
