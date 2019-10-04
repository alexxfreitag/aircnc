const mongoose = require('mongoose')

const BookingSchema = new mongoose.Schema({
  date: String,
  approved: Boolean,
  //faz relacionamento com o usuário
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  //faz relacionamento com o spot
  spot: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Spot'
  }
})

module.exports = mongoose.model('Booking', BookingSchema)