// Components imports
import Buttons from "./Buttons"
import SearchBar from "./SearchBar"
import CartWidget from "./CartWidget"
import LogIn from "./LogIn"


const NavBar = (props) => {


                return (
                    <header role='header' className="header-flex-column">

                    <div className="div-main-logo-center">
                        <img role='company logo' src="images\main logo.png" alt="company logo" className="img-main-logo"/>
                    </div>

                    <nav role='navigation-bar' className="nav-navBar-flex-row-space-between">

                        <ul role='navigation-buttons' className="ul-navButtons-flex-row">
                            {/* La prop de classSelector es porque me parece que voy a hacer un Button componente para todo.
                             Y la clase indica que tipo de boton sera Que opinas? */}
                            <Buttons name='Servicios'  classSelector='li-nav-button'/>
                            <Buttons name='Categorias' classSelector='li-nav-button'/>
                            <Buttons name='Nosotros'   classSelector='li-nav-button'/>

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