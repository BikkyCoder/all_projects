let input_id = document.querySelector('#input_id')
let checkbox = document.querySelector('#checkbox')
let checkNumbers = document.querySelector('#checkNumbers')
let length = document.querySelector('#length')



function createPassword(length) {
    const str = 'ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    let pass = ""
    for (let i = 0; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)
    }
    return pass
}


function generatAndPushPassword() {

    let push = createPassword(10)

   input_id.textContent = "this" + push

   let intu = document.body.appendChild(input_id)


}
 console.log(generatAndPushPassword())













