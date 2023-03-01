import { Route, Routes } from "react-router-dom";
import { Login } from "../auth/pages";
import { PrivateRoute } from "../auth/routes/PrivateRoute";
import { PublicRoute } from "../auth/routes/PublicRoute";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRoute>
              <HeroesRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};
