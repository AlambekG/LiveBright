const express = require("express")
const app = express()
const mainRoutes = require('./routes/mainRoutes');
const eventRoutes = require('./routes/eventRoutes');

app.use(express.urlencoded({extended:true}))

app.use('/', mainRoutes)
app.use('/', eventRoutes)

const PORT = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
