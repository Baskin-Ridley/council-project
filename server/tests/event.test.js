/** 
 * @jest-environment jsdom
 */ 

const Event = require("../model/event");

describe('Event', () => {
it('should create a new event with the given properties', () => {
    const eventData = {
        name: 'Test Event',
        date: '2023-02-20',
        time: '18:00:00',
        description: 'This is a test event.'
    };
    
    const event = new Event(eventData);
    
    expect(event).toEqual(expect.objectContaining(eventData));
    });
});