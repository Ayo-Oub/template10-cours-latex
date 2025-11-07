import '../styles/main.css'
import CardsCodeLatex from '../components/CardsCodeLatex';
// import copyImage from '../../public/images/copy.svg'
export default function Main() {
     return (
          <>
               <main className="main-content">
                    {/* Les symboles en Latex */}
                    <h3 id="symboles">Les Symboles en LaTeX.</h3>
                    <h5 id="math-base">Symboles mathématiques de base </h5>
                    <CardsCodeLatex id='0' />
                    <h5 id="geom-vect">📐 Symboles géométriques et vecteurs</h5>
                    <CardsCodeLatex id='6' />
                    <h5 id="ensembles">🔢 Ensembles et appartenance</h5>
                    <CardsCodeLatex id='13' />
                    <h5 id="logique">🧠 Logique et relations</h5>
                    <CardsCodeLatex />
               </main>
          </>
     );
}
