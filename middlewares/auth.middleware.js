const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.query.token;

  jwt.verify(token, "masai", function (err, decoded) {
    if (err) {
      res.send("unauthorized access");
    }
    if (decoded) {
      console.log(decoded);
      next();
    }
  });
};

module.exports = auth
