const express = require('express');

app.use(express.static("public"));

// creating ability for rest to accept orders and update order status
app.post("/restaurantorder", (request, response) => {

  const newOrder = request.body.order_status;
  const orderId = request.body.order_id;

  const updateOrderStatus =
  `UPDATE orders
  SET order_status = '${newOrder}'
  WHERE id = ${orderId}
  RETURNING *;
  `

  db.query(updateOrderStatus)
    .then(data => {
      console.log(data.body);
      response.redirect("/restaurantorder")
    })
    .catch(err => {
      console.log('error:', err);
      response.status(500)
        .json({ error: err.message });
    });
});


// get order: by order status: can be used by both user & rest

app.get("/restaurantorder", (request, response) => {

  const getOrder =
  `SELECT orders.id as order_id, orders.status as order_status, users.name as name, users.phone as phone_number
  FROM orders
  JOIN users ON  orders.user_id = users.id
  WHERE order_status = 'pending'
  OR order_status = 'started'
  OR order_status = 'ready4pickup';`

  db.query(getOrder)
  .then(data => {
    response.redirect("/restaurantsorder")

  .catch(err => {
    console.log('error:', err);
    response.status(500)
      .json({ error: err.message });
  });
});




// get order details: by order quantity for restaurant use

getDishesInOrder

`SELECT dishes.name AS dish_name, line_items.order_id AS order_id,
FROM line_items
JOIN dishes ON line_items.dish_id = dishes.id
GROUP BY order line_items.quantity;
`
db.query(queries)
      .then(ordersFromQuery => {
        db.query


        (getDishesInOrder)
          .then(itemsFromQuery => {
            const dishes = itemsFromQuery.rows;
            const orders = ordersFromQuery.rows;
            res.render("restordert", { user: true, orders: orders, dishes: dishes });
          })
      })
      .catch(err => {
        console.log('error:', err);
        res.status(500)
          .json({ error: err.message });
      });
