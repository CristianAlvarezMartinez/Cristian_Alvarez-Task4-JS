// CARDS DINAMICAS
const cardsContainer = document.getElementById('cards-container')
let arrayEvento = data.eventos
let fecha = data.fechaActual
fecha = parseInt(fecha.replace(/-/g, '')) //20220101

const filtroEventos = (array, fecha) => {
    let ux =array.filter(i => parseInt(i.date.replace(/-/g, '')) > fecha)
    let template = ux.reduce((acu, acc) => {
        return acu + `<div class="card">
                        <img src="${acc.image}">
                        <div class="card-body text-center">
                        <h5 class="card-title">${acc.name}</h5>
                        <p class="card-text">${acc.description}</p>
                        <div class="priceBtn gap-4">
                            <p class="m-0">Price: $${acc.price}</p>
                            <a href="../pages/details.html?id=${acc.name}" class="btn btn-primary">More Info</a>
                        </div>
                        </div>
                      </div>
`
    },'')
    cardsContainer.innerHTML = template
}
filtroEventos(arrayEvento, fecha)


// CHECKBOX DINAMICOS

const categories = arrayEvento.map(evento => evento.category)
const setCategories = new Set(categories)
const arrayCategories = Array.from(setCategories)

const checkboxContainer = document.getElementById('checkbox-container')
const printCategories = array => {
  let template = array.reduce((acu, acc) => {
          return acu + `<div class="form-check checkboxs col-5 col-lg-4 col-xxl-1 d-flex justify-content-center gap-2 p-0">
                    <input class="form-check-input" type="checkbox" value="${acc}" id="flexCheckIndeterminate2">
                    <label class="form-check-label" for="flexCheckIndeterminate2">${acc}</label>
                  </div>`
  } ,'')
  checkboxContainer.innerHTML += template
}
printCategories(arrayCategories)