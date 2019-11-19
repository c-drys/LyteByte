require("./helpers/userhelper.js");


// GET customer login
// create and connect with nav and login styles sheet


module.exports = function(app, db) {

app.get("/login", (req, res) => {
  db.query(`SELECT * FROM users;`)
//   if (users[req.body.user_id]) {
//    return res.redirect(`/menu`);
//  };
  .then(data => {
    console.log(data);
  })
 let templateVars = {
   users: db.users }
 res.render(`login`, templateVars);
});


// POST customer login
// install bcryt for hashing user passwords

  // app.post("/login", (req, res) => {

  //   db.query(`SELECT email FROM users; `)
  //     .then(users => {
  //       if (!getUserByEmail(req.body, users)) {
  //         res.error("💩")
  //         return;
  //       }
  //       res.redirect(`/menu`);
  //     })
  //     .catch(error => {
  //       res.send(error);
  //     });
  // });

  app.post("/login", (req, res) => {

    // db.query(`SELECT email FROM users; `)
    //   .then(users => {
    //     if (!getUserByEmail(req.body, users)) {
    //       res.error("err")
    //       return;
    //     }
    //     console.log("hi");
        res.redirect(`/menu`);
      // })
      // .catch(error => {
      //   res.send(error);
      // });
  });


// =====================================================


// GET user login redirect
// redirect to login page
// attach to update cart or place order stage?
// app.get('/menu', (req, res) => {
//   const currentUser = req.session.user_id;
//   if (!currentUser) {
//     res.redirect(`/login`);
//   }
// })

app.get('/menu', (req, res) => {
    res.redirect(`/login`);
})


// =====================================================

// add POST logout to clear customer info
app.post("/logout", (req, res) => {
  req.session = null
  res.redirect(`/login`);
});

}
