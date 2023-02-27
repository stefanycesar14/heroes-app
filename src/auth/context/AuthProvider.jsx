import { useReducer } from "react";
import { types } from "../types/types";
import { AuthContext } from "./authContext";
import { authReducer } from "./authReducer";

const initialState = {
  logged: false,
};
export const AuthProvider = ({ children }) => {
  const [authState, distpach] = useReducer(authReducer, initialState);

  const login = (name = "") => {
    const action = {
      type: types.login,
      payload: {
        id: "abc",
        name: name,
      },
    };
    distpach(action);
  };
  return (
    <AuthContext.Provider value={{ ...authState, login: login }}>
      {children}
    </AuthContext.Provider>
  );
};
