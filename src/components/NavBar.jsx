// Components imports
import NavButtons from "./NavButtons"
import SearchBar from "./SearchBar"
import {CartWidget} from "./cart/CartWidget"
import LogIn from "./landing-page/LogIn"
import { Link } from "react-router-dom"
import { useState } from "react"


const NavBar = (props) => {

    const [bool, setBool] = useState(false)

    const changeBool = () => {

        return setBool(!bool)
        
    }
    
    return (
        <header role='header' className="header-flex-column">


            <Link className="link-main-logo-center" to='/'>

                <img role='company logo' src="images\main logo.png" alt="company logo" className="img-main-logo" />

            </Link>

            <span href="#" class= { bool ? "header__hamburguer-button rotate" : "header__hamburguer-button"} onClick={ () => changeBool() }>
                <span class="header__hamburguer-bar"></span>
                <span class="header__hamburguer-bar"></span>
                <span class="header__hamburguer-bar"></span>
            </span>


            <nav role='navigation-bar' className="nav-navBar-flex-row-space-between">

                <ul role='navigation-buttons' className= {bool ? "ul-navButtons-flex-column" : 'ul-navButtons-flex-row' }>
                    {/* La prop de classSelector es porque me parece que voy a hacer un Button componente para todo.
                             Y la clase indica que tipo de boton sera Que opinas? */}
                    <NavButtons name='Servicies' classSelector='li-nav-button' link='/#services' />
                    <NavButtons name='About Us' classSelector='li-nav-button' link='/#about-us' />
                    <NavButtons name='Categories' classSelector='li-nav-button' link='/#categories' />

                </ul>

                <ul role='navigation-buttons' className="ul-navButtons-flex-row" >

                    <SearchBar />

                    <CartWidget shoppingCart={true}/>

                    <LogIn />

                </ul>




            </nav>

        </header>
    )


}

export default NavBar