import { Container, HeaderIMG, HeaderInner, Nav, StyledHeader } from "./Header.styled"
import logoPic from "../../public/summer/logo.png"
import Link from "next/link"
import s from "../../styles/Link.module.css"

const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <HeaderInner>
                    <HeaderIMG src={logoPic.src} alt="logo"></HeaderIMG>
                    <Nav>
                        <Link href="/" className={s.nav__link}>
                            Tours
                        </Link>
                        <Link href="/" className={s.nav__link}>
                            Reviews
                        </Link>
                    </Nav>
                </HeaderInner>
            </Container>
        </StyledHeader>
    )
}

export default Header
