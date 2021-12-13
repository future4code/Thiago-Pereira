import axios from "axios"
import styled from "styled-components"

import { useState } from "react"
import { useHistory } from "react-router-dom"
import { useForm } from "../api/hooks"
import { myName, baseURL } from "../api/labex"



const StyledLog = styled.div`
    min-width: 25%;
`

export default function CompLog() {
    const { form, onChange} = useForm({email: "", password: ""})

    const [userName, set_userName] = useState("")
    const [loginOn, set_loginOn] = useState(false)
    const [token, set_token] = useState("")

    const history = useHistory()
    
    const onChangeName = (event) => {
        set_userName({...userName, [event.target.name]: event.target.value})
    }


    const login = (event, ) => {
        event.preventDefault()
        const url = `${baseURL}${myName}/login`
        const body = form
            axios.post (url, body
                ).then((resp) => {
                    alert("logado")
                    set_token(resp.data.token)
                    set_loginOn(resp.data.success)                    
                    window.localStorage.setItem("token", resp.data.token)
                    window.localStorage.setItem("success", resp.data.success)
                    history.push('/admin/trips/list')
                }).catch((error) => {
                    console.log(error.response)
                })
    }


    const logout = () => {
        set_loginOn(false)
        set_token("")
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