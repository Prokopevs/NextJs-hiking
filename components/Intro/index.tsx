import { IntroStyled } from "./Intro.styled"
import backgroundImg from "../../public/intro/1.jpg"

const Intro = () => {
    return (
        <>
        <IntroStyled src={backgroundImg.src} alt="logo"/>
            
            {/* <div class="container">
                <div class="intro__inner">
                    <h1 class="intro__title">IT´S TIME<br> FOR HIKING</h1>
                    <h2 class="intro__subtitle">LOREMIPSUM DOLOR</h2>
                    <a class="btn btn--white" href="#">Read more</a>
                    <h2 class="intro__after">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do iusmod tempor
                        incididunt ut labore et dolore magna.</h2>
                </div>
            </div>  */}
        </>
    )
}

export default Intro