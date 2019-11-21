require("./helpers/userhelper.js");

// GET customer login
// create and connect with nav and login styles sheet

module.exports = function(app, db) {
  app.get("/login", (req, res) => {
    db.query(`SELECT order.created_at FROM orders;`)

    .then(data => {
      console.log(data);
    });

    let templateVars = {
      users: db.users
    };
    res.render(`login`, templateVars);
  });

  // POST customer login
  // install bcryt for hashing user password

  app.post("/login", (req, res) => {
    // SET cookie
    return db.query(`
      SELECT *
      FROM users
      WHERE email = $1
    `,[req.body.email])

    .then(users => {
      console.log("00:", users.rows);
      const user = users.rows[0];

      if (user) {
        req.session.user_id = user.id;
        res.redirect("/menu");
      }
    })

    .catch(e => {
      console.log('11', e)
      res.status(500).send(e);
    });
  });


// add POST logout to clear customer info
app.post("/logout", (req, res) => {
  req.session = null
  res.redirect(`/login`);
});

}

