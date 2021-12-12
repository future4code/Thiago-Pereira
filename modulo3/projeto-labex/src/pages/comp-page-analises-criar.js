import styled from "styled-components"
import { StyledBasePage, StyledBaseAnalises } from "../styles/style-pages"
import { StyledForm  } from "../styles/style-form";

import { postCreateTrip } from "../api/labex";

import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

import { useForm } from "../api/hooks";

export default function PageAnalisesCriar() {
    const history = useHistory();
    const goBackRoute = () => {history.goBack()}

    const [selectedPlanet, set_selectedPlanet] = useState("")

    const selectFormPlanets = [
        {id: "1", icon: "💠", planet: "Mercúrio"},
        {id: "2", icon: "💠", planet: "Vênus"},
        {id: "3", icon: "💠", planet: "Terra"},
        {id: "4", icon: "💠", planet: "Marte"},
        {id: "5", icon: "💠", planet: "Jupiter"},
        {id: "6", icon: "💠", planet: "Saturno"},
        {id: "7", icon: "💠", planet: "Urano"},
        {id: "8", icon: "💠", planet: "Netuno"},
        {id: "9", icon: "💠", planet: "Plutão"},
    ]

    useEffect(()=>{

    }, [selectedPlanet])

    let { form, onChange, resetFields} = useForm
    ({
        name: "", 
        planet: selectedPlanet,
        date: "12/12/1212", 
        description: "", 
        durationInDays: ""
    })


    const submitForm = (event) => {
        event.preventDefault()
        postCreateTrip(form)
        resetFields()

        console.log(form)
        }

        const selectPlanet = (event) => {
            set_selectedPlanet(event.target.value)


        }
    

    const renderedPlanets = selectFormPlanets.map((planet) => {
        return(
            <option key={planet.id} value={planet.planet}>{planet.planet}</option>
        )
    })

    const info = () => {
        console.log(selectedPlanet)
    }

    return (
        <StyledBasePage>
            <h3>Criar ADM uma nova viagem</h3>
            <button onClick={info}>INFO</button>
            <StyledForm>
                <form onSubmit={submitForm}>
                <p>Planetas</p>
                <select defaultValue="" name={'planet'} onChange={selectPlanet} required>
                    <option value="" disabled>Selecione um Planeta</option>
                    {renderedPlanets}
                </select>

                <input 
                    placeholder={'Nome da Missão'} 
                    value={form.name}
                    type="text"
                    required
                    name={"name"}
                    onChange={onChange}
                />

                <input 
                    placeholder={'Duração em dias'} 
                    value={form.durationInDays}
                    type="number"
                    required
                    name={"durationInDays"}
                    onChange={onChange}
                />

                <textarea
                    placeholder={'Descrição da Missão'} 
                    value={form.description}
                    type="text"
                    required
                    name={"description"}
                    onChange={onChange}
                />
                <button> Criar </button>
                </form>

                <button onClick={goBackRoute}>voltar</button>
            </StyledForm>
        </StyledBasePage>
    )
}