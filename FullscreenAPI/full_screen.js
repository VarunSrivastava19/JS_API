var elm = document.querySelector('.image'); //get element for full screen
function openFullscreen() {
    //check Browser support for fullscreen API:
    if(document.fullscreenEnabled) {
        //check element(tag) support for fullscreen API:
        if(elm.requestFullscreen) {
            //check if client is already in fullscreen:
            if(!document.fullscreenElement) {
                elm.requestFullscreen().catch(err => alert("Entering full screen mode"));
            } else {
                document.exitFullscreen();
            }

        }
    }
}
