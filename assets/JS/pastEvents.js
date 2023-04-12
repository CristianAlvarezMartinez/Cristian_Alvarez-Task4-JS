import {printCategories, printCards, filtroEventosPA, combinedFilter} from '../funcionesJS/funciones.js'

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
printCategories(arrayCategories, checkboxContainer)
filtroEventosPA(arrayEventos,fecha, cardsContainer)

// EVENTOS
checkboxContainer.addEventListener('change',()=>{
  let aux = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
  printCards(combinedFilter(aux, inputSearch.value, eventosFiltrados), cardsContainer)
})

const inputSearch = document.getElementById('inputSearch')
inputSearch.addEventListener('keyup',() => {
  let aux = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
  printCards(combinedFilter(aux, inputSearch.value, eventosFiltrados), cardsContainer)
})


