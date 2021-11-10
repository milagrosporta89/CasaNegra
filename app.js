const express = require('express');
const path = require('path');
const app = express();
/* const publicFolderPath = path.resolve(__dirname, './public');
app.use ( express.static (publicFolderPath)); */

app.use(express.static((__dirname + '/public'))); //Para ver HTML desde aca
app.set("view engine", "ejs")

let rutasMain = require ("./src/routes/main");
app.use("/", rutasMain);

app.listen(process.env.PORT || 3000, () => {
    console.log("ok")})

