import {filtroEventosPA, filtroEventos, maxPorcentaje, minPorcentaje, maxCapacity, printTB1, ucReveAndAtten, pastReveAndAtten, eventsWithPorcen} from '../funcionesJS/funciones.js'



const tBodyContainer = document.getElementById('tbody-table1')
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
//Array de upComingEvents con propiedades *revenues* y *attendance*
    const newUpComingEvens = ucReveAndAtten(upCommingEvents)
// Array de pastEvents con propiedades *revenues* y *attendace*
    const newPastEvents = pastReveAndAtten(pastEvents)
//Ejecuciones
    printTB1(highestPorc, lowerPorc, largerCapac, tBodyContainer)


    console.log(newUpComingEvens, newPastEvents)



  }))
  .catch(error => console.log(error))


