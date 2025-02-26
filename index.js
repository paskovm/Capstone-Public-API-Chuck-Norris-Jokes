import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://api.chucknorris.io/jokes";
var categories;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
        const result = await axios.get(API_URL + "/categories");
        categories = result.data;
        res.render("index.ejs", {
            categories: categories
        });
    } catch (error) {
        console.log(error.response.data);
        res.status(500);
    }
});

app.post("/", async (req, res) => {
    try {
        const category = req.body.category;
        const result = await axios.get(API_URL + "/random" + (category ? `?category=${category}` : ""));
        res.render("index.ejs", {
            categories: categories,
            content: result.data.value
        });

    } catch (error) {
        res.render("index.ejs", {
            content : error.message
        });
    }

});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});