module.exports = function(app, db) {
  const moment = require('moment');

  app.get('/orders', (req, res) => {
    // console.log(req.params.id);
    return db.query(`
      SELECT orders.*, users.name AS name, users.phone AS phone
      FROM orders
      JOIN users ON users.id = orders.user_id
      ORDER BY orders.id DESC;
    `)
    .then(data => {
      const orders = data.rows;
      const displayOrders = orders.map(order => ({
        ...order,
        ended_at: order.ended_at ? moment(order.ended_at).startOf('minute').fromNow() : 'PENDING',
        started_at: order.started_at ? moment(order.started_at).startOf('minute').fromNow() : 'PENDING'
      }));
      res.render(`orders`, { orders: displayOrders }); // make a new esjs like 'orders.ejs'
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
  })

}
