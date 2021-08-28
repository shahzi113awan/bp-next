const Express = require("express");
const bodyParser = require("body-parser");
var PORT = process.env.PORT || 8080;

const app = new Express();
const router = Express.Router();

app.use(bodyParser.json());
app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

//Get All Tokens
// router.get("/getTokens/:id", async (req, res) => {
//   const result = snapshot.forEach((doc) => {
//     console.log(doc.id, "=>", doc.data());
//     res.send(doc.data());
//   });
//   res.send(Token.data());
// });
