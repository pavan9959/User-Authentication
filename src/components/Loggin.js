import axios from "axios"
import React,{useState} from "react" 

const Loggin=(props)=>{
    const {handelaut}=props
    const [email,setemail]=useState("") 
    const [password,setpassword]=useState("")

    function handelpassword(e){
        const data=e.target.value
        setpassword(data)
    }

    function handelemail(e){
        const data=e.target.value
        setemail(data)
    }

    const handelSubmit=(e)=>{
        const data={email:email,
                    password:password}
        e.preventDefault()
        axios.post("http://dct-user-auth.herokuapp.com/users/login",data)
            .then((response)=>{
                const result=response.data
                if(result.hasOwnProperty("errors")){
                    alert(result.errors)
                }
                else{alert("logged in")
                            localStorage.setItem("token",result.token)
                            props.history.push("/Home/")
                            handelaut()
                    }
                
            })
    }

    return <div>
                <form onSubmit={handelSubmit}>
                    <input type="text" placeholder="Enter email"  value={email} onChange={handelemail} /><br/>
                    <input type="password" placeholder="Enter password" value={password} onChange={handelpassword} /><br/>
                    <input type="submit" />
                </form>
            </div>
}

export default Loggin