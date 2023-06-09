// Components imports
import NavButtons from "./NavButtons"
import SearchBar from "./SearchBar"
import CartWidget from "./cart/CartWidget"
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
                            <NavButtons name='Servicios'  classSelector='li-nav-button'/>
                            <NavButtons name='Categorias' classSelector='li-nav-button' link='/#categories'/>
                            <NavButtons name='Nosotros'   classSelector='li-nav-button' link='/#div-about-us'/>

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