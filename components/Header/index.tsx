import { Container, HeaderIMG, HeaderInner, Nav, StyledHeader } from "./Header.styled"
import logoPic from "../../public/summer/logo.png"
import Link from "next/link"
import s from "../../styles/Link.module.css"

type IHeader = {
    isFixed: boolean
}

const Header: React.FC<IHeader> = ({isFixed}) => {
    return (
        <StyledHeader isFixed={isFixed}>
            <Container>
                <HeaderInner isFixed={isFixed}>
                    <HeaderIMG src={logoPic.src} alt="logo" isFixed={isFixed}></HeaderIMG>
                    <Nav>
                        <Link href="/tours" className={s.nav__link}>
                            Tours
                        </Link>
                        <Link href="/reviews" className={s.nav__link}>
                            Reviews
                        </Link>
                    </Nav>
                </HeaderInner>
            </Container>
        </StyledHeader>
    )
}

export default Header
