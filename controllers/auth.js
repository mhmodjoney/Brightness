const User = require("../models/user");
const jwt = require("jsonwebtoken");
const CryptoJS = require("crypto-js");
class Authcontroller {
  static async insert(req, res, next) {
    try {
      const pass = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.AES_SEC
      ).toString();
      req.body.password = pass;

      const data = await User.create(req);
      if (data.originalError) {
        res.status(500).json(data);
        next();
      } else {
        res.send(data);
        next();
      }
    } catch (err) {
      res.send(err);
      next();
    }
  }

  static async login(req, res, next) {
    try {
      const resp = await User.getbyemail(req.body.email);
      const user = resp.recordset[0];
      console.log(resp);
      if (!user) return res.status(402).json("no user with this email");

      const hashpass = CryptoJS.AES.decrypt(
        user.password,
        process.env.AES_SEC
      ).toString(CryptoJS.enc.Utf8);

      if (hashpass != req.body.password)
        return res.status(401).json("rong password");

      //const { password, ...others } = user._doc;
      console.log(user.password);
      const user_token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.TOKEN_SEC,
        { expiresIn: "3d" }
      );
      console.log(user.id);
      return res.status(200).json({ token: user_token });
    } catch (err) {
      return res.status(400).json(err);
    }
  }
}

module.exports = Authcontroller;
