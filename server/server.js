import express, { response } from "express";
const app = express();

app.use(express.json());

app.listen(8080, function () {
  console.log("Server is running in port 8080");
});

app.get("/", function (request, response) {
  response.json({ message: "welcome to the server, this is the root route!" });
});
