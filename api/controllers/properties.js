import PropertiesRepository from "../repository/properties";

const PropertiesController = {
  getAll: async (req, res) => {
    try {
      const data = await PropertiesRepository.getAll();
      res.status(200).send(data);
    } catch (error) {
      res.json({ error: error });
    }
  }
};

export default PropertiesController;
