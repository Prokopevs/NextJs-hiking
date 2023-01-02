import { Container, HeaderInner, Nav, StyledHeader } from "./Header.styled"
import logoPic from "../../public/summer/logo.png"
import Link from "next/link"
import s from "../../styles/Header.module.css"

const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <HeaderInner>
                    <div>
                        <img src={logoPic.src} alt="logo"></img>
                    </div>
                    <Nav>
                        <Link href="/" className={s.nav__link}>Tours</Link>
                        <Link href="/" className={s.nav__link}>Reviews</Link>
                    </Nav>
                </HeaderInner>
            </Container>
        </StyledHeader>
    )
}

export default Header
