import { Link } from 'react-router-dom';



const NavButtons = (props) => {

    const { name, classSelector, link  } = props


    return (
    <li className= {classSelector} >

        <Link to={link} smooth='true' className="a-nav-link">

        {name} 

        </Link>

    </li>
    )
}


export default NavButtons