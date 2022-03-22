import { useState } from "react"
import { getPopularVideos } from "../../API/Axios_gets"



export const PageHome = () => {
    const [videosList, set_videosList] = useState()



    return(
        <div>
            HOME
            <button onClick={() => getPopularVideos(set_videosList)}>INFO</button>
        </div>
    )
}