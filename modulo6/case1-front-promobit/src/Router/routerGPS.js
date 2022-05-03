export const changePage = (history, path, id) => {
    if(id !== undefined){
        history.push(`${path}/${id}`)
    } else{
        history.push(`${path}`)
    }
}