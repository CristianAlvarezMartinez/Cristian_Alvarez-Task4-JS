// REFERENCIAS
const cardsContainer = document.getElementById('cards-container')
const checkboxContainer = document.getElementById('checkbox-container')
const input = document.getElementById('inputSearch')
const arrayEventos = data.eventos;

// CHECKBOX DINAMICOS RECURSOS

const categories = arrayEventos.map(evento => evento.category)
const setCategories = new Set(categories)
const arrayCategories = Array.from(setCategories)

// EJECUCIONES
printCards(arrayEventos)
printCategories(arrayCategories)

// EVENTOS

checkboxContainer.addEventListener('change',()=>{
  let aux = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
  printCards(combinedFilter(aux, inputSearch.value))
})

const inputSearch = document.getElementById('inputSearch')
inputSearch.addEventListener('keyup',() => {
  printCards(filterByText(arrayEventos, inputSearch.value))
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

function filterByText(array, txt) {
  return array.filter(evento => evento.name.toLowerCase().includes(txt.toLowerCase()))
}

function filterByCategory(array) {
  let arrayFilter = [];
  array.reduce((acu, acc)=>{
    arrayEventos.filter(evento => {
      if(evento.category.replace(/\s+/g, '') === acc.id){
        arrayFilter.push(evento)
      }
    })
  },'')
  if(arrayFilter.length == 0){
    return arrayEventos
  }
  return arrayFilter
}

function combinedFilter(array, txt) {
    const filteredByCategory = filterByCategory(array)
    const filteredByText = filterByText(filteredByCategory, txt)
    return filteredByText
  
}