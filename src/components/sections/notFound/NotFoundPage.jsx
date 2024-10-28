import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <p> 404 NotFound</p>
      <Link to="/"> Home</Link>
    </div>
  );
};

export default NotFoundPage;
