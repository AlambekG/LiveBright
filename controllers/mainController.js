const MainSearchBox = [];
let isAddedtoCal = false;

exports.getLoginPage = (req, res) => {
  res.render("Login")
}
exports.postLoginPage = (req, res) => {
  const username = req.body.username;
    const password = req.body.password;
    
    if (username == 'test' && password == 'test') {
        res.redirect('/main');
    } else {
        res.send('<script>alert("Invalid username or password!"); window.location.href = "/";</script>');
        res.redirect("/");
    }   
}

exports.getMainPage = (req, res) => {
  res.render('Main', {newListItems: MainSearchBox});
  MyCSearchBox = [];
}
exports.postMainSearch = (req, res) => {
  console.log(req.body.search);
  MainSearchBox.push(req.body.search);
  res.redirect('/main');
}

exports.postMainAdd = (req, res) => {
  MainSearchBox.push(req.body.name);
  res.redirect('/main');
}

exports.getMyCalPage = (req, res) => {
    MyCSearchBox = [];
    res.render("myCalendar", {newListItems: MyCSearchBox, isAdded: isAddedtoCal})
}

exports.postCalSearch = (req, res) => {
    MyCSearchBox.push(req.body.search)
    res.redirect('/myC')
}
