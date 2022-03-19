const express = require("express");
const path = require("path");
const cors = require('cors')
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors())

app.use("/public", express.static("public"));

const StockController = require("./controllers/StockController");

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./pages/home/home.html"));
});

app.route("/stockslist").get(StockController.getAllStocks);

app.route("/saveStocks").get(StockController.postStocks);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 