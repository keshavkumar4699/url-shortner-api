//require library
const mongoose = require("mongoose");

//connect to database
async function main() {
  const db = await mongoose.connect(
    `mongodb://localhost:27017`
  );
  module.exports = db;
}

main()
  .then(() => console.log("database connected")) //if connected
  .catch((err) => console.log(err)); //if error
