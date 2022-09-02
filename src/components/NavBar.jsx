import Button from "./Button";

const NavBar = () => {
  return (
    <nav className="nav">
      <Button content="Search" path="/search" />
      <Button content="Home" path="/home" />
    </nav>
  );
};

export default NavBar;
