/**
 * @jest-environment jsdom
 */


let {adminPopup, showPopup, closePopup, renderCalendar, saveEvent, deleteEvent, volunteerPopup, volunteer} = require('./mockLibrary')
global.fetch = require('jest-fetch-mock')
const path = require('path');
const fs = require("fs");
// window.document.body.innerHTML = fs.readFileSync(".")
// require ("./")
const libraryPath = path.join(__dirname, "../../client/html/library.html");
const libraryContent = fs.readFileSync(libraryPath, "utf8");


 
describe("adminPopup", () => {

    beforeEach(()=> {
        document.body.innerHTML = libraryContent
       
    })
    test('that it exists', ()=>{

    expect(adminPopup).toBeDefined();
    })



    test('check if replace changes HTML text content', ()=>{
       
        
let events= [{
    
    "activity_date":'2023-02-17',
    "title" : "new"
}]

const testElement = document.getElementById('eventText');
let date = '2023-02-17'
 
adminPopup(date, events)

expect(testElement.innerText).toBe("new");


    })
test('it is a function', ()=>{
        expect(adminPopup instanceof Function).toEqual(true);
    })
})


describe("volunteerPopup", () => {

    beforeEach(()=> {
        document.body.innerHTML = libraryContent
       
    })
    test('that it exists', ()=>{

    expect(volunteerPopup).toBeDefined();
    })



    test('check if replace changes HTML text content', ()=>{
       
        
let events= [{
    
    "activity_date":'2023-02-17',
    "title" : "new"
}]

const contentElement = document.getElementById('evText');
let date = '2023-02-17'
 
volunteerPopup(date, events)

expect(contentElement.innerText).toBe("new");


    })
    test('it is a function', ()=>{
        expect(volunteerPopup instanceof Function).toEqual(true);
    })
})

describe("showPopup", () => {

    beforeEach(()=> {
        document.body.innerHTML = libraryContent
       
    })
    test('that it exists', ()=>{

    expect(showPopup).toBeDefined();
    })



    test('check if replace changes style', ()=>{
       
        
let events= [{
    
    "activity_date":'2023-02-17',
    "title" : "new"
}]

const popup = document.getElementById('popup');
// const style = getComputedStyle(popup);
let date = '2023-02-17'
 
showPopup(date, events, popup)

expect(popup.style.display).toBe("block");


    })

test('it is a function', ()=>{
        expect(showPopup instanceof Function).toEqual(true);
    })
})

describe("closePopup", () => {

    beforeEach(()=> {
        document.body.innerHTML = libraryContent
       
    })
    test('that it exists', ()=>{

    expect(closePopup).toBeDefined();
    })
    test('it is a function', ()=>{
        expect(closePopup instanceof Function).toEqual(true);
    })
  
})

describe("saveEvent", () => {
    
    beforeEach(()=> {
        document.body.innerHTML = libraryContent
       
    })
    afterEach(() => {
        fetch.resetMocks();
    })
test('that it exists', ()=>{

        expect(saveEvent).toBeDefined();
        })

test('it fetches data from the API', async() =>{
    fetch.mockResponseOnce({status :201});

    let eventTitleInput = document.getElementById('eventTitleInput');
    const clicked = '2023-02-17'
    eventTitleInput = {value :"new"}
    const data = await saveEvent(clicked, eventTitleInput);
    expect(data).not.toBeNull()
     
})

test('it is a function', ()=>{
    expect(saveEvent instanceof Function).toEqual(true);
})

})


describe("deleteEvent", () => {
    
    beforeEach(()=> {
        document.body.innerHTML = libraryContent
    })
    afterEach(() => {
        jest.clearAllMocks();
    })

test('it fetches data from the API', async() =>{
    fetch.mockResponseOnce({status :201});
    
let closePopup = jest.fn()
closePopup.mockImplementation(()=>1)
    const alertMock = jest.spyOn(window,'alert').mockImplementation(); 
    const clicked = '2023-02-17'
    
   
    const data = await deleteEvent(clicked);
    expect(alertMock).toHaveBeenCalledTimes(1)
    
})

test('it is a function', ()=>{
    expect(deleteEvent instanceof Function).toEqual(true);
})
test('that it exists', ()=>{

    expect(deleteEvent).toBeDefined();
    })

})


describe("volunteer", () => {
    
    beforeEach(()=> {
        document.body.innerHTML = libraryContent
       
    })
    afterEach(() => {
        fetch.resetMocks();
    })

test('it fetches data from the API', async() =>{
    fetch.mockResponseOnce({status :202});

    const alertMock = jest.spyOn(window,'alert').mockImplementation(); 
    const clicked = '2023-02-17'
    Storage.prototype.getItem = jest.fn();
    
    const data = await volunteer(clicked);
    expect(alertMock).toHaveBeenCalled()
    
})
test('that it exists', ()=>{

    expect(volunteer).toBeDefined();
    })

test('it is a function', ()=>{
    expect(volunteer instanceof Function).toEqual(true);
})

})

describe("renderCallendar", () => {
    
    beforeEach(()=> {
        document.body.innerHTML = libraryContent
       
    })
    afterEach(() => {
        fetch.resetMocks();
    })

// test('it fetches data from the API', async() =>{
//     fetch.mockResponseOnce({status :200});
//     fetch.mockResponseOnce(JSON.stringify({
    
//         "title":"new",
//         "activity_date": "2023-02-12"
        
//     }));
// let nav = 0

     
//     let tile = document.querySelector("day")
//     Storage.prototype.getItem = jest.fn();
//     const calendar = document.getElementById('calendar');
//     const data = await renderCalendar(nav, calendar);
//     expect(tile).not.toBeNull
    
// })
test('that it exists', ()=>{

    expect(renderCalendar).toBeDefined();
    })
test('it is a function', ()=>{
    expect(volunteer instanceof Function).toEqual(true);
})

})
