const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();

app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get("/register-retailer", (req, res) => {
  res.json(JSON.parse(fs.readFileSync("retailers.json")));
});


app.post("/register-retailer", (req, res) => {
  const { Name, Email, Address, Postal } = req.body;

  const retailersData = fs.readFileSync("retailers.json");

  let retailers = JSON.parse(retailersData);
  const registeredRetailer = checkRetailer(Email, retailers);

  if (registeredRetailer) {
    res
      .status(201)
      .json({ message: "Already registered! Please try another email" });
  } else {
    const newRetailer = { Name, Email, Address, Postal };
    retailers.push(newRetailer);

    // Convert the updated array back to JSON
    const updatedretailersData = JSON.stringify(retailers);

    // Write the updated retailers data to retailers.json
    fs.writeFileSync("retailers.json", updatedretailersData);

    // Send a response indicating successful registration
    res.status(200).json({ Name, Email, Address, Postal } );
  }
});

function checkRetailer(email, retailersData) {
  const retailer = retailersData.find(
    (u) => u.Email === email
  );
  return retailer ? true : false;
}

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});