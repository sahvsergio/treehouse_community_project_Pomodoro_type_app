// create an array for tasks
let tasks=[];
let buttonNames=['Start Pomodoro', 'Stop Pomodoro', 'Start Brek'];

function createButtons(arr){
    let buttons='';
    for (let i=0;i < arr.length; i++){
        buttons+=`<button class="btn">${arr[i]}</button>`;



    }
    return buttons;
}

document.querySelector("#buttons").innerHTML=`${createButtons(buttonNames)}`;