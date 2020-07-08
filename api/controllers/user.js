import UserRepository from "../repository/user";

const PropertiesController = {
  generateToken: async (req, res) => {
    try {
      const data = await UserRepository.generateToken(req.body.email);

      res.status(200).send(data);
    } catch (error) {
      res.json({ error });
    }
  },
  getUser: async (req, res) => {
    try {
      const data = await UserRepository.findById(req.body.id);

      res.status(200).send(data);
    } catch (error) {
      res.json({ error });
    }
  },
  login: async (req, res) => {
    try {
      const data = await UserRepository.login(req.body);

      res.header("auth-token", data.token).send(data);
    } catch (error) {
      res.json({ error });
    }
  },
  register: async (req, res) => {
    try {
      const savedUser = await UserRepository.register(req.body);
      res.json({
        message: "User created",
        user: savedUser._id,
      });
    } catch (error) {
      res.json({ error });
    }
  },
  registerGoogleAccount: async (req, res) => {
    try {
      const savedUser = await UserRepository.registerGoogleAccount(req.body.user);
      res.json({
        message: "Google account auth success",
        user: savedUser
      });
    } catch (error) {
      res.json({ error });
    }
  },
};

export default PropertiesController;
