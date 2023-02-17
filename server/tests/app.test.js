const request = require("supertest")
const app = require("../app")
const { setupDatabase } = require("../db/setup")



describe(`POST /register`, () => {


    beforeEach(async () => {
        await setupDatabase();
    });

    afterEach(async () => {
        await setupDatabase();
    });



    describe("when requested to add a new user: ", () => {

        let data = {
            "username": "SAMPLE TEXT",
            "password": "SAMPLE TEXT",
            "email": "SAMPLE TEXT",
            "img_url": "SAMPLE TEXT"
        }


        test("should return status code 201", async () => {
            const response = await request(app).post(`/register`).send(data)
            expect(response.statusCode).toBe(201)
        })

        test("should return json content header", async () => {
            const response = await request(app).post(`/register`).send(data)
            expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
        })


        test("should return a json message objects", async () => {
            const response = await request(app).post(`/register`).send(data)
            expect(response.body).toBeDefined();
        })


        test("should return the number of keys of the json object: 2", async () => {
            const response = await request(app).post(`/register`).send(data)
            //console.log(response.body)
            expect(Object.keys(response.body).length).toBe(1);
        })

    })

    describe("when requested to add an incomplete registration: ", () => {

        let wrongdata = {
            "username": "SAMPLE TEXT",
            "password": "SAMPLE TEXT"
        }

        //should return status code "400"
        test("should return status code 400", async () => {
            const response = await request(app).post(`/register`).send(wrongdata)
            expect(response.statusCode).toBe(400)
        })


        // should respond with a json content header
        test("should return  json content header", async () => {
            const response = await request(app).post(`/register`).send(wrongdata)
            expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
        })


        //should respond with a json file containing the error 
        test("should return a json file containing the error ", async () => {
            const response = await request(app).post(`/register`).send(wrongdata)
            expect(response.body.message).toBe("Invalid properties")
        })


    })



})

describe(`POST /login`, () => {


    beforeEach(async () => {
        await setupDatabase();
    });

    afterEach(async () => {
        await setupDatabase();
    });

    describe("when requested to login with correct credentials: ", () => {


        const data = {
            "username": "BearNecessities",
            "password": "password1"
        }

        //should return status code "200"
        test("should return status code 200", async () => {
            const response = await request(app).post(`/login`).send(data)
            expect(response.statusCode).toBe(200)
        })

        // should respond with a json content header
        test("should return  json content header", async () => {
            const response = await request(app).post(`/login`).send(data)
            expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
        })

        //should respond with a json array of user objects
        test("should return a json array of user objects", async () => {
            const response = await request(app).post(`/login`).send(data)
            expect(response.body.token).toBeDefined();
        })

        //should respond with a the number of keys of the json object: 2
        test("should return the number of keys of the json object: 2", async () => {
            const response = await request(app).post(`/login`).send(data)
            expect(Object.keys(response.body).length).toBe(2);
        })
        //should not return any value for the password key
        test("should return a message", async () => {
            const response = await request(app).post(`/login`).send(data)
            expect(response.body.message).toBeDefined();
        })



    })
    describe("when requested to login with incorrect credentials: ", () => {

        const wrongdata = {
            "username": "12321312321",
            "password": "1231231"
        }


        //should return status code "404"
        test("should return status code 404", async () => {
            const response = await request(app).post(`/login`).send(wrongdata)
            expect(response.statusCode).toBe(404)
        })


        // should respond with a json content header
        test("should return  json content header", async () => {
            const response = await request(app).post(`/login`).send(wrongdata)
            expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
        })


        //should respond with a json file containing the error
        test("should return a json file containing the error ", async () => {
            const response = await request(app).post(`/login`).send(wrongdata)
            expect(response.body.message).toBe("Incorrect username or password")
        })

    })



})
