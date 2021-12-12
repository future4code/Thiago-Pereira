import axios from "axios";
import { useHistory } from "react-router-dom";

export const myName = "thiago-daurizio-carver"
export const baseURL = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/"


export const getTrips = (set_tripsList) => {
    const url = `${baseURL}${myName}/trips`

    axios.get(url)
        .then((resp) => {
            set_tripsList(resp.data.trips)
        })
        .catch((error) => {
            alert(error.response.data.message)
        })
}


export const getTripDetails = (id, set_tripDetails) => {
    const token = localStorage.getItem("token")
    const url = `${baseURL}${myName}/trip/${id}`

    axios.get(url,
            { headers: { auth: token } })
        .then((resp) => {
            set_tripDetails(resp.data.trip)
        })
        .catch((error) => {
            alert(error.responde.data.message)
        })
}


export const postCreateTrip = (body) => {
    const token = localStorage.getItem("token")
    const url = `${baseURL}${myName}/trips`

    axios.post(url, body, 
            { headers: { auth: token }})
        .then((resp) => {
            alert('Esta Missão foi criada.')
        })
        .catch((error) => {
            alert(error.response.data.message)
        })
}


export const postApplication = (selectedTrip, body) => {
    const url = `${baseURL}${myName}/trips/${selectedTrip}/apply`

    axios.post(url, body)
        .then((resp) => {
            alert('Suas inscrição a esta missão foi enviada, aguarde sobre a decisão.')
        })
        .catch((error) => {
            alert(error.response.data.message)
        })
}


export const deleteTrip = (id) => {
    const token = localStorage.getItem("token")
    const url = `${baseURL}${myName}/trips/${id}`

    axios.delete(url, 
            { headers: { auth: token }})
        .then((resp) => {
            alert('Missão deletada!')
        })
        .catch((error) => {
            alert(error.response.data.message)
        })
}


export const decideCandidate = (tripId, candidateId, decision, getTripDetails, set_tripDetail) => {
    const token = localStorage.getItem("token")
    const url = `${baseURL}${myName}/trips/${tripId}/candidates/${candidateId}/decide`
    const body = { approve: decision }

    axios.put(url, body, 
            { headers: { auth: token }})
        .then((resp) => {
            let alertText = decision ? "aceito(a)" : "reprovado(a)"
            getTripDetails(tripId, set_tripDetail)
            alert(`Candidato(a) foi ${alertText} para esta missão!`)
        })
        .catch((error) => {
            alert(error.response.data.message)
        })
}


export const postLogin = (email, password) => {
    const url = `${baseURL}${myName}/login`
    const body = { email: email, password: password}

    axios.post(url, body)
        .then((resp) => {
            localStorage.setItem("token", resp.data.token)
            localStorage.setItem("success", resp.data.token)
            alert("Login efetuado, boas vindas!")
        })
        .catch((error) => {
            alert(error.response.data.message)
        })
}