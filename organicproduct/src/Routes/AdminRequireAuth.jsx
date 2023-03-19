import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const AdminRequireAuth = ({ children }) => {
  const { isAuth,isUser, isLogin } = useSelector((store) => store.userReducer);
  const { pathname } = useLocation();

  if (isUser.role==="admin" &&isAuth) {
    return children;
  } else if (isUser.role==="user"&&isLogin) { 
    return <Navigate to="/"/>
  }
  else {
    return (
      // Redirecting to Login page
      <Navigate
        to="/login"
        state={{ from: pathname }}
        replace
        // spacer
      />
    );
  }
};

export default AdminRequireAuth;