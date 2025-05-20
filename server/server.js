// import express, { response } from "express";
// const app = express();

// app.use(express.json());

// app.listen(8080, function () {
//   console.log("Server is running in port 8080");
// });

// app.get("/", function (request, response) {
//   response.json({ message: "welcome to the server, this is the root route!" });
// });

import express from "express"
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("This is the root route!");
});

app.listen(8080, () => {
  console.log(`Server running on port 8080`);
});


// app.listen(8080, function (){
//     console.log("Server running in port 8080.");
// });

// app.get("/", function (request, response){
//     response.json({message: "Welcome to my server"})
// });

// ======================================
// we need to practice connecting our database to our server
// pg --> we will use this to build a connection stream pool and to send sequel queiries to our database
// dotenv --> we will use this to store secrets in our server (sensitive data like passwords etc)
// There are two secrets we want to store in our server, database password, and the database connection script

// import dotenv
// import dotenv from "dotenv";
// configure the dotenvpackage to initalise our new .env file
// dotenv.config();

// import pg
import pg from "pg";

// we are going to create a pool using the connectin string
// The pool is our databases waiting area - requests sent to the database will wait in the pool to be processed
const db = new pg.Pool({
    connectionString: process.env.DB_URL,
});

app.get("/env-test", (req, res) => {
  res.json({
    dbUrl: process.env.DB_URL ? "✅ DB_URL loaded" : "❌ DB_URL missing",
    DBPass: process.env.DB_PASSWORD ? "✅ DB PASSWORD key loaded" : "❌ DB PASSWORD key missing"
  });
});

console.log("Loaded DB_URL:", process.env.DB_URL);