import { StyledPageViagens } from "../styles/style-pages"
import { StyledTripCard } from "../styles/style-cards";

import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";



export default function PageAnalisesNot() {


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
        <StyledPageViagens>
            <StyledTripCard>
                <p>SEM ACESSO</p>
                <strong>Favor Logar</strong>
                <p>Esta Area é restrita!</p>
            </StyledTripCard>
        </StyledPageViagens>
    )
}