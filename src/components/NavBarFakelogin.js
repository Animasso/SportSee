import logo from "../assets/logoSport.png";
/**
 * Navigaton bar
 * @returns {JSX}
 */
function NavBarFakelogin(props) {
  return (
    <>
      <nav className="simpleNav">
        <img className="logo" src={logo} alt="logo" />
      </nav>
    </>
  );
}

export default NavBarFakelogin;
