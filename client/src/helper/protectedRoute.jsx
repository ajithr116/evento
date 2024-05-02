import { Route, useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem('token');
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }

  return <Route {...rest}>{children}</Route>;
};

export default ProtectedRoute;
