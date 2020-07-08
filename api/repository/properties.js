import PropertiesModel from "../models/properties";
import Repository from "./repository";

const PropertiesRepository = {
  ...Repository(PropertiesModel)
};

export default PropertiesRepository;
