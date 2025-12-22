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



// localStorage.clear();


function todolist() {
    var currentTask = []
    if (localStorage.getItem('currentTask')) {
        currentTask = JSON.parse(localStorage.getItem('currentTask'))

    } else {
        console.log('task list is empty');




    }




    function renderTask() {
        localStorage.setItem('currentTask', JSON.stringify(currentTask));

        var allTask = document.querySelector('.allTask')
        let sum = '';
        currentTask.forEach((elem, idx) => {
            sum += `<div class="task">
        <h5>${elem.task} <span class=${elem.imp}>imp</span></h5>
        <button id=${idx}>mark as Completed</button>
        
        </div>`

        })

        allTask.innerHTML = sum;
        document.querySelectorAll('.task button').forEach((btn) => {
            btn.addEventListener('click', () => {
                currentTask.splice(btn.id, 1)
                renderTask()
            })
        })

    }
    renderTask();

    let form = document.querySelector('.addTask form');
    let taskInput = document.querySelector('.addTask form #task-input')
    let taskDetailsInput = document.querySelector('.addTask form textarea');
    let taskCheckbox = document.querySelector('.addTask form #check');

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
        taskCheckbox.checked = false
        taskInput.value = ""
        taskDetailsInput.value = ""

    })
}
todolist();

function dailyPlanner() {
    var dayPlanner = document.querySelector('.day-planner')

    var dayPlanData = JSON.parse(localStorage.getItem('dayPlanData')) || {}

    var hours = Array.from({ length: 18 }, (_, idx) => `${6 + idx}:00 - ${7 + idx}:00`)

    let wholeDaysum = ''

    hours.forEach((elem, idx) => {
        var savedData = dayPlanData[idx] || ''
        wholeDaysum += `
        <div class="day-planner-time">
            <p>${elem}</p>
            <input id="${idx}" type="text" placeholder="..." value="${savedData}">
        </div>`
    })

    dayPlanner.innerHTML = wholeDaysum

    document.querySelectorAll('.day-planner input').forEach((elem) => {
        elem.addEventListener('input', () => {
            dayPlanData[elem.id] = elem.value
            localStorage.setItem('dayPlanData', JSON.stringify(dayPlanData))
        })
    })
}

dailyPlanner()


function motivationalQuotes() {
    var motivationQuote = document.querySelector('.motivation-2 h1')
    var motivationAuthor = document.querySelector('.motivation-3 h2')

    async function fetchQuote() {
        let response = await fetch('https://api.quotable.io/random')
        let data = await response.json()
        motivationQuote.innerHTML = data.content
        motivationAuthor.innerHTML = data.author
    }
    fetchQuote()
}
motivationalQuotes();


function pomodorotimerhai(){
    let timer = document.querySelector('.pomo-timer h1');
let startBtn = document.querySelector('.pomo-timer .start-timer')
let pauseBtn = document.querySelector('.pomo-timer .pause-timer')
let resetBtn = document.querySelector('.pomo-timer .reset-timer')
let session =document.querySelector('.Phomodoro-timer-fullpage .session')
let isWorksession=true

var timerInterval = null
let totalSeconds = 25 * 60;
function updateTimer() {
    let minutes = Math.floor(totalSeconds / 60)
    let seconds = totalSeconds % 60;

    timer.innerHTML = `${String(minutes).padStart('2', '0')}:${String(seconds).padStart('2', '0')}`


}
function startTimer() {
    clearInterval(timerInterval)

    if(isWorksession){
    

        totalSeconds=25*60
         timerInterval = setInterval(() => {
        if (totalSeconds > 0) {

            totalSeconds--
            updateTimer()
        } else {
            isWorksession=false
            clearInterval(timerInterval)
         timer.innerHTML='05:00'
           session.innerHTML='Break session'
           session.style.backgroundColor='var(--red)'
        }

    }, 1000);
    }else{
          
           totalSeconds=5*60
         timerInterval = setInterval(() => {
        if (totalSeconds > 0) {

            totalSeconds--
            updateTimer()
        } else {
            isWorksession=true
            clearInterval(timerInterval)
              timer.innerHTML='25:00'
                  session.innerHTML='Work session'
     session.style.backgroundColor='var(--green)'
             
           

        }

    },1000 );
    }

   


}
function puaseTimer() {
    clearInterval(timerInterval)
}
function resetTimer() {
    totalSeconds = 25 * 60
    clearInterval(timerInterval)
    updateTimer()
}
startBtn.addEventListener('click', startTimer)
pauseBtn.addEventListener('click', puaseTimer)
resetBtn.addEventListener('click', resetTimer)

}
pomodorotimerhai();