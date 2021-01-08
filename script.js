const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompot to select video streamm, pass to video element, the play
async function selectMediaStream(){
    try{
        // get the media stream 
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        console.log(`The Error from SelectMediaFunction is: ${error}`);
    }
}


button.addEventListener('click', async () => {
    //  disable the button 
    button.disabled = false;

    // await for the display mode
    await videoElement.requestPictureInPicture();

    // make the button free again
    button.disabled = true;
});

// on Load
selectMediaStream();