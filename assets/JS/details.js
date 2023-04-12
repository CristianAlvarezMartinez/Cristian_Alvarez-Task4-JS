const cardContainer = document.getElementById('base-container')
let locationSearch = location.search
let searchObject = new URLSearchParams(locationSearch)
const id = searchObject.get('id')
let eventsArray;

fetch('https://mindhub-xj03.onrender.com/api/amazing')
    .then(response => response.json().then(data => {
        eventsArray = data.events
        let eventFound = eventsArray.find(event => event.name == id)
        print(eventFound, cardContainer)
    }))
    .catch(error => console.log(error))

function print(event, container) {
    let template =  `<div class="detail-contenedor ">
                        <img class="" src="${event.image}" alt="imgDetail">
                        <div class="details">
                            <h1 class="text-center">Events Details</h1>
                            <ul>
                                <li><b>Event Name: </b>${event.name}</li>
                                <li><b>Date: </b>${event.date}</li>
                                <li><b>Description: </b>${event.description}</li>
                                <li><b>Category: </b>${event.category}</li>
                                <li><b>Place: </b>${event.place}</li>
                                <li><b>Capacity: </b>${event.capacity}</li>
                                <li><b>Assistance: </b>${event.assistance}</li>
                                <li><b>Price: </b>$${event.price}</li>
                            </ul>
                        </div>
                    </div>
`
container.innerHTML = template
}

