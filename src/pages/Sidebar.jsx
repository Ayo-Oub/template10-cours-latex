import '../styles/sidebar.css'

export default function Sidebar() {
     return (
          <>
               <aside className="sidebar">
                    <ul className="sidebar-links">
                         <li>
                              <a href="#symboles">Les Symboles
                              </a>
                              <ul className="sidebar-sous-links">
                                   <li><a href="#math-base">Symboles mathématiques de base</a></li>
                                   <li><a href="#geom-vect">Symboles géométriques et vecteurs</a></li>
                                   <li><a href="#ensembles">Ensembles et appartenance</a></li>
                                   <li><a href="#logique">Logique et relations</a></li>
                                   <li><a href="#accolades">Accolades</a></li>
                              </ul>
                         </li>
                    </ul>
               </aside>
       </>   
     );
}