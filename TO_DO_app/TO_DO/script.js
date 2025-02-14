const taskInput = document.querySelector('#taskInput')
const btn = document.querySelector("#btn")
const taskList = document.querySelector('#taskList')
// const liList = document.querySelector('#liList')

btn.addEventListener('click', (e) => {
    //    console.log(e.target)
    // console.log(taskInput.value)

    if (taskInput.value === "") {
        alert('please enter a task')
        createEle.style.display = "none"

    }




    const createEle = document.createElement('li')
    createEle.className = 'liList_name'
    createEle.id = 'liList_id'
    createEle.style.backgroundColor = 'white'
    createEle.style.width = '190px'
    createEle.style.textalign = "center"
    createEle.style.justifycontent = "center"
    createEle.style.alignitems = "center"
    createEle.style.margin = "2px"
    createEle.style.fontSize = "19px"
    createEle.style.fontWeight = "bolder"
    createEle.style.borderRadius = "8px"
    createEle.style.padding = "5px 23px"
    createEle.style.overflow = "hiden"
    
    createEle.textContent = taskInput.value

    taskList.appendChild(createEle);
   

    taskInput.value = ""


    const Detbtn = document.createElement("button")
    console.log(Detbtn)
    Detbtn.className = 'Det_btn'
    Detbtn.id = 'Det_btn_id'
    Detbtn.textContent = "Delete"

    Detbtn.addEventListener('click', (e) => {
        // console.log(e.target)
        createEle.remove()
        Detbtn.remove()


    })

    Detbtn.style.backgroundColor = 'black'
    taskList.appendChild(Detbtn)

    // document.body.appendChild(createEle)







    console.log(createEle)














})

