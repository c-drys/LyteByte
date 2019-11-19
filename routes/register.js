const helpers = require("./helpers/userhelpers.js")

app.get('/', (req, res) => {
  res.send('This is the home page');
})

app.get('/login', (req, res) => {
  res.redirect('/login');
})

app.get('/menu', (req, res) => {

})

app.get('/payment', (req, res) => {

})

app.get('/order', (req, res) => {

})

app.post('/login')























// new user sigup
// create and connect with nav and register styles sheet

// app.get("/register", (req, res) => {
//   let templateVars = {
//     user: users[req.session.user_id]};
//   res.render(`register`, templateVars);
// });



// POST new customer register
// install bcryt for hashing user passwords

// app.post("/register", (req, res) => {
//   let newUserID = generateRandomString();
//   const hashedPassword = bcrypt.hashSync(req.body.password, 10);
//   if (req.body.email === '' || req.body.password === '') {
//     return res.status(400).send('Credentials required to proceed');
//   }
//   for (const userId in users) {
//     if (users[userId].email === req.body.email) {
//       return res.status(400).send('I think I already know you..');
//   }
//   else
//     users[newUserID] = {
//       id: newUserID,
//       email: req.body.email,
//       Password: hashedPassword
//     };
//     }
//   req.session.user_id = newUserID;
//   res.redirect(`/menu`);
// });
