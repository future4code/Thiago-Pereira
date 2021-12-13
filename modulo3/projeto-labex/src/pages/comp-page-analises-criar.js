import { StyledBasePage, StyledPageTitle } from "../styles/style-pages"
import { StyledForm  } from "../styles/style-form";
import { StyledT1Button, StyledPositiveButton } from "../styles/style-item";

import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { useForm } from "../api/hooks";
import { postCreateTrip } from "../api/labex";



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


    let { form, onChange, resetFields} = useForm
    ({
        name: "", 
        planet: selectedPlanet,
        date: "12/12/1212", 
        description: "", 
        durationInDays: ""
    })

    const selectPlanet = (event) => {
        set_selectedPlanet(event.target.value)
    }

    const submitForm = (event) => {
        event.preventDefault()
        postCreateTrip(form)
        resetFields()
    }


    const renderedPlanets = selectFormPlanets.map((planet) => {
        return(
            <option key={planet.id} value={planet.planet}>{planet.planet}</option>
        )
    })

    useEffect(()=>{

    }, [selectedPlanet])

    return (
        <StyledBasePage>
            <StyledPageTitle>
                <h2>Crie uma Missão nova preenchendo os Campos</h2>
            </StyledPageTitle>

            <StyledForm>
                <form onSubmit={submitForm}>
                <p>Planetas</p>
                <select defaultValue="" onChange={selectPlanet} required>
                {/* <select defaultValue="" name={'planet'} onChange={selectPlanet} required> */}
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
                <StyledPositiveButton> Criar Missão </StyledPositiveButton>
                </form>
            </StyledForm>
            <StyledT1Button>
                <button onClick={goBackRoute}> VOLTAR </button>
            </StyledT1Button>
        </StyledBasePage>
    )
}