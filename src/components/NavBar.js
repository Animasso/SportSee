import logo from "../assets/logoSport.png";
function NavBar(props) {
  return (
    <>
      <nav className="simpleNav">
        <div className="logo">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <ul className="navbar">
          <li>Accueil</li>
          <li>Profil</li>
          <li>Réglage</li>
          <li>Communauté</li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
