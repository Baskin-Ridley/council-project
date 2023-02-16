
/**
 * @jest-environment jsdom
 */

const fetchMock = require("jest-fetch-mock");
const fs = require('fs');
const path = require('path');

fetchMock.enableMocks();
jest.mock("../../client/js/market.js")

const html = fs.readFileSync(path.resolve(__dirname, '../../client/html/market.html'), 'utf8');

let {getPayload, newItemListing, deletePost, newPostPopup} 
    = require('../../client/assets/js/market')

describe ("newItemListing", () => {
    it("exists", () => {
        expect(newItemListing).toBeDefined();
    })
})
