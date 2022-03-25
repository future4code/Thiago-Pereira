export const convertDate = (date) => {
    let convertedDate = date.split('-').reverse()

    let dateDay = convertedDate[0]
    let dateMonth = convertedDate[1]
    let dateYear = convertedDate[2]

    let newMonth = dateMonth

    if(dateMonth ==="01"){
        newMonth = dateMonth.replace("01", "JAN")
    } else if (dateMonth ==="02"){
        newMonth = dateMonth.replace("02", "FEV")
    } else if (dateMonth ==="03"){
        newMonth = dateMonth.replace("03", "MAR")
    } else if (dateMonth ==="04"){
        newMonth = dateMonth.replace("04", "ABR")
    } else if (dateMonth ==="05"){
        newMonth = dateMonth.replace("05", "MAI")
    } else if (dateMonth ==="06"){
        newMonth = dateMonth.replace("06", "JUN")
    } else if (dateMonth ==="07"){
        newMonth = dateMonth.replace("07", "JUL")
    } else if (dateMonth ==="08"){
        newMonth = dateMonth.replace("08", "AGO")
    } else if (dateMonth ==="09"){
        newMonth = dateMonth.replace("09", "SET")
    } else if (dateMonth ==="10"){
        newMonth = dateMonth.replace("10", "OUT")
    } else if (dateMonth ==="11"){
        newMonth = dateMonth.replace("11", "NOV")
    } else if (dateMonth ==="12"){
        newMonth = dateMonth.replace("12", "DEZ")
    } else{
        newMonth = dateMonth
    }

    const newDate = []
    newDate.push(dateDay, newMonth, dateYear)

return newDate.join(' ')
}