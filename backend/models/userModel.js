const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})

//Static sign up method
userSchema.statics.signup = async function(email, password) {

  //validation
  if (!email || !password) {
    throw Error('Email and password are required')
  }

  if (!validator.isEmail(email)) {
    throw Error('Email is invalid')
  }

  if (!validator.isStrongPassword(password)) {
    throw Error('Password not strong enough')
  }

  const exists = await this.findOne({ email })

  if (exists) {
    throw new Error('Email already exists')
  }
  //hash the password
  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const user = await this.create({ email, password: hash })

  return user;

}

// static login method
userSchema.statics.login = async function(email, password) {
  
    //validation
    if (!email || !password) {
      throw Error('Email and password are required')
    }
  
    if (!validator.isEmail(email)) {
      throw Error('Email is invalid')
    }
  
    const user = await this.findOne({ email })
  
    if (!user) {
      throw new Error('Email does not exist')
    }
  
    const auth = await bcrypt.compare(password, user.password)
  
    if (!auth) {
      throw new Error('Password is incorrect')
    }
  
    return user
}

module.exports = mongoose.model('User', userSchema)