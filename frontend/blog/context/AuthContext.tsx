import {createContext, ReactNode, useState} from 'react';
import Router from 'next/router';
import { api } from '../services/api';

import {setCookie} from 'nookies'



type User = {
    email: string;

}

type SignInCredentials = {
    email:string,
    password:string,
}

type AuthContextData = {
    signIn(credentials: SignInCredentials):Promise<void>;
    user?:User;
    isAuthenticated: boolean;
};


type AuthProviderProps ={
    children: ReactNode;
}
export const AuthContext = createContext({} as AuthContextData)


export function AuthProvider({children}:AuthProviderProps){

    const [user, setUser] = useState<User>();
    const isAuthenticated =  !!user;


    async function signIn({email, password}:SignInCredentials){

      try {
        const  response = await api.post('users/login', {
            email,
            password
        })

        const {token} = response.data;

      setUser({
        email,
      })

      setCookie(undefined, 'nextauth.token', token, {maxAge:60*5,
        path:'/'
    })


      Router.push('adminPage')
      } catch (error) {
        console.log(error)
      }

    }
    return (
        <AuthContext.Provider value={{signIn, isAuthenticated, user}}>
            {children}
        </AuthContext.Provider>
    )
}