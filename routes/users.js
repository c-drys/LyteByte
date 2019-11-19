/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */


module.exports = (app, db) => {

  app.get("/menu", (req, res) => {
    db.query(`SELECT * FROM dishes;`)
      .then(data => {
        const dishes = data.rows;
        res.json({ dishes });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

};
