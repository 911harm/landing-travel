import React from 'react'
import { SRLWrapper } from "simple-react-lightbox"

const options = {
    settings: {
        autoplaySpeed: 3000,
        boxShadow: 'none',
        disableKeyboardControls: true,
        disablePanzoom: false,
        disableWheelControls: false,
        hideControlsAfter: 3000,
        lightboxTransitionSpeed: 0.3,
        lightboxTransitionTimingFunction: 'linear',
        overlayColor: 'rgba(30, 30, 30, 0.9)',
        slideAnimationType: 'fade-out',
        slideSpringValues: [300, 50],
        slideTransitionSpeed: 0.6,
        slideTransitionTimingFunction: 'linear',
        usingPreact: false
    },
    buttons: {
        backgroundColor: 'rgba(30,30,36,0.8)',
        iconColor: 'rgba(255, 255, 255, 0.8)',
        iconPadding: '10px',
        showAutoplayButton: false,
        showCloseButton: false,
        showDownloadButton: false,
        showFullscreenButton: false,
        showNextButton: false,
        showPrevButton: false,
        showThumbnailsButton: false,
        size: '40px'
    },
    thumbnails: {
        showThumbnails: false
    }
}


export default function LightBox() {

    return (
        <SRLWrapper options={options}>
            <div>
                <img
                    src="https://freepngimg.com/thumb/symbol/87865-leaf-icons-button-mark-computer-green-check-thumb.png"
                    alt="Your information was sent successfully, we will be in contact with you" />
            </div>
        </SRLWrapper>
    )
}