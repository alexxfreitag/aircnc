//index, show, store, update, destroy
const User = require('../models/User');

module.exports = {
  async store(req, res) {
    const { email } = req.body;

    let user = await User.findOne({ email }); //pesquisa se o e-mail já foi cadastrado

    if (!user) {
      user = await User.create({ email }); //se não encontrar um usuário com o e-mail informado, cadastra um novo
    }    

    return res.json(user); //retorna o usuário
  }
};
