import {printCategories, PrintCardsGeneral, filtroEventosPA, combinedFilter} from '../funcionesJS/funciones.js'

// CARDS DINAMICAS
const cardsContainer = document.getElementById('cardsContainer')
const checkboxContainer = document.getElementById('checkbox-container')
const inputSearch = document.getElementById('inputSearch')
let arrayEventos;
let fecha;
let eventosFiltrados;
// let arrayEventos = data.eventos
// let fecha = data.fechaActual
// fecha = parseInt(fecha.replace(/-/g, '')) //20220101
// let eventosFiltrados = arrayEventos.filter(i => parseInt(i.date.replace(/-/g, '')) < fecha)
fetch('https://mindhub-xj03.onrender.com/api/amazing')
  .then(response => response.json().then(data =>{
    arrayEventos = data.events
    fecha = parseInt(data.currentDate.replaceAll('-', ''))
    eventosFiltrados = filtroEventosPA(arrayEventos, fecha)
    PrintCardsGeneral(eventosFiltrados, cardsContainer)
    printCategories(arrayEventos, checkboxContainer)
  }))
  .catch(error => console.log(error))

function eventFunction() {
  let aux = [...document.querySelectorAll('input[type="checkbox"]:checked')]
  let filtro = combinedFilter(aux, inputSearch.value, eventosFiltrados)
  printCards(filtro, cardsContainer)
}

// EVENTS
checkboxContainer.addEventListener('change', eventFunction)
inputSearch.addEventListener('keyup', eventFunction)


