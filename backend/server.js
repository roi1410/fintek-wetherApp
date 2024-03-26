const bodyParser = require("body-parser");
const app = require("./app");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const port = 8000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(port, () => {
  console.log(`server runs on port ${port}`);
});
