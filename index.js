import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://api.chucknorris.io/jokes/random/";

app.get("/", async (req, res) => {
    try {
        const result = await axios.post(API_URL + "/")
        res.render("index.ejs");


    } catch (error) {
        console.log(error.response.data);
        res.statusCode(404);
    }

});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});