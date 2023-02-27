import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";

export const Login = () => {
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const onLogin = () => {
    login("Esteban");
    navigate("/", { replace: true });
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
