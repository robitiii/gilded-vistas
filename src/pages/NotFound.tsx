import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import './NotFound.css';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for does not exist or has been moved.</p>
        <Link to="/" className="not-found-link">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
