// Components imports
import Buttons from "./Buttons"
import SearchBar from "./SearchBar"
import CartWidget from "./CartWidget"
import LogIn from "./LogIn"
import { Link } from "react-router-dom"


const NavBar = (props) => {


                return (
                    <header role='header' className="header-flex-column">


                        <Link  className="link-main-logo-center" to='/'>
                        
                        <img role='company logo' src="images\main logo.png" alt="company logo" className="img-main-logo"/>
                        
                        </Link>
                        

                    <nav role='navigation-bar' className="nav-navBar-flex-row-space-between">

                        <ul role='navigation-buttons' className="ul-navButtons-flex-row">
                            {/* La prop de classSelector es porque me parece que voy a hacer un Button componente para todo.
                             Y la clase indica que tipo de boton sera Que opinas? */}
                            <Buttons name='Servicios'  classSelector='li-nav-button'/>
                            <Buttons name='Categorias' classSelector='li-nav-button' link='http://localhost:5173/#categories'/>
                            <Buttons name='Nosotros'   classSelector='li-nav-button' link='/#div-about-us'/>

                        </ul>

                        <ul role='navigation-buttons' className="ul-navButtons-flex-row" >

                        <SearchBar/>

                        <CartWidget/>

                        <LogIn/>

                        </ul>
                        
                       


                    </nav>
                    
                    </header>
                )


}

export default NavBar