const { User, Inventory } = require('../models')
const { comparePassword } = require('../helpers')
const { userToken } = require('../helpers')

class Controller {
  static async register(req, res, next) {
    try {
      const register = await User.create({
        email: req.body.email,
        password: req.body.password,
      })
      res.status(201).json({
        email: register.email,
        password: register.password,
      })
    } catch (err) {
      next(err)
    }

  }
  static async login(req, res, next) {
    try {
      const user = await User.findOne({
        where: { email: req.body.email }
      })
      if (user) {
        const valid = comparePassword(req.body.password, user.password)
        if (valid) {
          const access_token = userToken(user.email)
          res.status(200).json({
            access_token
          })
        } else {
          throw err
        }
      } else {
        throw err
      }
    } catch (err) {
      next({
        message: 400,
        message: 'password / email invalid'
      })
    }
  }

  static async fetch(req, res, next) {
    try {
      const inventory =  await Inventory.findAll()
      res.status(200).json(inventory)
    } catch (err) {
      next({
        status: 500,
        message: 'internal server error'
      })
    }
  }
}

module.exports = Controller