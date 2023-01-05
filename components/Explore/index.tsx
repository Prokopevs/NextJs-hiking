import React from 'react'
import s from "../../styles/Link.module.css"
import { Container } from '../Header/Header.styled'
import { ExploreInner, ExploreSubtitle, ExploreTitle } from './Explore.styled'

const Explore = () => {
  return (
    <div className={s.explore}>
        <Container>
            <ExploreInner>
                <ExploreTitle>Explore</ExploreTitle>
                <ExploreSubtitle>The world</ExploreSubtitle>
            </ExploreInner>
        </Container>
    </div>
  )
}

export default Explore