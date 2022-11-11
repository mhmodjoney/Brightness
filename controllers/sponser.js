const sponser = require("../models/sponser");

class sponser_controller {
  static async getall(req, res, next) {
    const s = await sponser.getall();
    if (!s.recordset) {
      res.status(500).json(s);
      next();
    }

    res.send(s.recordset);

    next();
  }

  static async getByid(req, res, next) {
    const s = await sponser.getone(req.params.id);
    if (!s.recordset) {
      res.status(500).json(s);
      next();
    }
    console.log(req.token_user);
    res.send(s.recordset);

    next();
  }

  static async insert(req, res, next) {
    const data = await sponser.create(req);
    if (data.originalError) {
      res.status(500).json(data);
      next();
    } else {
      res.send(data);
      next();
    }
  }

  static async update(req, res, next) {
    const data = await sponser.update(req, req.params.id);
    if (data.originalError) {
      res.status(500).json(data);
      next();
    } else {
      res.send(data);
      next();
    }
  }

  static async delete(req, res, next) {
    const data = await sponser.delete(req.params.id);
    if (data.originalError) {
      res.status(500).json(data);
      next();
    } else {
      res.send(data);
      next();
    }
  }
}

module.exports = sponser_controller;
