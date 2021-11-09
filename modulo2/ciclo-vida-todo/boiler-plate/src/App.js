import React from 'react'
import styled from 'styled-components'
import { createDocumentRegistry, isGetAccessorDeclaration } from 'typescript'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [
        // {id: Date.now(), texto: "acordar", completa: false},
        // {id: Date.now(), texto: "estudar", completa: true},
      ],
      inputValue: '',
      filtro: ''
    }

  componentDidUpdate() {
    localStorage.setItem("tarefas", this.state.tarefas)
  };

  // não sei por que algum bug na função abaixo deixa uma "tarefa fantasma" no site.
  componentDidMount() {
    const listaLocalStorageLista = localStorage.getItem("tarefas")
      this.setState({
        tarefas: [{listaLocalStorageLista}]
      });
  }

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value })
  }

  criaTarefa = () => {
    const tarefaCriada = [...this.state.tarefas]
    tarefaCriada.push({
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false,
    })
    
    this.setState({
      tarefas: tarefaCriada
    })
  }

  selectTarefa = (id) => {
    const novaListaDeTarefas = this.state.tarefas.map(tarefa => {
      if (id === tarefa.id) {
        const tarefaAlteranada = {...tarefa, completa: !tarefa.completa}
        return tarefaAlteranada
      }
      return tarefa
    })

    this.setState({ tarefas: novaListaDeTarefas })
  }

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value })

  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
