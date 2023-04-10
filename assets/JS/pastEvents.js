// CARDS DINAMICAS
const cardsContainer = document.getElementById('cardsContainer')
let arrayEventos = data.eventos
let fecha = data.fechaActual
fecha = parseInt(fecha.replace(/-/g, '')) //20220101
let eventosFiltrados = arrayEventos.filter(i => parseInt(i.date.replace(/-/g, '')) < fecha)



// CHECKBOX DINAMICOS
const categories = arrayEventos.map(evento => evento.category)
const setCategories = new Set(categories)
const arrayCategories = Array.from(setCategories)
const checkboxContainer = document.getElementById('checkbox-container')

// EJECUCIONES
printCategories(arrayCategories)
filtroEventos(arrayEventos,fecha)

// EVENTOS
checkboxContainer.addEventListener('change',()=>{
  let aux = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
  printCards(combinedFilter(aux, inputSearch.value))
})

const inputSearch = document.getElementById('inputSearch')
inputSearch.addEventListener('keyup',() => {
  printCards(filterByText(eventosFiltrados, inputSearch.value))
})

// FUNCIONES
function printCategories(array) {
  let template = array.reduce((acu, acc) => {
          return acu + `<div class="form-check checkboxs col-5 col-lg-4 col-xxl-1 d-flex justify-content-center gap-2 p-0">
                    <input class="form-check-input" type="checkbox" value="${acc.replace(/\s+/g, '')}" id="${acc.replace(/\s+/g, '')}">
                    <label class="form-check-label" for="${acc.replace(/\s+/g, '')}">${acc}</label>
                  </div>`
  } ,'')
  checkboxContainer.innerHTML += template
}

function printCards(array) {

  let template = array.reduce((acu, acc) => {
    return acu + `<div class="card">
                    <img src="${acc.image}" class="card-img-top" alt="imgCard">
                    <div class="card-body text-center">
                    <h5 class="card-title">${acc.name}</h5>
                    <p class="card-text">${acc.description}</p>
                    <div class="priceBtn mhere gap-4">
                    <p class="m-0">Price: $${acc.price}</p>
                    <a href="./assets/pages/details.html?id=${acc.name}" class="btn btn-primary">More Info</a>
                    </div>
                    </div>
                  </div>`
  },'')
  cardsContainer.innerHTML = template
}

function filtroEventos(array, fecha) {
  let ux = array.filter(i => parseInt(i.date.replace(/-/g, '')) < fecha)
  let template = ux.reduce((acu, acc) => {
      return acu + `<div class="card">
                      <img src="${acc.image}">
                      <div class="card-body text-center">
                      <h5 class="card-title">${acc.name}</h5>
                      <p class="card-text">${acc.description}</p>
                      <div class="priceBtn gap-4">
                          <p class="m-0">Price: $${acc.price}</p>
                          <a href="../pages/details.html?id=${acc.name}" class="btn btn-primary">More Info</a>
                      </div>
                      </div>
                   </div>`
  },'')
  cardsContainer.innerHTML = template
}

function filterByText(array, txt) {
  return array.filter(evento => evento.name.toLowerCase().includes(txt.toLowerCase()))
}

function filterByCategory(array) {
  let arrayFilter = [];
  array.reduce((acu, acc)=>{
    eventosFiltrados.filter(evento => {
      if(evento.category.replace(/\s+/g, '') === acc.id){
        arrayFilter.push(evento)
      }
    })
  },'')
  if(arrayFilter.length == 0){
    return eventosFiltrados
  }
  return arrayFilter
}

function combinedFilter(array, txt) {
    const filteredByCategory = filterByCategory(array)
    const filteredByText = filterByText(filteredByCategory, txt)
    return filteredByText
  
}