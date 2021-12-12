import styled from "styled-components"
import { StyledBasePage } from "../styles/style-pages"
import { useEffect, useState } from "react";

import { useHistory } from "react-router-dom";


export default function PageAnalisesNot(props) {


    // useEffect(() => {
    //     const token = localStorage.getItem("token")
    //         if(token === null){
    //             callLogout()
    //         }
    // }, [loginOn])

    // const callLogout = () => {
    //     set_loginOn(false)
    // }


    // const token = window.localStorage.getItem("success")

    return (
        <StyledBasePage>
                <p>SEM ACESSO</p>
                <h1>Favor Logar</h1>
                <p>Esta Area é restrita!</p>
        </StyledBasePage>
    )
}