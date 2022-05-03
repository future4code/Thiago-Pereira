export const timerPicker = (info) => {

    const date = new Date()

    if(info === 'day'){
        return date.toISOString().split("T")[0].split('-').reverse().join('/')
    }
    
    if(info === 'hour'){
        return date.getHours()
    }

    if(info === 'min'){
        return date.getMinutes()
    }
}