document.addEventListener('keydown', function(event) {
    switch (event.key) {
        case "ArrowLeft":
            console.log('Left')
            document.querySelector('.prev a').click()
            break;
        case "ArrowRight":
            console.log('Right')
            document.querySelector('.next a').click()
            break;
    }
});