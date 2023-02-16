/**
 * @jest-environment jsdom
 */


const {adminPopup, showPopup, closePopup, renderCalendar, saveEvent, deleteEvent, volunteer} = require('../../client/js/library')
global.fetch = require('jest-fetch-mock')

const fs = require("fs");
window.document.body.innerHTML = fs.readFileSync('../../client/html/library')


describe("adminPopup", () => {

    afterEach(()=> {
        window.document.body.innerHTML = fs.readFileSync('../../client/html/library')
    })

    test('check if replace changes HTML text content', ()=>{
       
        
let events= [{
    
    "activity_date":'2023-02-17',
    "title" : "new"
}]
const contentElement = document.getElementById('eventText');
let date = '2023-02-17'
let toggle = deleteEventPopup.style.display 
adminPopup(date, events)

expect(contentElement.textContent).toBe("new");



 expect(toggle).toBe("block");

    })
})

