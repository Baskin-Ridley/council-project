# council-project

Florence Council, wanted nothing but excellence to solve all their communities problems. Which is why they came to us, the best of the best. The most excellent of the excellent. The ones above everyone else.

And we delivered.

A fully featured app to solve their problems, from a recycling board to ensure that nobody wastes anything.

A robust volunteer system such that the library, never goes unstaffed again.

Fully deployed at:

https://council-project-production-f9df.up.railway.app/html/index.html

Theres even a simple 3 step program so that the council or anyone else can host their own copy.

## Prerequisites

A postgres database.

The dotenv file needs to include:

DBCONNECTIONSTRING=<postgres database link>

PORT=XXXX

SALT=12

SECRET=<your deepest darkest secret>

## Installation

Installation is easy just follow this two step process.

In the server folder, run the command `npm install` this install all the dependencies!

After this run `npm run connect` this sets up the server connection and the database!

## Production

Just one command now. From the server folder run `npm run start`

BOOM!

Just like that you have your own council app.

But what if you are not Florence Council and wish to change the app for your own users?

We've got the command for you!

## Development

From the server run `npm run dev` to start the development server.

Each change you make will be reflected here http://localhost:XXXX/html/index.html

Enjoy the wonderful app.




