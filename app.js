const express = require("express")
const app = express()
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

app.get("/main", function(req, res){
    res.render("Main", {newListItems:MainSearchBox})
    MyCSearchBox = []
})
app.post("/main", (req, res) => {
    console.log(req.body.search)
    MainSearchBox.push(req.body.search)
    res.redirect("/main")
})
app.post("/mainAdd", (req, res) => {
    MainSearchBox.push(req.body.name)
    res.redirect("/main")
})

app.get("/day", function(req, res){
    res.render("Day")
    MyCSearchBox = []
    MainSearchBox = []
})



app.post("/gotoDay", function(req, res){
    res.redirect("/day")
})
app.get('/myC', (req, res) => {
    MainSearchBox = []
    res.render("myCalendar", {newListItems: MyCSearchBox, isAdded: isAddedtoCal})
    //res.sendFile(__dirname + "/myCalendar.html")
})
app.post('/myC', (req, res) => {
    MyCSearchBox.push(req.body.search)
    res.redirect('/myC')
})

app.get('/add', (req, res) => {
    res.render("addEvent")
    MainSearchBox = []
    MyCSearchBox = []
    //res.sendFile(__dirname + "/addEvent.html")
})
app.get('/explore', (req, res) => {
    res.render("explore")
    MainSearchBox = []
    MyCSearchBox = []
    //res.sendFile(__dirname + "/explore.html")
})
app.get('/event', (req, res) => {
    res.render('Event', {isAdded: isAddedtoCal})
})
app.post('/event', (req, res) => {
    isAddedtoCal = true;
    res.redirect('/event');
})


app.post('/gotoEvent', (req, res) => {
    res.redirect('/event')
})
app.post('/gotoMyC', (req, res) => {
    res.redirect("/myC")
})
app.post('/gotoHome', (req, res) => {
    res.redirect("/main")
})
app.post('/gotoAdd', (req, res) => {
    res.redirect("/add")
})
app.post('/gotoExplore', (req, res) => {
    res.redirect("/explore")
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
