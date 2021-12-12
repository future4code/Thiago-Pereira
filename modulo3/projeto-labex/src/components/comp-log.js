import styled from "styled-components"
import { useState } from "react"

import { useForm } from "../api/hooks"

import { myName, baseURL, login } from "../api/labex"
import axios from "axios"

const StyledLog = styled.div`
    /* background-color: rgba(243, 243, 244, 1); */
    min-width: 25%;
`

export default function CompLog() {
    const { form, onChange} = useForm({email: "", password: ""})

    const [userName, set_userName] = useState("")
    const [loginOn, set_loginOn] = useState(false)
    const [token, set_token] = useState("")
    
    const onChangeName = (event) => {
        set_userName({...userName, [event.target.name]: event.target.value})
    }


    const login = (event) => {
        event.preventDefault()
        const url = `${baseURL}${myName}/login`
        const body = form
            axios.post (url, body
                ).then((resp) => {
                    // window.alert("logado")
                    set_token(resp.data.token)
                    set_loginOn(resp.data.success)
                    
                    window.localStorage.setItem("token", resp.data.token)
                    window.localStorage.setItem("success", resp.data.success)

                    // console.log(resp.data)
                }).catch((error) => {
                    console.log(error.response)
                    console.log("log do URL:", url)
                    console.log("log do Body:", body)
                })
    }

    const logout = () => {
        set_loginOn(false)
        set_token("")
        // window.localStorage.setItem("success", false)

        window.localStorage.removeItem("token")
    }

    return(
        <StyledLog>
            {
            loginOn
            ?
            <div>
                <p> {userName.name} </p>
                <button onClick={logout}> Logout </button>
            </div>
            :
            <div>
                <form onSubmit={login}>
                    <input 
                        placeholder={'Email'} 
                        value={form.email}
                        type="email"
                        required
                        name={"email"}
                        onChange={onChange}
                    />

                    <input 
                        placeholder={'Senha'} 
                        value={form.password}
                        type="password"
                        required
                        name={"password"}
                        onChange={onChange}
                    />

                    <input 
                        placeholder={'Nome'}
                        value={userName.name}
                        type="text"
                        required
                        name={"name"}
                        onChange={onChangeName}
                    />

                    <button> Login </button>
                </form>
            </div>
            }
        </StyledLog>
    )
}