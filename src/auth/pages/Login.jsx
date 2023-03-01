import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

export const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const onLogin = () => {
    login("Stefany Cesar");
    const lastPath = localStorage.getItem("lastPath") || "";
    navigate(lastPath, { replace: true });
  };
  return (
    <div className="mt-5 container">
      <h1>Login Page</h1>
      <hr />
      <button className="btn btn-primary" onClick={onLogin}>
        Login
      </button>
    </div>
  );
};
