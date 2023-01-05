import React from 'react'
import { Mountain, MountainsInner, MountainsPhoto, MountainsSubtitle, MountainsTest, MountainsTitle } from './Mountains.styled'
import shadow from "../../public/features/shadow.png"

const Mountains = () => {
  return (
    <Mountain>
        <MountainsPhoto src={shadow.src} alt=""></MountainsPhoto>
        <MountainsInner>
            <MountainsTest>
                <MountainsTitle>Hiking in the mountains</MountainsTitle>
                <MountainsSubtitle>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta non
                    nulla, nostrum deleniti aperiam rerum fugit illum voluptatibus excepturi at.</MountainsSubtitle>
            </MountainsTest>
        </MountainsInner>
    </Mountain>
  )
}

export default Mountains