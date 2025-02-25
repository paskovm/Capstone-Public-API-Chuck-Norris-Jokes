import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://api.chucknorris.io/jokes";

app.get("/", async (req, res) => {
    try {
        const result = await axios.get(API_URL + "/categories");
        res.render("index.ejs", {
            categories: result.data
        });

    } catch (error) {
        console.log(error.response.data);
        res.status(500);
    }

});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});