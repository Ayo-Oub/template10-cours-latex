import React from 'react'
import CardCodeLatex from './CardCodeLatex'
import '../styles/card-code-latex.css'
import codsLtx from '../codsLtx'
export default function CardsCodeLatex({ id }) {
 

  return (
    <div className='card-container'>
      {id === "0" && codsLtx.slice(0, 6).map((index) => (
        <CardCodeLatex codeLtx={index.codeLtx} formulaMath={index.formulaMath} key={index.id} />
      ))}

      {id === "6" && codsLtx.slice(6, 13).map((index) => (
        <CardCodeLatex codeLtx={index.codeLtx} formulaMath={index.formulaMath} key={index.id} />
      ))}

      {
        id === "13" && codsLtx.slice(13, 22).map((index) => (
          <CardCodeLatex codeLtx={index.codeLtx} formulaMath={index.formulaMath} key={index.id} />
        ))
      }
    </div>
  )
}
