
// console.log(text)
// console.log(email)
// console.log(password)
// console.log(button)


let text = document.querySelector('#text')
let email = document.querySelector('#email')
let password = document.querySelector('#password')
let a_link = document.querySelector('#a_link')
let Goimg = document.querySelector('.img')
let mess = document.querySelector('.mess')
let h1_text = document.querySelector('.h1_text')
let h1_email = document.querySelector('.h1_email')
let h1_password = document.querySelector('.h1_password')

let button = document.querySelector('#btn')



button.addEventListener('click', function (e) {
    console.log(e.target)
    e.preventDefault()

    let textvalue = text.value
    let emailvalue = email.value
    let passwordvalue = password.value

  
    // if (textvalue === "") {
    //     alert('Please Enter Name')
    // }else if (emailvalue === "") {
    //     alert('Please Enter email')
    // }else if (passwordvalue === "") {
    //     alert('Please Set password')
    if((textvalue && emailvalue && passwordvalue) === ""){
        mess.innerHTML = '*Please Enter your Information'
        mess.style.color = 'rgba(255, 0, 0, 0.841)'
        mess.style.fontSize = "20px"
        mess.style.padding = "8px 22px"
        mess.style.fontWeight = "bolder"
        text.style.border =  '2px solid red'
        email.style.border =  '2px solid red'
        password.style.border =  '2px solid red'
        text.style.borderRadius =  '12px'
        email.style.borderRadius =  '12px'
        password.style.borderRadius =  '12px'
        password.style.borderRadius =  '12px'
        text.style.backgroundColor =  'rgba(255, 0, 0, 0.104)'
        email.style.backgroundColor =  'rgba(255, 0, 0, 0.104)'
        password.style.backgroundColor =  'rgba(255, 0, 0, 0.104)'

        
    }
    else if (e.target.id === 'btn') {
        a_link.style.display = 'block';
        button.style.display = 'none'
        text.style.display = 'none'
        email.style.display = 'none'
        password.style.display = 'none'
        Goimg.style.display = 'block'
        h1_text.style.display = 'none'
        h1_email.style.display = 'none'
        h1_password.style.display = 'none'
        mess.style.display = 'none'
    }

})
