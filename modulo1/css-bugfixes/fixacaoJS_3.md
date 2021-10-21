function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
const mediaEmpo = (ex*1 + p1*2 + p2*3) / (1+2+3)
  if(mediaEmpo >= 9) {
      let nota = "A"
  } else if (mediaEmpo < 9 && mediaEmpo >= 7.5){
    let nota = "B"
  } else if (mediaEmpo < 7.5 && mediaEmpo >= 6) {
    let nota = "C"
  } else if (mediaEmpo < 6) {
    let nota = "D"
}
  return nota
}