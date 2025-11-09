import React, { useState } from 'react'
import {BlockMath, InlineMath} from 'react-katex'
import 'katex/dist/katex.min.css'
import '../styles/card-code-latex.css'
import copyImage from '../../public/images/copy.svg'
export default function CardCodeLatex({ codeLtx, formulaMath }) {
  const [isCopy, setIsCopy] = useState(false);
  function handleCopy() {
    navigator.clipboard.writeText(codeLtx).then(() => {
      setIsCopy(true);
      setTimeout(() => setIsCopy(false), 3000);
    })
  }
  return (
    <>
      {isCopy && <p className='code-copied'>Le code est copié.</p>}
      <div className='latex-container'>
        <img className='copy-image' src={copyImage} onClick={handleCopy} />
        <div className='symbole-latex-container'>
          <p className='symbole-latex' onClick={handleCopy} >
            <InlineMath math={formulaMath} />
          </p>
          <p>{codeLtx}</p>
          </div>
      </div>
    </>
  )
}
