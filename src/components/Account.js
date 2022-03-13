import React from "react";
import clases from "../styles/Account.module.css";

import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Account() {
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    await logout();
    history.push("/");
  }

  return (
    <div className={clases.account}>
      {/* If user login account then "currentUser is true then first condition is true otherwise
       secend condition is true The user needs to Login" */}

      {currentUser ? (
        <>
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          {/* is user login account then display current user name */}
          <span>{currentUser.displayName}</span>

          <span
            className="material-icons-outlined"
            title="Logout"
            onClick={handleSubmit}
          >
            logout
          </span>
        </>
      ) : (
        <>
          <Link to="/singup">Signup</Link>
          <Link to="/login">Login</Link>
        </>
      )}

      {/* <span className="material-icons-outlined" title="Logout"> logout </span>  */}
    </div>
  );
}
