import { Link } from "react-router-dom";

const Button = ({ content, path }) => {
  return (
    <Link to={path} className="btn">
      {content}
    </Link>
  );
};

export default Button;
