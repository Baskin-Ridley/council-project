let nav = 0;
let clicked = null;
// async function checkEvents() {
//     const response = await fetch("http://localhost:3000/events")
//     if (response.status == 200) {
//         const events = await response.json();
//     }else {
//         let events = []
//     }
//     }
    
let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];


const calendar = document.getElementById('calendar');
const newEventPopup = document.getElementById('newEventPopup');
const deleteEventPopup = document.getElementById('deleteEventPopup');
const popupDrop = document.getElementById('popupDrop');
const eventTitleInput = document.getElementById('eventTitleInput');
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    function openPopup(date) {
        clicked = date;

        const eventForDay = events.find(e => e.date === clicked);

        if (eventForDay) {
            document.getElementById('eventText').innerText = eventForDay.title;
            deleteEventPopup.style.display = 'block';
        } else {
            newEventPopup.style.display = 'block';
        }

        popupDrop.style.display = 'block';
    }

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
        console.log(emptyDays)

        document.getElementById('monthDisplay').innerText = `${months[month]} ${year}`;

        calendar.innerHTML = '';

        for (let i = 1; i <= emptyDays + daysInMonth; i++) {
            const dayTile = document.createElement('div');
            dayTile.classList.add('day');

            const tileDate = `${i - emptyDays}/${month + 1}/${year}`;

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

                dayTile.addEventListener('click', () => openPopup(tileDate));
            } else {
                dayTile.classList.add('empty');
            }

            calendar.appendChild(dayTile);
        }
    }

    function closePopup() {
        eventTitleInput.classList.remove('error');
        newEventPopup.style.display = 'none';
        deleteEventPopup.style.display = 'none';
        popupDrop.style.display = 'none';
        eventTitleInput.value = '';
        clicked = null;
        renderCalendar();
    }

    async function saveEvent() {
        if (eventTitleInput.value) {
            eventTitleInput.classList.remove('error');
            
            // const options = {
            //     method: "POST",
            //     headers: {
            //         'Accept': 'application/json',
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify({
            //         date: clicked,
            //         title: eventTitleInput.value,
            //     })
            // }
        
            // const result = await fetch("http://localhost:3000/posts", options);
        
            // if (result.status == 201) {
            //     closePopup();
            // }


            events.push({
                date: clicked,
                title: eventTitleInput.value,
            });

            localStorage.setItem('events', JSON.stringify(events));
            closePopup();
        } else {
            eventTitleInput.classList.add('error');
        }
    }

    function deleteEvent() {
        events = events.filter(e => e.date !== clicked);
        localStorage.setItem('events', JSON.stringify(events));
        closePopup();
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
        document.getElementById('cancelButton').addEventListener('click', closePopup);
        document.getElementById('deleteButton').addEventListener('click', deleteEvent);
        document.getElementById('closeButton').addEventListener('click', closePopup);
    }

    initButtons();
    renderCalendar();
