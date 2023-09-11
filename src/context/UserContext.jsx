import React, { createContext, memo, useContext, useState } from 'react'

export const UserContext = createContext([])

export const useUserContext = () => useContext(UserContext)

export const UserContextProvider = ( {children} ) => {

    const [password, setPassword] = useState('');
    const [user, setUser] = useState('');
    const [login, setLogin] = useState(true)

    return (

        <UserContext.Provider value={{

            password ,setPassword,
            user, setUser,
            password, setPassword,
            login, setLogin
        
        }
        }>
        
        {children}

        </UserContext.Provider>

    )


}