import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

import {parseCookies} from 'nookies'
import { GetServerSideProps } from "next"

export  default function AdminPage(){

    const {user} = useContext(AuthContext)
    return (
        <h1>Hello:{user?.email}</h1>
    )
}


export const getServerSideProps: GetServerSideProps = async(ctx) => {
    const cookies = parseCookies(ctx);
  
    if(!cookies['nextauth.token']){
      
      return {redirect: {
        destination: '/',
        permanent:false,
      }
    }
  }
    
  
    return {
      props:{}
    }
    
  }