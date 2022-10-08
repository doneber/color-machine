const btnGen = document.querySelector('#color-generator')
const color = document.querySelector('#color')
const colorCode = document.querySelector('#color-code')

function randomHexNumber(){
  const num = parseInt(Math.random()*16)
  if (num < 10 )
    return num
  return String.fromCharCode(num + 55 )
}

function randonHexColor(){
  let nuevoColor = '#'
  for (let i = 0; i<6; i++){
    nuevoColor = nuevoColor + randomHexNumber()
  }
  return nuevoColor
}

btnGen.addEventListener('click', ()=>{
  const newColor = randonHexColor()
  color.style.background = newColor
  colorCode.textContent = newColor
})