const btnGen = document.querySelector('#color-generator')

const container = document.querySelector('.container')

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

let refNode = null
btnGen.addEventListener('click', ()=>{
  // Genera un nuevo color en HEX
  const newColor = randonHexColor()
  // Creando una seccion para el nuevo Color
  const nuevaSeccionColor = document.createElement('div')
  nuevaSeccionColor.classList.add('color-generated-section')
  nuevaSeccionColor.innerHTML = `
          <div class="color" style="background-color: ${newColor}"></div>
      <div class="color-code">${newColor}</div>
  `
  // El boton para copiar
    const btnCopiar = document.createElement('button')
    btnCopiar.textContent = "Copiar"
  // Le agregamos al boton en escuchador del evento Click 
  btnCopiar.addEventListener('click',()=>{
    const copyText = document.querySelector('#copy-text-container')
    copyText.innerHTML = "<span class='desaparecer'>Copiado!</span>"
     navigator.clipboard.writeText(newColor);
  })
  // Agregamos el boton a la seccion del Nuevo Color
  nuevaSeccionColor.appendChild(btnCopiar)
  
  // Agregando la nueva seccion del color al contenedor
  container.insertBefore(nuevaSeccionColor,refNode)
  refNode = nuevaSeccionColor
})
