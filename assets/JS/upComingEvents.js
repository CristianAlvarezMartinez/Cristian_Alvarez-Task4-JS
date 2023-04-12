import {filtroEventos, printCategories, printCards, combinedFilter} from '../funcionesJS/funciones.js'

// CARDS DINAMICAS
const cardsContainer = document.getElementById('cards-container')
const search = document.getElementById('inputSearch')
const checkboxContainer = document.getElementById('checkbox-container')
let arrayEventos = data.eventos
let fecha = data.fechaActual
fecha = parseInt(fecha.replace(/-/g, '')) //20220101
let eventosFiltrados = arrayEventos.filter(i => parseInt(i.date.replace(/-/g, '')) > fecha)

// CHECKBOX DINAMICOS
const categories = arrayEventos.map(evento => evento.category)
const setCategories = new Set(categories)
const arrayCategories = Array.from(setCategories)


// EJECUCIONES
printCategories(arrayCategories, checkboxContainer)
filtroEventos(arrayEventos, fecha, cardsContainer)

// EVENTOS

checkboxContainer.addEventListener('change',()=>{
  let aux = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
  printCards(combinedFilter(aux, inputSearch.value, eventosFiltrados), cardsContainer)
})


search.addEventListener('keyup',() => {
  let aux = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
  printCards(combinedFilter(aux, inputSearch.value, eventosFiltrados), cardsContainer)
})