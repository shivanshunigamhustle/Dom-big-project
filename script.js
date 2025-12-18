function openFeature(){
    const allElems= document.querySelectorAll('.elem');
let fullelems=document.querySelectorAll('.fullElem');
let allbackbtn=document.querySelectorAll('.fullElem .back');

allElems.forEach((elem)=>{
elem.addEventListener('click',()=>{
   fullelems[elem.id].style.display='block';

})    
})
allbackbtn.forEach((back)=>{
back.addEventListener('click',()=>{
    fullelems[back.id].style.display="none"
    
})    
})
}
openFeature();

let form=document.querySelector('.addTask form');
let taskInput=document.querySelector('.addTask form input')
let taskDetailsInput=document.querySelector('.addTask form textarea')
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(taskInput.value);
    console.log(taskDetailsInput.value);
    
    
})