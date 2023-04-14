import {filtroEventosPA, filtroEventos, maxPorcentaje, minPorcentaje, maxCapacity, printTB1, eventsWithPorcen, onlyCategories, printTB2} from '../funcionesJS/funciones.js'

const tBodyContainer = document.getElementById('tbody-table1')
const tBodyContainer2 = document.getElementById('tbody-table2')
const tBodyContainer3 = document.getElementById('tbody-table3')
let eventsArray;
let fecha;

fetch('https://mindhub-xj03.onrender.com/api/amazing')
  .then(response => response.json().then(data =>{
    eventsArray = data.events
    fecha = parseInt(data.currentDate.replaceAll('-', ''))
    const pastEvents = filtroEventosPA(eventsArray, fecha)
    const upCommingEvents = filtroEventos(eventsArray, fecha)
    
// Array de eventos con propiedad *porcentaje*
   const  eventsWithPorcentaje =  eventsWithPorcen(eventsArray)
// Asignaiones
    const highestPorc = maxPorcentaje(eventsWithPorcentaje)
    const lowerPorc = minPorcentaje(eventsWithPorcentaje)
    const largerCapac = maxCapacity(eventsWithPorcentaje)
// Array de solo las categorias
    const arrayOnlyCategories = onlyCategories(eventsArray)
//Ejecuciones
    printTB1(highestPorc, lowerPorc, largerCapac, tBodyContainer)
    printTB2(onlyCategories(upCommingEvents), upCommingEvents, tBodyContainer2, 'estimate')
    printTB2(arrayOnlyCategories, pastEvents, tBodyContainer3, 'assistance')
    console.log(upCommingEvents)

  }))
