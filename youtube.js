let vid = document.querySelector('.html5-video-player');

document.addEventListener('keydown', (e) => {
    if(e.code == 'KeyZ') {
        if(document.activeElement == vid) document.activeElement.blur()
        else vid.focus()
    }
})
