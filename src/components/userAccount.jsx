import React, { useState } from 'react'
import { dataBase, myCollection } from '../firebase/config';
import { useCartContext } from '../context/CartContext';
import { useUserContext } from '../context/UserContext';

export default function UserAccount() {

    // const {setOrder} = useCartContext()

    const {user, setUser, password, setPassword, login, setLogin} = useUserContext()

    const handlePassword = (e) => {

        // setPasword({'password': e.target.value}) cambia esto por un serverupdate
        setPassword(e.target.value)


    }

    const handleUser = (e) => {

        // setUser({'user': e.target.value})  cambia esto por un serverupdate
        setUser(e.target.value)

    }

    const handleSubmit = (e) => {

        e.preventDefault()
        alert('Form submited')

        setLogin(false)
    }



    return (

        <div className='form-container'>

            {login ? 
            
            <form className='form' onSubmit={handleSubmit}>

                <label className='form-label-flex-row'>

                    User Name

                    <input className='input' type="text" value={user} onChange={handleUser} placeholder='User Name' />

                </label>



                <label className='form-label-flex-row'>

                    Password:

                    <input className='input' id='input-password' type='password' value={password} placeholder='Password' onChange={handlePassword}></input>


                </label>

                <button type="submit" className='submit' >  Submit </button>

            </form> : 

            <h2 className='form white-text' > 

                Welcome {user}

            </h2>

}



        </div>

        



        

    )
}
