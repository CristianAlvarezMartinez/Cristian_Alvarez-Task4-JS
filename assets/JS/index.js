// REFERENCIAS
const cardsContainer = document.getElementById('cards-container')
const checkboxContainer = document.getElementById('checkbox-container')
const input = document.getElementById('inputSearch')
const arrayEventos = data.eventos;
let arrayElementos
// CHECKBOX DINAMICOS RECURSOS

const categories = arrayEventos.map(evento => evento.category)
const setCategories = new Set(categories)
const arrayCategories = Array.from(setCategories)

// EJECUCIONES
printCards(arrayEventos)
printCategories(arrayCategories)


// EVENTOS

  checkboxContainer.addEventListener('change', () =>{
    let check = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
    check.forEach(element => {
      while (element.checked == true) {
        filterByCategory(arrayEventos, element)
      }
    })
  })


const inputSearch = document.getElementById('inputSearch')
inputSearch.addEventListener('keyup',() => {
  printCards(combinedFilter(arrayEventos, inputSearch, inputSearch.value))
})



// FUNCIONES
function template(array) {
 return array.reduce((acu, acc) => {
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
}

function printCategories(array) {
  if(array.length == 0){
    checkboxContainer.innerHTML = `<h1>NO HAY ELEMENTOS PARA MOSTRAR</h1>`
  }
  let template = array.reduce((acu, acc) => {
          return acu + `<div class="form-check checkboxs col-5 col-lg-4 col-xxl-1 d-flex justify-content-center gap-2 p-0">
                    <input class="form-check-input" type="checkbox" value="${acc.replace(/\s+/g, '')}" id="${acc.replace(/\s+/g, '')}">
                    <label class="form-check-label" for="${acc.replace(/\s+/g, '')}">${acc}</label>
                  </div>`
  } ,'')
  checkboxContainer.innerHTML += template
}

function printCards(array) {
  if(array.length == 0){
    cardsContainer.innerHTML = `<h1 class="text-center text-light">THERE'S NO FOUND</h1>`
  }else {
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

  
}

function filterByText(array, txt) {
  return array.filter(evento => evento.name.toLowerCase().includes(txt.toLowerCase()) || evento.description.toLowerCase().includes(txt.toLowerCase()))
}

function filterByCategory(array, element) {
  if (element.check == true) {
    return array.filter(evento => evento.category.replace(/\s+/g, '') === element.id)  
  }
  return array
}

function combinedFilter(array, element, txt) {
  const filteredByCategory = filterByCategory(array, element)
  const filteredByText = filterByText(filteredByCategory, txt)
  return filteredByText
}