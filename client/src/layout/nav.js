import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { GoogleLogout } from "react-google-login";

import * as UserActions from "../store/actions/userActions";
import Dropdown from "../components/nav/dropdown";
import config from "../../config";

const Nav = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.userReducer.token);
  const user = useSelector((state) => state.userReducer.user);

  useEffect(() => {
    if (token && !user._id) {
      dispatch(UserActions.getUser(localStorage.getItem("user_id")));
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    dispatch(UserActions.setUser({}));
    dispatch(UserActions.setUserToken(""));
  };

  const getProfileIcon = () => {
    return <i className="material-icons nav-profile-icon">person</i>;
  };

  return (
    <header id="header">
      <ul className="nav-menu">
        <li className="nav-item">
          <NavLink exact className="nav-link" to="/">
            Home
          </NavLink>
        </li>
        {token && (
          <Dropdown icon={getProfileIcon()}>
            {user.googleId ? (
              <li>
                <GoogleLogout
                  clientId={config.GOOGLE_CLIENT_ID}
                  buttonText="Logout"
                  onLogoutSuccess={logout}
                  isSignedIn={true}
                >
                </GoogleLogout>
              </li>
            ) : (
                <li onClick={logout} className="nav-item">
                  <span className="nav-link">Logout</span>
                </li>
              )
            }
          </Dropdown>
        )}
      </ul>
    </header>
  );
};

export default Nav;
