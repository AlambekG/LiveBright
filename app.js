const express = require("express")
const app = express()
const db = require('./database');

const port = 3000

app.use(express.urlencoded({extended:true}))
app.use(express.static('public'));
app.set("view engine", "ejs")

app.get("/", function(req, res){
    res.render("Login.ejs")
    MainSearchBox = []
    MyCSearchBox = []
    isAddedtoCal = false
});

app.post('/', function(req, res){
    const username = req.body.username;
    const password = req.body.password;
    
    if (username == 'test' && password == 'test') {
        res.redirect('/main');
    } else {
        res.send('<script>alert("Invalid username or password!"); window.location.href = "/";</script>');
        res.redirect("/");
    }   
})

let MainSearchBox = []
let MyCSearchBox = []
let isAddedtoCal = false

const events = [
    {
        id: "1",
        title: "party night",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
        date: "november 4",
    }
]

app.get("/main", function(req, res){
    res.render("Main", {newListItems:MainSearchBox})
    MyCSearchBox = []
})
app.post("/main", (req, res) => {
    console.log(req.body.search)
    MainSearchBox.push(req.body.search)
    res.redirect("/main")
})
app.get("/day", function(req, res){
    res.render("Day")
    MyCSearchBox = []
    MainSearchBox = []
})
app.get('/myC', (req, res) => {
    MainSearchBox = []
    res.render("myCalendar", {newListItems: MyCSearchBox, isAdded: isAddedtoCal})
    //res.sendFile(__dirname + "/myCalendar.html")
})
app.get('/add', (req, res) => {
    res.render("addEvent")
    MainSearchBox = []
    MyCSearchBox = []
})

app.get('/explore', async (req, res) => {
    MainSearchBox = []
    MyCSearchBox = []
    try {
        const allEvents = await db.event.find({});
        console.log(allEvents)
        res.render("explore", { events: allEvents });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});


app.get('/event', (req, res) => {
    res.render('Event', {isAdded: isAddedtoCal})
})

app.post("/add", async (req, res) => {
    const newEvent = new db.event({
        title:  req.body.title,
        description: req.body.description,
        date: req.body.date || ""
    });
    await newEvent.save();
    res.redirect("explore")
})

app.post('/event', (req, res) => {
    isAddedtoCal = true;
    res.redirect('/event');
})
app.post('/myC', (req, res) => {
    MyCSearchBox.push(req.body.search)
    res.redirect('/myC')
})
app.post("/mainAdd", (req, res) => {
    MainSearchBox.push(req.body.name)
    res.redirect("/main")
})


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
