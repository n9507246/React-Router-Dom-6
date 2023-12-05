import {createContext, useState} from 'react'

export const AuthContext = createContext(null)


export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

    const singIn = (dataUser, redirectTo) => {
        setUser(dataUser);
        redirectTo();
    }


    const singOut = (redirectTo) => {
        setUser(null);
        redirectTo();
    }

    const context = {user, singIn, singOut}

    return (
        <AuthContext.Provider value={context}>
            {children}
        </AuthContext.Provider>
    )
}