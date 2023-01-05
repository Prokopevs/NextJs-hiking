import Explore from "../components/Explore"
import Features from "../components/Features"
import Header from "../components/Header"
import Intro from "../components/Intro"
import Motivation from "../components/Motivation"
import Mountains from "../components/Mountains"
import Works from "../components/Works"
import { GlobalStyle } from "../styles/Global.styled"

export default function Home() {
    return (
        <div>
            <GlobalStyle />
            <Header />
            <Intro />
            <Motivation />
            <Features />
            <Works />
            <Mountains />
            <Explore />
        </div>
    )
}
