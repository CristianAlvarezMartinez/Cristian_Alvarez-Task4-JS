// GLOBAL FUNCTIONS
export function printCategories(array, container) {
  let categories = [...new Set(array.map(evento => evento.category))]
  let template = categories.reduce((acu, acc) => {
    return acu + `<div class="form-check checkboxs col-5 col-lg-4 col-xxl-1 d-flex justify-content-center gap-2 p-0">
                    <label class="form-check-label">
                      <input class="form-check-input" type="checkbox" value="${acc}"> ${acc}
                    </label>
                  </div>`
} ,'')
    container.innerHTML += template
  } 

export function PrintCardsGeneral(array, container) {
  let template = array.reduce((acu, acc) => {
    return acu + `<div class="card">
                    <img src="${acc.image}" class="card-img-top" alt="imgCard">
                    <div class="card-body text-center">
                    <h5 class="card-title">${acc.name}</h5>
                    <p class="card-text">${acc.description}</p>
                    <div class="priceBtn mhere gap-4">
                    <p class="m-0">Price: $${acc.price}</p>
                    <a href="../pages/details.html?id=${acc.name}" class="btn btn-primary">More Info</a>
                    </div>
                    </div>
                  </div>`
  },'')
  container.innerHTML = template
}

export function filterByText(array, txt) {
    return array.filter(evento => evento.name.toLowerCase().includes(txt.toLowerCase()))
  }

export function filterByCategory(array, arrayToFilter) {
    let arrayFilter = [];
    array.reduce((acu, acc)=>{
      arrayToFilter.filter(evento => {
        if(evento.category === acc.value){
          arrayFilter.push(evento)
        }
      })
    },'')
    if(arrayFilter.length == 0){
      return arrayToFilter
    }
    return arrayFilter
  }
  
export function combinedFilter(array, txt, arrayToFilter) { 
      const filteredByCategory = filterByCategory(array, arrayToFilter)
      const filteredByText = filterByText(filteredByCategory, txt)
      return filteredByText
    
  }


// FUNCTION INDEX
export function printCards(array, container) {
  let template = array.reduce((acu, acc) => {
    return acu + `<div class="card">
                    <img src="${acc.image}" class="card-img-top" alt="imgCard">
                    <div class="card-body text-center">
                    <h5 class="card-title">${acc.name}</h5>
                    <p class="card-text">${acc.description}</p>
                    <div class="priceBtn mhere gap-4">
                    <p class="m-0">Price: $${acc.price}</p>
                    <a href="./assets/./pages/details.html?id=${acc.name}" class="btn btn-primary">More Info</a>
                    </div>
                    </div>
                  </div>`
  },'')
  container.innerHTML = template
}

// UPCOMMINGEVENTS FUNCTIONS
export function filtroEventos(array, fecha){
    let fe = array.filter(i => parseInt(i.date.replaceAll('-', '')) > fecha)
    return fe 
  }

// PASTEVENTS FUNCTIONS
export function filtroEventosPA(array, fecha) {
    let ef = array.filter(i => parseInt(i.date.replaceAll('-','')) < fecha)
    return ef
  }

  // STATS FUNCTION

export function maxPorcentaje(array) {
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
  
export function minPorcentaje(array) {
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

export function maxCapacity(array) {
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

export function printTB1(objMax, objMin, objMaxCapacity, container) {
    let template = `<tr class="">
                        <td>${objMax.name} ${objMax.porcentaje}%</td>
                        <td>${objMin.name} ${objMin.porcentaje}%</td>
                        <td>${objMaxCapacity.name} ${objMaxCapacity.capacity}</td>
                    </tr>`
    container.innerHTML += template
}

export function ucReveAndAtten (ucArray){
  return ucArray.map(event => {
    return {...event, revenues: event.price*event.estimate,
                      attendance: (event.estimate / event.capacity)*100 }
  })
}

export function pastReveAndAtten (pastArray){
  return pastArray.map(event => {
    return {...event, revenues: event.price*event.estimate,
                      attendance: parseFloat(((event.assistance / event.capacity)*100).toFixed(2))}
  })
}

export function eventsWithPorcen(array) {
  let aux = array.map(evento => {
    return {...evento, porcentaje: parseFloat(((evento.assistance/evento.capacity)*100).toFixed(2))}
  })
  return aux
}