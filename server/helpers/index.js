const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

function hashPasword(password) {
  const salt = bcrypt.genSaltSync(5)
  return bcrypt.hashSync(password, salt)
}

function comparePassword(password, hash) {
  return bcrypt.compareSync(password, hash)
}

function userToken(payload) {
  console.log('DISIIIIEEEEEEEEEEEEEEEEE');
  const token = jwt.sign(payload, 'rahasia')
  return token
}

module.exports = { hashPasword, comparePassword, userToken }