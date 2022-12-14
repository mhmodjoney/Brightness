const jwt = require("jsonwebtoken");



const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;
    if (authHeader) {
      const token = authHeader.split(" ")[1];
      jwt.verify(token, process.env.TOKEN_SEC, (err, token_user) => {
        if (err) res.status(403).json("Token is not valid!");
        req.token_user = token_user;
        next();
      });
    } else {
      return res.status(401).json("You are not authenticated!");
    }
  };


  const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
      if (req.token_user.id === req.params.id ||req.token_user.email==process.env.admin_email) {
        next();
      } else {
        res.status(403).json("You are not alowed to do that!");
      }
    });
  };
  
  const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
      if (req.token_user.email==process.env.admin_email) {
        next();
      } else {
        res.status(403).json("You are not alowed to do that!");
      }
    });
  };


  module.exports = {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,verifyTokenAndAuthorizationCart
  };
  
