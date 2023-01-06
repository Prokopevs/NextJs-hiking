import React from 'react'
import { QuotePhoto, MainQuote, QuoteInner, QuoteSubtitle, QuoteTitle, QuoteSubhead } from './Quote.styled'
import shadow from "../../public/features/shadow2.png"

const Quote = () => {
  return (
    <MainQuote>
        <QuotePhoto src={shadow.src} alt=""></QuotePhoto>
        <QuoteInner>
            <QuoteTitle>“</QuoteTitle>
            <QuoteSubtitle>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta non nulla,
                nostrum deleniti aperiam rerum fugit illum voluptatibus excepturi at.</QuoteSubtitle>
            <QuoteSubhead>Lorem ipsum</QuoteSubhead>
        </QuoteInner>
    </MainQuote>
  )
}

export default Quote