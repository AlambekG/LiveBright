const express = require("express")
const app = express()
const mainRoutes = require('./routes/mainRoutes');
const eventRoutes = require('./routes/eventRoutes');

const port = 3000

app.use(express.urlencoded({extended:true}))
app.use(express.static('public'));
app.set("view engine", "ejs")

app.use('/', mainRoutes)
app.use('/', eventRoutes)

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
