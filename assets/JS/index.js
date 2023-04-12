import {printCategories, printCards, combinedFilter} from '../funcionesJS/funciones.js'

// REFERENCIAS
const inputSearch = document.getElementById('inputSearch')
const cardsContainer = document.getElementById('cards-container')
const checkboxContainer = document.getElementById('checkbox-container')
let arrayEventos;
let fecha;


// PETICION A LA IP
fetch('https://mindhub-xj03.onrender.com/api/amazing')
  .then(response => response.json().then(data => {
    arrayEventos = data.events
    printCards(arrayEventos, cardsContainer)
    printCategories(arrayEventos, checkboxContainer)
  }))
  .catch(error => console.log(error))
  

function eventFunction() {
  let aux = [...document.querySelectorAll('input[type="checkbox"]:checked')]
  printCards(combinedFilter(aux, inputSearch.value, arrayEventos), cardsContainer)
}

checkboxContainer.addEventListener('change', eventFunction)

inputSearch.addEventListener('keyup', eventFunction)