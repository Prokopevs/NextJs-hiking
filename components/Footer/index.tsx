import React from "react"
import {
    AboutCol,
    Box,
    FooterColFirst,
    FooterColFourth,
    FooterColSecond,
    FooterColThird,
    FooterInner,
    FooterLogo,
    FooterMain,
    FooterSocial,
    FooterText,
    SocialItem,
    SocialItemPhoto,
} from "./Footer.styled"
import facebook from "../../public/contact/facebook.png"
import instagram from "../../public/contact/instagram.png"
import twitter from "../../public/contact/twitter.png"
import whatsapp from "../../public/contact/whatsapp.png"

const Footer = () => {
    return (
        <FooterMain>
            <Box>
                <FooterInner>
                    <FooterColFirst>
                        <FooterLogo>Title Here</FooterLogo>
                        <FooterText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Aliquam at dignissim nunc, id maximus ex. Etiam nec dignissim
                            elit, at dignissim enim.{" "}
                        </FooterText>

                        <FooterSocial>
                            <SocialItem>
                                <SocialItemPhoto
                                    src={facebook.src}
                                    alt=""
                                ></SocialItemPhoto>
                            </SocialItem>
                            <SocialItem>
                                <SocialItemPhoto
                                    src={instagram.src}
                                    alt=""
                                ></SocialItemPhoto>
                            </SocialItem>
                            <SocialItem>
                                <SocialItemPhoto
                                    src={twitter.src}
                                    alt=""
                                ></SocialItemPhoto>
                            </SocialItem>
                            <SocialItem>
                                <SocialItemPhoto
                                    src={whatsapp.src}
                                    alt=""
                                ></SocialItemPhoto>
                            </SocialItem>
                        </FooterSocial>
                    </FooterColFirst>

                    <FooterColSecond>
                        <FooterLogo>About</FooterLogo>

                        <AboutCol>History</AboutCol>
                        <AboutCol>Our Team </AboutCol>
                        <AboutCol>Brand Guidelines</AboutCol>
                        <AboutCol>Terms & Condition</AboutCol>
                        <AboutCol>Privacy Policy</AboutCol>
                    </FooterColSecond>

                    <FooterColThird>
                        <FooterLogo>Services</FooterLogo>

                        <AboutCol>How to Order</AboutCol>
                        <AboutCol>Our Product</AboutCol>
                        <AboutCol>Order Status</AboutCol>
                        <AboutCol>Promo</AboutCol>
                        <AboutCol>Payment Method</AboutCol>
                    </FooterColThird>

                    <FooterColFourth>
                        <FooterLogo>Other</FooterLogo>

                        <AboutCol>Contact Us</AboutCol>
                        <AboutCol>Help</AboutCol>
                        <AboutCol>Privacy</AboutCol>
                    </FooterColFourth>
                </FooterInner>
            </Box>
        </FooterMain>
    )
}

export default Footer
