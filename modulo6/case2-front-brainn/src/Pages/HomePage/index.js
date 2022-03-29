import { useEffect, useState } from "react"

import { getLotos, getNumbers, getResults } from "../../API/getResults"
import { timerPicker } from "../../Utilities/timerPicker"
import { StyledNumbersBall, StyledPageContainer } from "./style"


export const PageHome = () => {
    const [actualSelected, set_actualSelected] = useState({id: 0, nome: "MEGA-SENA"})
    const [selectLoto, set_selectLoto] = useState([])

    const [selectLotoTypes, set_selectLogoTypes] = useState([])
    const [lotoNumbers, set_lotoNumbers] = useState([])



    useEffect(() => {
        getLotos(set_selectLoto)
        getResults('/loterias-concursos', set_selectLogoTypes)
    }, [actualSelected])

    useEffect(() => {
        selectLotoTypes.filter((item) => {
            if(item.loteriaId === actualSelected.id){
                getNumbers('/concursos/', set_lotoNumbers, item.concursoId)
            }
        })
    }, [selectLotoTypes])


        const renderedSelect = selectLoto && selectLoto.map((item) => {
            return(
                <option key={item.id} value={item.id} name={item.name}>{item.nome.toUpperCase()}</option>
            )
        })

        const renderedNumbers = lotoNumbers && lotoNumbers.map((number) => {
            return(
                <StyledNumbersBall key={number}>
                    <p>{number}</p>
                </StyledNumbersBall>
            )
        })

        const onChangeSelect = (event) => {
            selectLoto.filter((item) =>{
                if(event.target.value === item.id.toString()){
                    set_actualSelected({id: item.id, nome: item.nome.toUpperCase()})
                }
            })
        }

    return(
        <StyledPageContainer color={actualSelected.id}>
            <div className="area-select">
                <select onChange={onChangeSelect}>
                    <option selected disabled>SELECIONE</option>
                    {renderedSelect}
                </select>

                    <h1><ion-icon name="flower-sharp"/> {actualSelected.nome}</h1>

                <div>
                    <h6> Concurso </h6>
                    <h4> {timerPicker('hour')}h{timerPicker('min')}min - {timerPicker('day')} </h4>
                </div>
            </div>

            <div className="area-results">
                <div className="area-results-balls">
                    {renderedNumbers}
                </div>

                <div>
                    <h5>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</h5>
                </div>
            </div>
        </StyledPageContainer>
    )
}