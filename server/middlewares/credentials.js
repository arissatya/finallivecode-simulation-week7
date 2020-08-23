const jwt = require('jsonwebtoken')
const { User, Inventory } = require('../models')

function authentic(req, res, next) {
  const payload = jwt.verify(req.headers.access_token, 'rahasia')
  if (!payload) {
    next({
      status: 401,
      message: "not allowed"
    })
  } else {
    User.findOne({
      where: { email: payload }
    })
      .then(user => {
        req.UserId = user.id
        next()
      })
      .catch(err => {
        next({
          status: 401,
          message: "not allowed"
        })
      })
  }
}

function authorize(req, res, next) {
  Inventory.findOne({
    where: { id: req.UserId }
  })
  .then(user => [
    next()
  ])
  .catch(err =>{
    next({
      status: 401,
      message: 'unathorize'
    })
  })
}

module.exports = { authentic, authorize }