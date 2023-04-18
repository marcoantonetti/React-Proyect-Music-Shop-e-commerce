


const Buttons = (props) => {

    const { name, classSelector, link  } = props


    return (
    <li className= {classSelector} >
        <a className="a-nav-link" href={link}>
            
        {name} 

        </a>
    </li>
    )
}


export default Buttons