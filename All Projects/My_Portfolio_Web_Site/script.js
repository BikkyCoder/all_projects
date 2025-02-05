function scrollLeft(){
    document.getElementById('scroll_bar').scrollBy({
        left : -100,
        behavior : 'smooth'
    })
}

function scrollRight(){
    document.getElementById('scroll_bar').scrollBy({
        left: 100,
        behavior: 'smooth'
    })
}