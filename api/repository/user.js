import DB from "../database";
import Repository from "./repository";
import UserModel from "../models/user";
import { LoginValidation, RegisterValidation } from "../validation";
import bcrypt from "bcryptjs";
import cryptoRandomString from "crypto-random-string";
import jwt from "jsonwebtoken";

const UserRepository = {
  ...Repository(UserModel),
  findOne: async (searchBy) => {
    try {
      const data = await DB.findOne(UserModel, searchBy);
      const userData = {
        email: data.email,
        username: data.username,
        _id: data._id,
        image: data.image,
        token: data.token
      };

      return userData;
    } catch (error) {
      throw error;
    }
  },
  generateToken: async (email) => {
    const user = await DB.findOne(UserModel, {
      email: email,
    });
    if (!user) {
      throw ["No user with that email"];
    } else {
      const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
      return { token: token };
    }
  },
  login: async (body) => {
    try {
      const { error } = LoginValidation(body);

      if (error) {
        let errorMessages = error.details.map((err) => err.message);
        throw errorMessages;
      }

      // Find user
      const user = await DB.findOne(UserModel, {
        email: body.email,
      });

      if (!user) {
        throw ["Email or password is wrong"];
      }

      // Check password
      const validPass = await bcrypt.compare(body.password, user.password);
      if (!validPass) {
        throw ["Invalid Password"];
      }

      const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
      return {
        token: token,
        _id: user._id,
        username: user.username,
        email: user.email,
        image: user.image,
      };
    } catch (err) {
      throw err;
    }
  },
  register: async (body) => {
    try {
      const { error } = RegisterValidation(body);
      if (error) {
        let errorMessages = error.details.map((err) => err.message);
        throw errorMessages;
      }

      // Check availability
      const emailExists = await DB.findOne(UserModel, {
        email: body.email,
      });

      if (emailExists) {
        throw ["User with that email already exists"];
      }

      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(body.password, salt);

      const user = new UserModel({
        username: body.username,
        password: hashPassword,
        email: body.email,
      });

      const savedUser = await DB.post(user);

      return savedUser;
    } catch (err) {
      throw err;
    }
  },
  registerGoogleAccount: async (body) => {
    try {
      // Check availability
      const existingUser = await DB.findOne(UserModel, {
        email: body.email,
      });

      if (existingUser) {
        const token = jwt.sign({ _id: existingUser._id }, process.env.TOKEN_SECRET);

        return {
          token: token,
          _id: existingUser._id,
          username: existingUser.username,
          email: existingUser.email,
          image: existingUser.image || body.image,
          googleId: existingUser.googleId || body.googleId
        };
      } else {
        // Generate random password
        const password = cryptoRandomString({ length: 15, type: 'base64' });

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        const user = new UserModel({
          username: body.username,
          password: hashPassword,
          email: body.email,
          image: body.image,
          googleId: body.googleId
        });

        const savedUser = await DB.post(user);

        const token = jwt.sign({ _id: savedUser._id }, process.env.TOKEN_SECRET);

        return {
          token: token,
          _id: user._id,
          username: user.username,
          email: user.email,
          image: user.image,
          googleId: user.googleId
        };
      }

    } catch (err) {
      throw err;
    }
  },
};

export default UserRepository;
