import Header from "../components/Header"
import Intro from "../components/Intro"
import { GlobalStyle } from "../styles/Global.styled"

export default function Home() {
    return (
        <div>
            <GlobalStyle />
            <Header />
            <Intro />
        </div>
    )
}
