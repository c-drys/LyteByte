module.exports = function(app, db) {

  // GET THE DATABASE FOR RESTAURANT PAGE
  // app.get('/restaurant_order/:id', (req, res) => {
  //   console.log(req.params.id);
  //   return db.query(`
  //     SELECT * FROM orders
  //     WHERE id = ${req.params.id};
  //   `)
  //   .then(data => {
  //     const orders = data.rows;
  //     console.log(orders);
  //     res.render(`restaurant_order`, { orders });
  //   })
  //   .catch(err => {
  //     res
  //       .status(500)
  //       .json({ error: err.message });
  //   });
  // });

  app.get('/orders', (req, res) => {
    console.log(req.params.id);
    return db.query(`
      SELECT orders.*, users.name AS name, users.phone AS phone
      FROM orders
      JOIN users ON users.id = orders.user_id
      ORDER BY orders.id DESC;
    `)
    .then(data => {
      const orders = data.rows;
      console.log(orders);
      res.render(`orders`, { orders }); // make a new esjs like 'orders.ejs'
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
  })

}
