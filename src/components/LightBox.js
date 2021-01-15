import React from 'react'
import { SRLWrapper } from "simple-react-lightbox"



export default function LightBox() {
    return (
        <SRLWrapper>
            <a href="/link/to/the/full/width/image.jpg">
                <img src="https://lh3.googleusercontent.com/proxy/H4oPwHEp1TyAIvUNJ3HhIzwPJZwZxu_G0THHlBUvn1HRVlYYHhHa_IAg59ilvhOsAyO92A0DJseT-ajKo8KBO5E9KEzU1me4DdI0NikKLpZ7" alt="Umbrella" />
            </a>
            <a href="/link/to/the/full/width/image_two.jpg">
                <img src="https://lh3.googleusercontent.com/proxy/H4oPwHEp1TyAIvUNJ3HhIzwPJZwZxu_G0THHlBUvn1HRVlYYHhHa_IAg59ilvhOsAyO92A0DJseT-ajKo8KBO5E9KEzU1me4DdI0NikKLpZ7" alt="Blue sky" />
            </a>
        </SRLWrapper>
    )
}