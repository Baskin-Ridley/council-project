
const calendar = document.getElementById('calendar');
const newEventPopup = document.getElementById('newEventPopup');
const deleteEventPopup = document.getElementById('deleteEventPopup');
const volunteerEventPopup = document.getElementById('volunteerEventPopup');
const popup = document.getElementById('popup');
const popupShadow = document.getElementById('popupShadow');
const eventTitleInput = document.getElementById('eventTitleInput');
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const isAdmin = window.localStorage.getItem("permission") ? true : false
console.log(isAdmin)
const isLoggedIn = window.localStorage.getItem("token") ? true : false

let nav = 0;
let clicked = null;




////////////     POP-UP WINDOWS FUNCTIONS     ////////////////////////

function adminPopup(date) {
    clicked = date;

    const eventForDay = events.find(e => e.date === clicked);

    if (eventForDay) {
        document.getElementById('eventText').innerText = eventForDay.title;
        deleteEventPopup.style.display = 'block';
    } else {
        newEventPopup.style.display = 'block';
    }

    popupShadow.style.display = 'block';
}

function volunteerPopup(date) {
    clicked = date;

    const eventForDay = events.find(e => e.date === clicked);

    if (eventForDay) {
        document.getElementById('evText').innerText = eventForDay.title;
        volunteerEventPopup.style.display = 'block';
        popupShadow.style.display = 'block';
    }
}

function showPopup(date) {
    clicked = date;
    const eventForDay = events.find(e => e.date === clicked);

    if (eventForDay) {
        popup.style.display = 'block';
        popupShadow.style.display = 'block';
    }
}

function closePopup() {
    eventTitleInput.classList.remove('error');
    newEventPopup.style.display = 'none';
    deleteEventPopup.style.display = 'none';
    volunteerEventPopup.style.display = 'none';
    popup.style.display = 'none';
    popupShadow.style.display = 'none';
    eventTitleInput.value = '';
    clicked = null;
    renderCalendar();
}

//////////////////////////////// CHECK EVENTS //////////////////////////////////////

async function checkEvents() {
    const response = await fetch("http://localhost:3000/events")

    if (response.status == 200) {
        const events = await response.json();

        return events[0]

    } else {
        let events = []
    }
}



let events = checkEvents().then(function (result) {
    return result;
})

console.log(events.then(e => { console.log(e) }))



// localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];


//////////////////////////    DISPLAY CALENDAR      /////////////////////////////////////    

function renderCalendar() {
    const dt = new Date();


    if (nav !== 0) {
        dt.setMonth(new Date().getMonth() + nav);
    }

    const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();

    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const months = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];

    const emptyDays = firstDayOfMonth.getDay();
    // console.log(emptyDays)

    document.getElementById('monthDisplay').innerText = `${months[month]} ${year}`;

    calendar.innerHTML = '';

    for (let i = 1; i <= emptyDays + daysInMonth; i++) {
        const dayTile = document.createElement('div');
        dayTile.classList.add('day');


        const tileDate = `${year}-${month + 1}-${i - emptyDays}`

        if (i > emptyDays) {
            dayTile.innerText = i - emptyDays;
            const eventForDay = events.find(e => e.date === tileDate);

            if (i - emptyDays === day && nav === 0) {
                dayTile.id = 'currentDay';
            }

            if (eventForDay) {
                const eventDiv = document.createElement('div');
                eventDiv.classList.add('event');
                eventDiv.innerText = eventForDay.title;
                dayTile.appendChild(eventDiv);
                dayTile.classList.remove('day');
                dayTile.classList.add('eventDay');
            }

            if (isLoggedIn && isAdmin) {
                dayTile.addEventListener('click', () => adminPopup(tileDate));
            } else if (isLoggedIn) {
                dayTile.addEventListener('click', () => volunteerPopup(tileDate));

            } else {
                dayTile.addEventListener('click', () => showPopup(tileDate));
            }


        } else {
            dayTile.classList.add('empty');
        }

        calendar.appendChild(dayTile);
    }
}

///////////////     ACTION BUTTONS       ///////////////////////////

async function saveEvent() {
    if (eventTitleInput.value) {
        eventTitleInput.classList.remove('error');

        const options = {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                activity_date: clicked,
                title: eventTitleInput.value,
            })
        }

        const result = await fetch("http://localhost:3000/events", options);

        if (result.status == 201) {
            closePopup();
        }


    } else {
        eventTitleInput.classList.add('error');
    }
}

//    async function deleteEvent() {
//         const date= clicked;

//         const res = await fetch(`http://localhost:5002/events/${date}`, { method: "DELETE" });

//         if (res.status != 204) {
//             alert("Unable to delete event.")
//         } 

//         closePopup();

//     }

function deleteEvent() {
    events = events.filter(e => e.date !== clicked);
    localStorage.setItem('events', JSON.stringify(events));
    closePopup();
}

async function volunteer() {
    userToken = window.localStorage.getItem("token")
    const options = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            token: userToken,
        })
    }

    const result = await fetch("http://localhost:3000/volunteers", options);

    if (result.status == 201) {
        closePopup();
    } else {
        alert("You already volunteered for this event")
    }
}


function initButtons() {
    document.getElementById('nextButton').addEventListener('click', () => {
        nav++;
        renderCalendar();
    });

    document.getElementById('backButton').addEventListener('click', () => {
        nav--;
        renderCalendar();
    });

    document.getElementById('saveButton').addEventListener('click', saveEvent);
    document.getElementById('deleteButton').addEventListener('click', deleteEvent);
    document.getElementById('volunteerButton').addEventListener('click', volunteer);
    document.getElementById('closeButton').addEventListener('click', closePopup);
    document.getElementById('volCancelButton').addEventListener('click', closePopup);
    document.getElementById('closePopButton').addEventListener('click', closePopup);
    document.getElementById('cancelButton').addEventListener('click', closePopup);
}

initButtons();
renderCalendar();

