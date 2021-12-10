import styled from "styled-components"
import axios from "axios"

import { StyledBasePage, StyledBaseViagens } from "../styles/style-pages"
import '../styles/style-color.css'

import { useState } from "react"



export default function PageViagens(props) {


    const picklist = () => {
        console.log("console da page", props.listaViagens)
    }

    return (
        <StyledBaseViagens>
            {/* "Lista de VIAGENS" */}
            {props.renderedViagens}
            {/* <button onClick={picklist}>AQUI</button> */}
        </StyledBaseViagens>
    )
}