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

  //  if (!getUserByEmail(req.body.email || req.body.password)) {
  //   return db.query(
  //   `SELECT email
  //     FROM users
  //     WHERE email = $1
  //       AND password = $2; `)
  //     .then(users => {

  //         res.error("💩")
  //         return;
  //       }
  //       res.redirect(`/menu`);
  //     })
  //     .catch(error => {
  //       res.send(error ("💩");
  //     });
  // });


  app.post('/login', (req, res) => {

    return db.query(`
  SELECT *
  FROM users
  WHERE email = $1
  `, [req.body.email])
      .then(users => {
        console.log(users)
        if (!users) {
          res.send({error: "error 💩"});
          return;
        }

        res.redirect('/menu');

        req.body.email = user.email;
        res.send({user: {name: users.name, email: users.email, id: users.id}});
      })
      .catch(e => res.send(e));
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



//////// GETTING TO ORDER PAGE    NH 11/19   ///////////////////////////////
app.get('/order/:id', (req, res) => {
   res.render('order');
})

app.get('/restaurant_order/:id', (req, res) => {
  res.render('restaurant_order');
})

app.get('/cart', (req, res) => {
  res.render('cart');
})


app.post('/restaurant_order', (req, res) => {
  return db.query(`
  SELECT user.name, order.id
  FROM orders
  JOIN users ON users.id = user_id;
  `)
  .then(x => {
    const order = x.row[0];
    console.log('orders orders');

  })
})


app.post('/menu', (req, res) => {1
  return db.query(`
  INSERT INTO orders VALUES($1) RETURNING *;
  `, [req.body.order])
  .then(x => {
    const order = x.row[0]
    res.redirect(`/cart/${order.id}`);
  })
})

app.post('/cart', (req, res) => {
  return db.query(`
  SELECT * FROM orders;
  `)
  .then(x => {
    const order = x.row[0]
    res.redirect(`/cart/${order.id}`);
  })
})

app.post('/cart', (req, res) => {
  return db.query(`
  INSERT INTO orders VALUES($1) RETURNING *;
  `, [req.body.order])
  .then(x => {
    const order = x.row[0]
    res.redirect(`/order/${order.id}`);
  })
})

<<<<<<< Updated upstream
app.post('/menu', (req, res) => {
  return db.query(`
  INSERT INTO orders VALUES($1) RETURNING *;
  `, [req.body.order])
  .then(x => {
    const order = x.row[0]
    console.log('hohoho');
    res.redirect(`/restaurant_order/${order.id}`);
  })
})
=======

>>>>>>> Stashed changes

// app.get("/order", (req, res) => {
//   db.query(`SELECT * FROM users;`)

//   .then(data => {
//     console.log(data);
//   })
//  let templateVars = {
//    users: db.users }
//  res.render(`order`, templateVars);
// });



// app.get("/restaurant_order", (req, res) => {
//   db.query(`SELECT * FROM users;`)

//   .then(data => {
//     console.log(data);
//   })
//  let templateVars = {
//    users: db.users }
//  res.render(`restaurant_order`, templateVars);
// });


// =====================================================

// add POST logout to clear customer info
app.post("/logout", (req, res) => {
  req.session = null
  res.redirect(`/login`);
});

}
