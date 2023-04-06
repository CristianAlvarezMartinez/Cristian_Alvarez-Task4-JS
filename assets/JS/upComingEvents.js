// Traer el elemento contenedor desde el HTML
const cardsContainer = document.getElementById('cards-container')
// Definir en una variable la ruta de el array donde estan los objetos
let arrayEvento = data.eventos
// Defrinir en una variable la ruta de la fecha con la se va a categorizar los eventos
let fecha = data.fechaActual
// Convertir la fecha en un número y eliminar los guiones "-" para filtrar 
fecha = parseInt(fecha.replace(/-/g, ''))

/*Funcion que recibe como parametro el array con los eventos y los filtra dependiendo
si la fecha actual es menor a la fecha asignada al evento y definir que el evento esta por venir.
Los objetos que cumplen con esta condicion son pusheados a "eventosFiltrados".
Y al final la funcion retorna este array de eventos ya filtrados*/
function filtroEventos(arrayDeEventos) {
    let eventosFiltrados = []
    for (let evento of arrayDeEventos) {
        if (fecha < parseInt(evento.date.replace(/-/g, ''))) {
            eventosFiltrados.push(evento)
        }
    }
    return eventosFiltrados
}

//Asignamos lo que retorna la funcion a una variable para luego pasar este como parametro   
const eventos = filtroEventos(arrayEvento)

/*Esta funcion recibe como parametro un objeto y crea los elementos de la card asignandoles
por medio de las rutas del objeto lo necesario para armar la card */
function elementCreator(evento) {
    return `<div class="card">
                    <img src="${evento.image}">
                    <div class="card-body text-center">
                    <h5 class="card-title">${evento.name}</h5>
                    <p class="card-text">${evento.description}</p>
                    <div class="priceBtn gap-4">
                        <p class="m-0">Price: $${evento.price}</p>
                        <a href="../pages/details.html" class="btn btn-primary">More Info</a>
                    </div>
                    </div>
                </div>
    `
}

/*Esta funcion recibe como parametro el array de objetos filtrados y los pasa por la funcion "ElmentCreator()" para luego asignaros a el array template
el cual es retornado por la funcion */
function cardCreator(filtrados) {
    let template = []
    for (eventoListo of filtrados) {
        template += elementCreator(eventoListo)
    }
    return template
}

//Enviamos las card ya creadas a la vista por medio de un innerHTML al contenerdor padre
cardsContainer.innerHTML = cardCreator(eventos)