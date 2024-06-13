import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const auth = useSelector((state) => state.auth);

  return auth.token ? <Outlet /> : <Navigate to="/auth/signin" />;
};

export default PrivateRouter;
