import axios from "axios"
import React ,{useState} from "react" 

const Register=(props)=>{
    const [username,setusername]=useState("")
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    // const [err,seterr]=useState(false)
    // const [mail,setmail]=useState(false)
    // const [code,setcode]=useState(false)

    function handelpassword(e){
        const data=e.target.value
        setpassword(data)
    }

    function handelemail(e){
        const data=e.target.value
        setemail(data)
    }

    function handelname(e){
        const data=e.target.value
        setusername(data) 
    }


    function handel_submit(e){
        e.preventDefault()
        const data={username:username,
                    email:email,
                    password:password}
        axios.post("http://dct-user-auth.herokuapp.com/users/register",data)
            .then((response)=>{
                const result=response.data
                if(result.hasOwnProperty("errors")){alert(result.message)}
                else{props.history.push("/Loggin/")}
                
            })
            .catch((err)=>{
                alert(err.message)
            })
    }

    return <div>
                <form onSubmit={handel_submit}>
                    <input type="text" placeholder="Enter username" value={username} onChange={handelname} ></input><br/>
                    {/* {err && <p style={{color:"red"}} >User name should't be blank</p>} */}
                    <input type="text" placeholder="Enter email" value={email} onChange={handelemail} ></input><br/>
                    {/* {err && <p style={{color:"red"}} >Email is wrong</p>} */}
                    <input type="password" placeholder="Enter password" value={password} onChange={handelpassword} ></input><br/>
                    {/* {err && <p style={{color:"red"}} >Miss match</p>} */}
                    <input type="submit" />
                </form>
            </div>
}
export default Register