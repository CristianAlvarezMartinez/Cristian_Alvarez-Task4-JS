const eventsArray = data.eventos
let fecha = data.fechaActual
fecha = parseInt(fecha.replace(/-/g, '')) //20220101
const pastEvents = eventsArray.filter(i => parseInt(i.date.replace(/-/g, '')) < fecha)
const tBodyContainer = document.getElementById('tbody-table1')

// Formula Porcentaje: 
// (assistance/capacity*100)

// ASIGNACIONES 
const eventsWithPorcentaje =  pastEvents.map(evento => {
    return {...evento, porcentaje: parseFloat(((evento.assistance/evento.capacity)*100).toFixed(2))}
})

const highestPorc = maxPorcentaje(eventsWithPorcentaje)
const lowerPorc = minPorcentaje(eventsWithPorcentaje)
const largerCapac = maxCapacity(eventsWithPorcentaje)

// EJECUCIONES
print(highestPorc, lowerPorc, largerCapac, tBodyContainer)


// FUNCTIONS

function maxPorcentaje(array) {
    let porcentaje = 0
    let event
    
    array.forEach(ev => {
      if (ev.porcentaje > porcentaje) {
        porcentaje = ev.porcentaje
        event = ev
      }
    });
    
    return event;
  }
  
function minPorcentaje(array) {
    let porcentaje = Infinity
    let event
    
    array.forEach(ev => {
      if (ev.porcentaje < porcentaje) {
        porcentaje = ev.porcentaje
        event = ev
      }
    });
    
    return event;
}

function maxCapacity(array) {
    let capacity = 0
    let event
    
    array.forEach(ev => {
      if (ev.capacity > capacity) {
        capacity = ev.capacity
        event = ev
      }
    });
    
    return event;
}

function print(objMax, objMin, objMaxCapacity, container) {
    let template = `<tr class="">
                        <td>${objMax.name} ${objMax.porcentaje}%</td>
                        <td>${objMin.name} ${objMin.porcentaje}%</td>
                        <td>${objMaxCapacity.name} ${objMaxCapacity.capacity}</td>
                    </tr>`
    container.innerHTML += template
}

