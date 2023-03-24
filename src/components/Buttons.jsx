


const Buttons = (props) => {

    const { name, classSelector  } = props


    return (
    <li className= {classSelector} >
        <a className="a-nav-link" href=''>
            
        {name} 

        </a>
    </li>
    )
}


export default Buttons