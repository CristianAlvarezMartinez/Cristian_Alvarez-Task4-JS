// Llamar al elemento contedor desde el HTML
const cardsContainer = document.getElementById('cards-container')

// Definir una variable para la ruta del array donde esta la data de los eventos
const arrayEventos = data.eventos;

// Iterar en arrayEventos para concatenar a la funcion creadora de las cards
let cadenaEventos = ''
for (let unEvento of arrayEventos) {
  cadenaEventos += cardCreator(unEvento)
}

// Funcion que asigna la data necesaria en las cards mediante el parametro iterado en el for
function cardCreator(unEvento) {
  return `<div class="card">
  <img src="${unEvento.image}" class="card-img-top" alt="imgCard">
  <div class="card-body text-center">
  <h5 class="card-title">${unEvento.name}</h5>
  <p class="card-text">${unEvento.description}</p>
  <div class="priceBtn mhere gap-4">
  <p class="m-0">Price: $${unEvento.price}</p>
  <a href="./assets/pages/details.html" class="btn btn-primary">More Info</a>
  </div>
  </div>
  </div>
  `
}

// Envio de las cards a la vista mediante innerHTML
cardsContainer.innerHTML = cadenaEventos



console.log(cadenaEventos)

