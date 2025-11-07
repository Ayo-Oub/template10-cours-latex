import "../styles/header.css";
import logoImg from "../../public/images/logo.svg";
export default function Headers() {
     return (
          <header className="navbar">
               <div className="logo">
                    <img alt="Logo"
                         src={logoImg} />
                    <h4>Code Latex Simple</h4>
               </div>
               <ul className="navbar-links">
                    <li>
                         <a href="#introduction">Accueil</a>
                    </li>
                    <li>
                         <a href="#installation">Cours</a>
                    </li>
                    <li>
                         <a href="#premiers-pas">À propos</a>
                    </li>
                    <li>
                         <a href="#structure-document">Contact</a>
                    </li>
               </ul>
          </header>
     );
}
