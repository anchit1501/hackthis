const path = require("path"),
  express = require("express"),
  app = express(),
  port = 6949;

app.use(express.static(path.join(__dirname, "./build")));
app.get("*", function (request, response) {
  response.sendFile(path.join(__dirname, "./build/index.html"));
});
app.listen( process.env.PORT || 8080, () => {
  console.log(`Server running on port ${port}`);
});