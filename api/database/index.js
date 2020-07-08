const Database = {
  find: async (model) => {
    try {
      return await model.find({});
    } catch (error) {
      throw error;
    }
  },
  findOne: async (model, searchBy) => {
    try {
      return await model.findOne(searchBy);
    } catch (error) {
      throw error;
    }
  },
  findById: async (model, id) => {
    try {
      return await model.findById(id);
    } catch (error) {
      throw error;
    }
  },
  put: async (model, id, body) => {
    try {
      return await model.findByIdAndUpdate(id, body, { new: true });
    } catch (err) {
      throw err;
    }
  },
  post: async (model) => {
    try {
      return await model.save();
    } catch (err) {
      throw err;
    }
  },
};

export default Database;
