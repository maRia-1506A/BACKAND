const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const users = [
  { id: 1, name: "Maria", email: "maria@gmail.com" },
  { id: 2, name: "Maliha", email: "maliha@gmail.com" },
  { id: 3, name: "Myra", email: "myra@gmail.com" },
];

app.get("/", (req, res) => {
  res.send("Practice Server is running");
});

app.get('/users', (req, res)=>{
  res.send(users);
})

app.listen(port, () => {
  console.log(`Server is running on PORT: ${port}`);
});
