import styled from "styled-components"
import { StyledBasePage } from "../styles/style-pages"
import { useForm } from "../api/hooks"
import { useState, useEffect } from "react"

import { getTrips, postApplication } from "../api/labex"
import { StyledForm } from "../styles/style-form"
import axios from "axios"



export default function PageCandidatar(props) {
    const selectFormArea = [
            {id: "1", icon: "🌱", area: "Biologia"},
            {id: "2", icon: "⚙️", area: "Engenharia"},
            {id: "2", icon: "💉", area: "Medicinal"},
            {id: "2", icon: "🛡️", area: "Militar"},
            {id: "2", icon: "⚡", area: "Técnica"},
            {id: "2", icon: "⚒️", area: "Extração"},
        ]
    const [selectedTrip, set_selectedTrip] = useState("")
    const [selectedArea, set_selectedArea] = useState("Biologia")

    const [tripsList, set_tripsList] = useState([])

    const { form, onChange, resetFields} = useForm
        ({
            name: "", 
            age: "", 
            applicationText: "", 
            profession: selectedArea, 
            country: "Terra"
        })

    useEffect(() => {
        getTrips(set_tripsList)
        }, []);



    const renderedOptions = tripsList.map((option) => {
        return(
            <option key={option.id} value={option.id}>{option.name}</option>
        )
    })

    const renderedArea = selectFormArea.map((area) => {
        return(
            <option key={area.id} value={area.area}>{area.icon} {area.area}</option>
        )
    })

    
    const selectViagem = (event) => {
        set_selectedTrip(event.target.value)
    }


    const submitForm = (event) => {
        event.preventDefault()
        postApplication(selectedTrip, form)
        resetFields()
    }

    return (
        <StyledBasePage>
            <StyledForm >
                {/* <button onClick={applyToTrip}> INFO </button> */}
                <form onSubmit={submitForm}>
                    <p>Missão</p>
                <select defaultValue="" onChange={selectViagem}>
                    <option value="" disabled>Escolha uma Missão</option>
                    {renderedOptions}
                </select>

                <input 
                    placeholder={'Nome'} 
                    value={form.name}
                    type="text"
                    required
                    name={"name"}
                    onChange={onChange}
                />

                <input 
                    placeholder={'Idade'} 
                    value={form.age}
                    type="number"
                    min="18"
                    required
                    name={"age"}
                    onChange={onChange}
                />

                <textarea
                    placeholder={'Descrição da Candidatura'} 
                    value={form.applicationText}
                    type="text"
                    required
                    name={"applicationText"}
                    onChange={onChange}
                />
                <p>Area</p>
                <select defaultValue="" onChange={onChange} >
                    <option value="" disabled> Escolha uma Area </option>
                    {renderedArea}
                </select>

                <button>Enviar</button>
                </form>
            </StyledForm>
        </StyledBasePage>
    )
}



// const applyToTrip = (event) => {
//         event.preventDefault()
//         const url = `${baseURL}${myName}/trips/${selectedTrip}/apply`
//         const body = form
//         axios.post (url, body
//             ).then((resp) =>{
//                 window.alert("sucesso")
//             }).catch((error) => {
//                 console.log("applyToTrip:", error.response)
//                 console.log("log do URL:", url)
//                 console.log("log do Body:", body)
//             })
//     }

    

    // const getTrips = () => {
    // const url = `${baseURL}${myName}/trips`
    // axios.get( url, 
    //     ).then((resp) => {
    //         console.log(resp.data.trips)
    //         set_listaViagens(resp.data.trips)
    //         console.log("aqui", listaViagens)
    //     }).catch((error) => {
    //         console.log(error.response)
    //     })
    // }