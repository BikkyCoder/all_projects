const body = document.querySelector('body')





const button = document.createElement('Button')
button.className = 'btn'
button.id = 'btnid'

button.innerHTML = 'Thanks For Clicked'


click = false


button.addEventListener('click', function (e) {
    console.log(e.target)

    const button2 = document.createElement('Button')
    button2.className = 'btn2'
    button2.id = 'btnid2'


    button2.innerHTML = 'Thanks For Clicked button 2'

    document.body.appendChild(button2)

})





document.body.appendChild(button)




console.log(button)

console.log(body)