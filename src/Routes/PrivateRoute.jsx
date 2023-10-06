import { Navigate, useLocation } from "react-router-dom";
import useAuthContext from "../hooks/useAuth";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuthContext();
  const location = useLocation();
  // console.log(location);

  if (loading) {
    return (
      <div className='flex justify-center items-center min-h-screen'>
        <span className='loading loading-spinner loading-lg text-secondary '></span>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to='/login'></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.object,
};
export default PrivateRoute;
