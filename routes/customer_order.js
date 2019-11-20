module.exports = function(app, db) {

  // GET ORDER PAGE
  app.get("/order/:id", (request, response) => {

  const getOrder =
    `SELECT orders.id as order_id, orders.status as order_status, users.name as name, users.phone as phone_number
    FROM orders
    JOIN users ON orders.user_id = users.id
    WHERE users.id = $1
    ORDER BY order_id DESC
    LIMIT 1;`

  db.query(getOrder, [request.session.user_id])
  .then(data => {
    response.json(data);
    console.log(data);
    response.render("order", data.rows)

  .catch(err => {
    console.log('error:', err);
    response.status(500)
      .json({ error: err.message });
    });
  });
});

  // POST ORDER PAGE
  app.post("/order", (req, res) => {
    console.log("hello");
    db.query(`
    INSERT INTO orders (user_id, created_at, status)
    VALUES($1, NOW(), $2)
    `,[req.session.user_id, "pending"])
    .then(() => {
      res.render(`order`);
    })
    .catch((err) => {
      console.log(err.message);
    })
  })

  app.post("/order/start", (req, res) => {
    console.log("order started");
    console.log(req.body);
    db.query(`
    UPDATE orders
    SET status = 'started',
        started_at = NOW()
    WHERE id = $1
    `, [req.body.orderId])
    res.send();

  })


};
