// GET customer login
// create and connect with nav and login styles sheet
module.exports = function(app, users){

app.get("/login", (req, res) => {
  if (users[req.body.user_id]) {
   return res.redirect(`/menu`);
 };

 let templateVars = {
   user: users[req.session.user_id]};
 res.render(`login`, templateVars);
});


// POST customer login
// install bcryt for hashing user passwords

  app.post("/login", (req, res) => {
    const user = getUserByEmail(req.body.email, users);

  if (req.body.email !== user.email) {
    return res.status(403).send('Sorry Invalid Credentials');

  }  if (!bcrypt.compareSync(req.body.password, user.password)) {
    return res.status(403).send('Oops...try again or request reminder.')

  } req.session.user_id = user.id
    res.redirect(`/menu`);

  });



// =====================================================

// GET user login redirect
// redirect to login page
// attach to update cart or place order stage?
app.get('/menu', (req, res) => {
  const currentUser = req.session.user_id;
  if (!currentUser) {
    res.redirect(`/login`);
  }
})


// =====================================================

// add POST logout to clear customer info
app.post("/logout", (req, res) => {
  req.session = null
  res.redirect(`/login`);
});

}
