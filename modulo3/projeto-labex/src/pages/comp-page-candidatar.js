import styled from "styled-components"
import { StyledBasePage } from "../styles/style-pages"


export default function PageCandidatar(props) {
    const renderedOptions = props.listaViagens.map((option) => {
        return(

            <option key={option.id} value={option.id}>{option.name}</option>

        )
    })


    console.log("mapa2", renderedOptions)

    return (

        <StyledBasePage>
            <form>
                <select defaultValue="" onChange={console.log("mudou")}>
                    <option value="" disabled>Escolha uma Viagem</option>
                    {renderedOptions}
                </select>

                <input 
                    value=""
                    placeholder="Nome"
                />

                <input 
                    value=""
                    placeholder="Nome"
                />

                <input 
                    value=""
                    placeholder="Nome"
                />

                
            </form>
            {/* "Form de CANDIDATAR" */}


        </StyledBasePage>
    )
}