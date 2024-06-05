//console buttons

let consoleLog = document.getElementById('log');
consoleLog.addEventListener('click', () => {
    console.log("Console Log Demo");
});

let consoleErr = document.getElementById('err');
consoleErr.addEventListener('click', () => {
    console.error("Console Error Demo");
});

let consoleCount = document.getElementById('count');
consoleCount.addEventListener('click', () => {
    console.count();
});

let consoleWarn = document.getElementById('warn');
consoleWarn.addEventListener('click', () => {
    console.warn("Console Warn Demo");
});

let consoleAssert = document.getElementById('assert');
consoleAssert.addEventListener('click', () => {
    let x = 5, 
        y = 4;
    console.assert(x < y, "x is expected to be less than y");
});

let consoleClear = document.getElementById('clear');
consoleClear.addEventListener('click', () => {
    console.clear();
});

let consoleDir = document.getElementById('dir');
consoleDir.addEventListener('click', () => {
    console.dir(document.head);
});

let consoleDirXML = document.getElementById('dirxml');
consoleDirXML.addEventListener('click', () => {
    console.dirxml(document.head);
});

const label = "New group start";
let consoleGroupStart = document.getElementById('group-start');
consoleGroupStart.addEventListener('click', () => {
    console.group(label);
});

let consoleGroupEnd = document.getElementById('group-end');
consoleGroupEnd.addEventListener('click', () => {
    console.groupEnd(label);
});

const topics = [
    {
        name: 'Machine Learning',
        time: '12 hours',
        prerequisites: 'Computer Science'
    },
    {
        name: 'Computer Science',
        time: '10 hours',
    },
    {
        name: 'Physics',
        time: '9 hours',
    }
];
let consoleTable = document.getElementById('table');
consoleTable.addEventListener('click', () => {
    console.table(topics);
});

let consoleStartTime = document.getElementById('start-timer');
consoleStartTime.addEventListener('click', () => {
    console.time();
});

let consoleEndTime = document.getElementById('end-timer');
consoleEndTime.addEventListener('click', () => {
    console.timeEnd();
});

let consoleTrace = document.getElementById('trace');
consoleTrace.addEventListener('click', () => {
    const first = () => { second(); };
    const second = () => { third(); };
    const third = () => { fourth(); };
    const fourth = () => { console.trace(); };
    first();
});


//try-catch and throwing custom errors
class CustomError extends Error{
    constructor(message){
        super(message);
        this.name = "My super custom error to check for numbers";
    }
}


let form = document.querySelector('form');
form.addEventListener('submit', e => {
    e.preventDefault();
    let output = document.querySelector('output');
    let firstNum = document.querySelector('#first-num').value;
    let secondNum = document.querySelector('#second-num').value;
    let operator = document.querySelector('#operator').value;
    try {
        output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
    } catch (error) {
        console.error('One of your values is not valid syntax.');
        if(isNaN(firstNum)){
            throw new CustomError("The first input is not a number.");
        }
        if(isNaN(secondNum)){
            throw new CustomError("The second input is not a number.");
        }
    }
});

let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

//global errors and 3rd party tracking
let globalErr = document.getElementById('global-err');
globalErr.addEventListener('click', () => {
    throw new Error("This caused a global error becauase you asked for it.")
});

window.onerror = (a, b, c, d, e) => {
    console.log(`message: ${a}`);
    console.log(`source: ${b}`);
    console.log(`lineno: ${c}`);
    console.log(`colno: ${d}`);
    console.log(`error: ${e}`);
  
    return true;
};

TrackJS.track('Testing TrackJS!');
                        