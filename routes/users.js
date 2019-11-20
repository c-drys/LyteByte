/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */


module.exports = (app, db) => {

  app.get("/menu", (req, res) => {

    db.query(`
      SELECT dishes.id AS id, dishes.name AS name, dishes.description AS description, dishes.price AS price, categories.name AS category
      FROM dishes
      JOIN categories ON categories.id = category_id
      ORDER BY id;
    `)
      .then(data => {
        const dishes = data.rows;
        console.log(dishes);
        res.render(`menu`, { dishes });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });

  });
};
