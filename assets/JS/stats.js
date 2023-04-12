import {filtroEventosPA, maxPorcentaje, minPorcentaje, maxCapacity, print} from '../funcionesJS/funciones.js'
// const eventsArray = data.eventos
// let fecha = data.fechaActual
// // fecha = parseInt(fecha.replace(/-/g, '')) //20220101
const tBodyContainer = document.getElementById('tbody-table1')
let eventsArray;
let pastEvents;
let fecha;
let eventsWithPorcentaje;

fetch('https://mindhub-xj03.onrender.com/api/amazing')
  .then(response => response.json().then(data =>{
    eventsArray = data.events
    fecha = parseInt(data.currentDate.replaceAll('-', ''))
    pastEvents = filtroEventosPA(eventsArray, fecha)
    eventsWithPorcentaje =  pastEvents.map(evento => {
      return {...evento, porcentaje: parseFloat(((evento.assistance/evento.capacity)*100).toFixed(2))}
    })
    let highestPorc = maxPorcentaje(eventsWithPorcentaje)
    let lowerPorc = minPorcentaje(eventsWithPorcentaje)
    let largerCapac = maxCapacity(eventsWithPorcentaje)
    print(highestPorc, lowerPorc, largerCapac, tBodyContainer)
  }))
  .catch(error => console.log(error))