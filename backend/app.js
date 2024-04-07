const express = require("express")
const app = express()
require('dotenv').config();

app.use(express.urlencoded({extended:true}))
app.use(express.json()); 

const cors = require('cors');
app.use(cors());

const mainRoutes = require('./routes/mainRoutes');
const eventRoutes = require('./routes/eventRoutes');

const authRoutes = require('./routes/authRoutes');

app.use('/api', authRoutes);

// app.use('/', mainRoutes)
// app.use('/', eventRoutes)

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
