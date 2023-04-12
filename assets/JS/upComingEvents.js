import {filtroEventos, printCategories, PrintCardsGeneral, combinedFilter} from '../funcionesJS/funciones.js'

// CARDS DINAMICAS
const cardsContainer = document.getElementById('cards-container')
const inputSearch = document.getElementById('inputSearch')
const checkboxContainer = document.getElementById('checkbox-container')
let arrayEventos;
let fecha;
let eventosFiltrados;
fetch('https://mindhub-xj03.onrender.com/api/amazing')
  .then(responde => responde.json().then(data => {
    arrayEventos = data.events
    fecha = parseInt(data.currentDate.replaceAll('-', '')) 
    eventosFiltrados = filtroEventos(arrayEventos, fecha)
    PrintCardsGeneral(eventosFiltrados, cardsContainer)
    printCategories(eventosFiltrados, checkboxContainer)
    
  }))
  .catch(error => console.log(error))

  function eventFunction() {
    let aux = [...document.querySelectorAll('input[type="checkbox"]:checked')]
    let filtro = combinedFilter(aux, inputSearch.value, eventosFiltrados)
    printCards(filtro, cardsContainer)
  }

checkboxContainer.addEventListener('change', eventFunction)

inputSearch.addEventListener('keyup', eventFunction)