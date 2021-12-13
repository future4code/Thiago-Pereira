import { StyledBasePage, StyledPageTitle } from "../styles/style-pages"
import { StyledPositiveButton } from "../styles/style-item"
import { StyledForm } from "../styles/style-form"

import { useForm } from "../api/hooks"
import { useState, useEffect } from "react"
import { getTrips, postApplication } from "../api/labex"



export default function PageCandidatar() {
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
    }, [selectedArea]);



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

    const selectArea = (event) => {
        set_selectedArea(event.target.value)
    }


    const submitForm = (event) => {
        event.preventDefault()
        postApplication(selectedTrip, form)
        resetFields()
    }

    return (
        <StyledBasePage>
            <StyledPageTitle>
                <h2>Se Candidate para uma Missão preenchendo os Campos</h2>
            </StyledPageTitle>

            <StyledForm >
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
                <select defaultValue="" onChange={selectArea} >
                    <option value="" disabled> Escolha uma Area </option>
                    {renderedArea}
                </select>

                <StyledPositiveButton> Enviar </StyledPositiveButton>

                </form>
            </StyledForm>
        </StyledBasePage>
    )
}