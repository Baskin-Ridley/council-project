const eventFeed = document.getElementById('events-feed');
const addEventButton = document.getElementById('add-event-btn');
const addEventForm = document.getElementById('add-event-form');
const eventForm = addEventForm.querySelector('form');

// fetch events from controller & display
function fetchEvents() {
    fetch('/events')
    .then(response => response.json())
    .then(events => {
        // clear 
        eventFeed.textContent='';


    })
}

// show form when add event btn is clicked
function showAddEventForm() {
    addEventForm.classList.remove('hidden');
}

addEventButton.addEventListener('click', showAddEventForm);

fetchEvents();