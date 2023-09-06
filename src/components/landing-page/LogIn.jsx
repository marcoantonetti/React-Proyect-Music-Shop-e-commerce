import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

export default function LogIn() {




  return (
    <Link to='/log-in'>

        <FontAwesomeIcon icon={faUser} />

    </Link>
    )
}
