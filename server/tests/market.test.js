/**
 * @jest-environment jsdom
 */

const fetchMock = require("jest-fetch-mock");
const fs = require('fs');
const path = require('path');

fetchMock.enableMocks();
jest.mock("../../client/js/market.js");

const html = fs.readFileSync(path.resolve(__dirname, '../../client/html/market.html'), 'utf8');

const { getPayload, newItemListing, deletePost, newPostPopup } = require('../../client/js/market');

describe("newItemListing", () => {
  it("exists", () => {
    expect(newItemListing).toBeDefined();
  });
});

describe('deletePost', () => {
    beforeEach(() => {
      fetchMock.resetMocks();
    });
  
    it("exists", () => {
        expect(deletePost).toBeDefined();
    });

    it('sends the correct data to the server', async () => {
      fetchMock.mockResponseOnce(JSON.stringify({}));
  
      const postId = 123;
      await deletePost(postId);
  
      expect(fetchMock.mock.calls.length).toBe(1);
      expect(fetchMock.mock.calls[0][0]).toBe('http://localhost:3000/market/delete');
      expect(fetchMock.mock.calls[0][1].method).toBe('POST');
      expect(fetchMock.mock.calls[0][1].headers['Content-Type']).toBe('application/json');
      expect(JSON.parse(fetchMock.mock.calls[0][1].body)).toEqual({ marketplace_id: postId });
    });
  /* currently does not work
    it('reloads the page after deleting the post', async () => {
        fetchMock.mockResponseOnce(JSON.stringify({}));
      
        const reloadMock = jest.fn();
        Object.defineProperty(window, 'location', {
          value: { reload: reloadMock }
        });
      
        await deletePost(456);
      
        expect(reloadMock).toHaveBeenCalled();
      });
      */
  });

describe("newPostPopup", () => {
    it("exists", () => {
        expect(newPostPopup).toBeDefined();
    });
});

