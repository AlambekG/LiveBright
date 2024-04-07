// const db = require('../database');

exports.getExplorePage = async (req, res) => {
  // Get events from the database
  try {
    // const allEvents = await db.event.find({});
    console.log(allEvents);
    res.render('explore', { events: allEvents });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
}
exports.getDayPage = (req, res) => {
  res.render("Day")
}
  
exports.getAddPage = (req, res) => {
  res.render("addEvent")
}
exports.postAddPage = async (req, res) => {
  // const newEvent = new db.event({
  //   title:  req.body.title,
  //   description: req.body.description,
  //   date: req.body.date || ""
  // });
  await newEvent.save();
  res.redirect("explore")
}

exports.getEventPage = (req, res) => {
  res.render('Event', {isAdded: false})
}
exports.postEventPage = (req, res) => {
  res.render('Event', {isAdded: true})
}