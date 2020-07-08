import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import RequestProvider from "../../providers/requests";
import * as userActions from "../../store/actions/userActions";
import AuthForm from "../../components/auth/authForm";
import { GoogleLogin } from "react-google-login";
import config from "../../../config";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ message: [] });
  let history = useHistory();
  let dispatch = useDispatch();

  const validateAndRegisterGoogleAcc = async (user) => {
    // auth user with google account. Create new user if new.
    let res = await RequestProvider.post("/register/googleAuth", {
      user
    });

    handleLoginSuccess(res.user);
  };

  const responseGoogle = (response) => {
    let user = {
      username: `${response.profileObj.familyName} ${response.profileObj.givenName}`,
      email: response.profileObj.email,
      image: response.profileObj.imageUrl,
      googleId: response.googleId
    };

    validateAndRegisterGoogleAcc(user)
  }

  const onGoogleFail = () => {
    setErrors({ message: ["Google login failed"] });
  };

  const handleLoginSuccess = (user) => {
    // set required user info to storange, and redirect to home.
    localStorage.setItem("token", user.token);
    localStorage.setItem("user_id", user._id);
    dispatch(userActions.setUserToken(user.token));
    dispatch(userActions.setUser(user));
    history.push("/");
  };

  const validateAndLogin = async (email, password, fromGoogle) => {
    if ((email && password) || fromGoogle) {
      let res = await RequestProvider.post("/login", {
        email: email,
        password: password,
      });

      if (res.token) {
        handleLoginSuccess(res);
      } else {
        setErrors({ message: res.error });
      }
    } else {
      setErrors({ message: ["All fields must be filled"] });
    }
  };

  return (
    <AuthForm
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      submitFunction={() => validateAndLogin(email, password)}
      actionButton={
        <button type="submit" className="btn">
          Login
        </button>
      }
    >
      <GoogleLogin
        clientId={config.GOOGLE_CLIENT_ID}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={onGoogleFail}
        cookiePolicy={'single_host_origin'}
      />
      <NavLink className="register-link" to="/register">
        Register
      </NavLink>
      <p className="errorMessage">
        {errors.message.map((err, index) => {
          return <span key={index}>{err}</span>;
        })}
      </p>
    </AuthForm>
  );
};

export default LoginPage;
