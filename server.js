const { app } = require("./app");
const port = 3000;

app.listen(port, () =>
  // some changes for test
  console.log(`Example app listening at http://localhost:${port}`)
);
