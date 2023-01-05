import {
    Work,
    WorksContent,
    WorksContentRight,
    WorksInner,
    WorksInnerRight,
    WorksItem,
    WorksMove1,
    WorksMove2,
    WorksPhoto,
    WorksText,
    WorksTitle,
} from "./Works.styled"
import photo1 from "../../public/work/1.jpg"
import photo2 from "../../public/work/2.jpg"
import photo3 from "../../public/work/3.jpg"
import photo4 from "../../public/work/4.jpg"
import { BtnYellow } from "../Button/Button.styled"

const Works = () => {
    return (
        <Work>
            <WorksItem>
                <WorksMove1 src={photo1.src} alt=""></WorksMove1>
            </WorksItem>

            <WorksItem>
                <WorksPhoto src={photo3.src} alt=""></WorksPhoto>
                <WorksContent>
                    <WorksInner>
                        <WorksTitle>Discount up to 50% All Excursions</WorksTitle>
                        <WorksText>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                            diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                            aliquam erat volutpat.
                        </WorksText>
                    </WorksInner>
                </WorksContent>
            </WorksItem>

            <WorksItem>
                <WorksPhoto src={photo4.src} alt=""></WorksPhoto>
                <WorksContentRight>
                    <WorksInnerRight>
                        <WorksTitle>January’s Promo: Buy 1 Get 1 Free!</WorksTitle>
                        <WorksText>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                            diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                            aliquam erat volutpat.
                        </WorksText>
                    </WorksInnerRight>
                </WorksContentRight>
            </WorksItem>

            <WorksItem>
                <WorksMove2 src={photo2.src} alt=""></WorksMove2>
            </WorksItem>
        </Work>
    )
}

export default Works
