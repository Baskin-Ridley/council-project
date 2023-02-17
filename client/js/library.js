// // //////// Hamburger menu on click event to pull out sidebar animation START /////////////
document.querySelector(".hamburger-menu").addEventListener("click", () => {
    document.querySelector(".container").classList.toggle("change")
  })
  
  /////////// Hamburger menu on click event to pull out sidebar animation END /////////////


const calendar = document.getElementById('calendar');
const newEventPopup = document.getElementById('newEventPopup');
const deleteEventPopup = document.getElementById('deleteEventPopup');
const volunteerEventPopup = document.getElementById('volunteerEventPopup');
const popup = document.getElementById('popup');
const popupShadow= document.getElementById('popupShadow');
const eventTitleInput = document.getElementById('eventTitleInput');
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


let nav = 0;
let clicked = null;




////////////     POP-UP WINDOWS FUNCTIONS     ////////////////////////
function adminPopup(date, events) {
        
    clicked = date
    const eventForDay = events.find(e => e.activity_date == date);

    if (eventForDay) {
        document.getElementById('eventText').innerText = eventForDay.title;
        deleteEventPopup.style.display = 'block';
    } else {
        newEventPopup.style.display = 'block';
    }

    popupShadow.style.display = 'block';
}


function volunteerPopup(date,events) {
    clicked = date

    const eventForDay = events.find(e => e.activity_date == date);

    if (eventForDay) {
        document.getElementById('evText').innerText = eventForDay.title;
        volunteerEventPopup.style.display = 'block';
        popupShadow.style.display = 'block';
    } 
}

function showPopup(date, events) {
        
    const eventForDay = events.find(e => e.activity_date == date);

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

    



 //////////////////////////    DISPLAY CALENDAR      /////////////////////////////////////    

    async function renderCalendar() {
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
        // //console.log(emptyDays)

        document.getElementById('monthDisplay').innerText = `${months[month]} ${year}`;

        calendar.innerHTML = '';
       

        for (let i = 1; i <= emptyDays + daysInMonth; i++) {

            const dayTile = document.createElement('div');
            dayTile.classList.add('day');
            let tileDate
            if(month<10){ 
                tileDate = `${year}-0${month + 1}-${i - emptyDays}`
            } else{
                 tileDate = `${year}-${month + 1}-${i - emptyDays}`
            }
              

            if (i > emptyDays) {
                dayTile.innerText = i - emptyDays;
                
                

                if (i - emptyDays === day && nav === 0) {
                    dayTile.id = 'currentDay';
                }
                const response = await fetch("https://council-project-production-f9df.up.railway.app/events")
                  let events  =[]
                    if (response.status == 200) { 
                          events= await response.json();
                        events.map(e=>{return e.activity_date = e.activity_date.slice(0,10)}) 
                        
                        const eventForDay = events.find(e => e.activity_date == tileDate);
                        
                        //console.log(events)
                        if (eventForDay) {
                            const eventDiv = document.createElement('div');
                            eventDiv.classList.add('event');
                            eventDiv.innerText = eventForDay.title;
                            dayTile.appendChild(eventDiv);
                            dayTile.classList.remove('day');
                            dayTile.classList.add('eventDay');

                          
                        }
                    }else{ events = []}
                    const isAdmin = window.localStorage.getItem("permission")? true : false
                    
                    const isLoggedIn= window.localStorage.getItem("token")? true : false
                    //console.log(isLoggedIn)
                        if (isLoggedIn && isAdmin){
                            
                            dayTile.addEventListener('click', () => adminPopup(tileDate, events));
                        } else if (isLoggedIn) {
                                                                
                            dayTile.addEventListener('click', () => volunteerPopup(tileDate, events));
            
                        } else {
                            
                            dayTile.addEventListener('click', () => showPopup(tileDate, events));
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
        
            const result = await fetch("https://council-project-production-f9df.up.railway.app/events", options);
        
            if (result.status == 201) {
                closePopup();
            }


        } else {
            eventTitleInput.classList.add('error');
        }
    }


   async function deleteEvent() {
        const date= clicked;

        const res = await fetch(`https://council-project-production-f9df.up.railway.app/events/${date}`, { method: "DELETE" });
    
        if (res.status != 204) {
            alert("Unable to delete event.")
        } 

        closePopup();
    
    }



async function volunteer(){
      userToken = window.localStorage.getItem("token")
            const options = {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    token: userToken,
                    activity_date: clicked
                })
            }
        
            const result = await fetch("https://council-project-production-f9df.up.railway.app/volunteers", options);
       
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

    const logOut = document.querySelector("#logout")
    logOut.addEventListener("click", (e)=>{
        e.preventDefault()
        removeTokenFromLocalStorage()
    })
    const signOut = document.querySelector("#signout")
    signOut.addEventListener("click", (e)=>{
        e.preventDefault()
        removeTokenFromLocalStorage()
    })
  
    const removeTokenFromLocalStorage = () =>{
      window.localStorage.removeItem("token")
      window.localStorage.removeItem("permission")
      window.location.assign("index.html")
  }
  