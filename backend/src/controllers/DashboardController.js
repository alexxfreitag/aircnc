const Spot = require('../models/Spot')

module.exports = {
  
  async show(req, res) {
    
    const { user_id } = req.headers 

    //busca os spots se baseando no usuário
    const spots = await Spot.find({ user: user_id })

    return res.json(spots)
  }
}