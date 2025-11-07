import React from 'react'
import {BlockMath, InlineMath} from 'react-katex'
import 'katex/dist/katex.min.css'
import '../styles/card-code-latex.css'
import copyImage from '../../public/images/copy.svg'
export default function CardCodeLatex({codeLtx, formulaMath}) {
  return (
    <>
      <div className='latex-container'>
        <img className='copy-image' src={copyImage} />
        <div className='symbole-latex-container'>
          <p className='symbole-latex'>
            <InlineMath math={formulaMath} />
          </p>
          <p>{codeLtx}</p>
          </div>
      </div>
    </>
  )
}
