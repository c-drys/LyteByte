/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */


module.exports = (app, db) => {
  // ================== GET ROUTES =======================
  // LOAD THE DATABASE TO THE MENU PAGE
  app.get("/menu", (req, res) => {

    db.query(`
      SELECT dishes.id AS id, dishes.name AS name, dishes.description AS description, dishes.price AS price, categories.name AS category
      FROM dishes
      JOIN categories ON categories.id = category_id
      ORDER BY id;
    `)
      .then(data => {
        const dishes = data.rows;
        res.render(`menu`, { dishes });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });

  });

  // GET ORDER PAGE
  app.get("/order/:id", (req, res) => {

    const getOrder =
      `SELECT orders.id as order_id, orders.status as order_status, orders.started_at as started_at, orders.ended_at as ended_at users.name as name, users.phone as phone_number
      FROM orders
      JOIN users ON orders.user_id = users.id
      WHERE users.id = $1
      ORDER BY order_id DESC
      LIMIT 1;`

    db.query(getOrder, [req.session.user_id])

    .then(data => {
      const orders = data.rows;
      // console.log(data.rows);
      console.log("hellos", orders)
      res.render(`order`, { orders });
    })
    .catch(err => {
      console.log('error:', err);
      res
        .status(500)
        .json({ error: err.message });
    });
  });

  // ================== POST ROUTES =======================
  // SUBMIT ORDER TO DATABASE
  app.post("/order", (req, res) => {
    db.query(`
      INSERT INTO orders (user_id, created_at, status)
      VALUES($1, NOW(), $2)
      RETURNING *;
    `,[req.session.user_id, "pending"])
    .then((data) => {
      console.log(data.rows);
      res.send({ order_id: data.rows[0].id });
    })
    .catch((err) => {
      console.log(err.message);
    })
  })


  // UPDATE TO DATABASE WHEN RESTAURANT UPDATE
  app.post("/order/start", (req, res) => {
    // console.log("order started");
    console.log(req.body);
    const { orderId } = req.body;

    db.query(`
    UPDATE orders
    SET status = 'started',
        started_at = NOW()
    WHERE id = $1;
    `, [orderId])
    .then((dbRes) => {
      console.log('dbRes, ',dbRes.rows)
      res.send({ order_id: orderId });
    })
    .catch((err) => {
      console.log(err.message);
    })
  })
};
