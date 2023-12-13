import User from "../models/User.js";

async function getUsers(req, res) {
  const users = await User.find();

  return res.status(200).json(users);
}

async function createUser(req, res) {
  const user = req.body;

  const newUser = await User.create(user);

  return res.json(newUser);
}

async function deleteUser(req, res) {
    const id = req.params.id;

    await User.findByIdAndDelete({_id: id});

    return res.status(200).json({res: "Usuário deletado com Sucesso!"});
  }

export {getUsers, createUser, deleteUser };