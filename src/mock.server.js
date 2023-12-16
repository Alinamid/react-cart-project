const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors()); 

const { chartData } = require("./mock");

app.post("/api/addToCart", (req, res) => {
  const { id, description } = req.body;

  const responseData = {
    success: true,
    message: `Product with ID ${id} and description '${description}' added to cart.`,
  };
  res.json(responseData);
});

app.get("/api/chartData", (req, res) => {
  // Simulate delay to mimic an API call
  setTimeout(() => {
    res.json(chartData);
  }, 1000);
});

app.listen(port, () => {
  console.log(`Mock server is running at http://localhost:${port}`);
});
