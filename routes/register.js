const helpers = require("./helpers/helpers.js")

// new user sigup
// create and connect with nav and register styles sheet

app.get("/register", (req, res) => {
  let templateVars = {
    user: users[req.session.user_id]};
  res.render(`register`, templateVars);
});

app.post("/resgister", (req, res) => {
  res.redirect(`/menu`)
})


// POST new customer register
// install bcryt for hashing user passwords

app.post("/register", (req, res) => {
  let newUserID = generateRandomString();
  const hashedPassword = bcrypt.hashSync(req.body.password, 10);
  if (req.body.email === '' || req.body.password === '') {
    return res.status(400).send('Credentials required to proceed');
  }
  for (const userId in users) {
    if (users[userId].email === req.body.email) {
      return res.status(400).send('I think I already know you..');
  }
  else
    users[newUserID] = {
      id: newUserID,
      email: req.body.email,
      Password: hashedPassword
    };
    }
  req.session.user_id = newUserID;
  res.redirect(`/menu`);
});
