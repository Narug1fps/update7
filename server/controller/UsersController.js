import UsersModel from "../model/UserModel.js";

export const verify = async (req, res) => {
    try {
      const userData = new UsersModel(req.body);
      const { email } = userData;
      const userExist = await UsersModel.findOne({ email });
      if (userExist) {
        return res.status(400).json({ message: "User already exists." });
      }
     res.status(200).json({ message: "User already not exists." });
    } catch (error) {
      res.status(500).json({
        message: "Erro interno do servidor",
      });
    }
  };