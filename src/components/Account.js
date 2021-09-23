import axios from "axios"
import React,{useEffect, useState} from "react"

const Account=(props)=>{
    const [details,setdetails]=useState({})

    useEffect(()=>{
        axios.get("http://dct-user-auth.herokuapp.com/users/account",{headers:{"x-auth":localStorage.getItem("token")}})
            .then((response)=>{
                const result=response.data
                setdetails(result)
            })
            .catch((err)=>{
                alert(err.message)
            })
    },[])

    return <div>
                <h1>user Account</h1>
                <p>Email-{details.email}</p>
                <p>User Name-{details.username}</p>
           </div>
}

export default Account