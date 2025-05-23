const display = document.querySelector('#display');
const buttons = document.querySelector('.buttons');

let appendDisplay = '';
buttons.addEventListener('click', function(el){
    if(!el.target.classList.contains('button')) return;
    const target = el.target;
    const targetContent = target.textContent;
    if(target.classList.contains('equal')){
        if(!appendDisplay) return;
        display.value = eval(appendDisplay);
        appendDisplay = display.value;

    } else if(target.classList.contains('delete')){
        const tempDisplay = display.value;
        appendDisplay = display.value = tempDisplay.slice(0, -1);
    }
    else if(target.classList.contains('clear')){
        appendDisplay = '';
        display.value = '';
    }
     else{
        appendDisplay += targetContent;
        display.value = appendDisplay;
    }
}
    
);




