function openFeature() {
    const allElems = document.querySelectorAll('.elem');
    let fullelems = document.querySelectorAll('.fullElem');
    let allbackbtn = document.querySelectorAll('.fullElem .back');

    allElems.forEach((elem) => {
        elem.addEventListener('click', () => {
            fullelems[elem.id].style.display = 'block';

        })
    })
    allbackbtn.forEach((back) => {
        back.addEventListener('click', () => {
            fullelems[back.id].style.display = "none"

        })
    })
}
openFeature();

let form = document.querySelector('.addTask form');
let taskInput = document.querySelector('.addTask form #task-input')
let taskDetailsInput = document.querySelector('.addTask form textarea');
let taskCheckbox = document.querySelector('.addTask form #check');
 
// localStorage.clear();
var currentTask = []
if(localStorage.getItem('currentTask')){
  currentTask=JSON.parse(localStorage.getItem('currentTask'))
    
}else{
    console.log('task list is empty');
    
  
  
    
}




function renderTask() {
      localStorage.setItem('currentTask',JSON.stringify(currentTask));

    var allTask = document.querySelector('.allTask')
    var sum = '';
    currentTask.forEach((elem,idx) => {
        sum += `<div class="task">
        <h5>${elem.task} <span class=${elem.imp}>imp</span></h5>
        <button id=${idx}>mark as Completed</button>
        
        </div>`

    })

    allTask.innerHTML = sum;
   
}
renderTask();

form.addEventListener('submit', (e) => {
    e.preventDefault();
    currentTask.push(
        {
            task: taskInput.value,
            details: taskDetailsInput.value,
            imp: taskCheckbox.checked
        }
    )
     renderTask()
   
      
    taskInput.value=''
     taskDetailsInput.value=''
     taskCheckbox.checked=false
     })

   

var markscomplebtn= document.querySelectorAll('.task button')
markscomplebtn.forEach((btn)=>{
btn.addEventListener('click',()=>{
 currentTask.splice

})
})
