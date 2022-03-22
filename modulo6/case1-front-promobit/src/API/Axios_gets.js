import axios from "axios"
import { API_KEY } from "../Constants/API_KEY"
import { URL_BASE } from "../Constants/URL_BASE"


export const getPopularVideos = (set_data) => {
    const url = `${URL_BASE}popular?${API_KEY}&language=pt-BR&page=1`

    axios.get(url)
        .then((resp) => {
            console.log(resp.data)
        })
        .catch((error) => {
            console.log(error)
        })
}