//calculate functions
let calculateBtn = document.querySelector('#calculate');
calculateBtn.addEventListener('click', () => {
    let output = document.querySelector('output');
    let firstNum = document.querySelector('#first-num').value;
    let secondNum = document.querySelector('#second-num').value;
    let operator = document.querySelector('#operator').value;

    try {
        in1 = parseFloat(firstNum);
        in2 = parseFloat(secondNum);
        if (in1 != firstNum) {
            throw new Error("Non-numerical first input");
        } else if (in2 != secondNum) {
            throw new Error("Non-numerical second input");
        }
        output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
    } catch (err) {
        console.log("Caught " + err);
        output.innerHTML = "Invalid input(s)";
    }

});

let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));



//error tracking
TrackJS.track('Testing TrackJS!');




//output
document.getElementById('log').addEventListener("click", () => {
    console.log("Logging a message into the console");
});

//error
document.getElementById('err').addEventListener("click", () => {
    console.error("Displaying an error message");
});

//table
document.getElementById('table').addEventListener("click", () => {
    console.table(["this", "is", "an", "array", "displayed", "as", "a", "table"]);
});

//declaring objects
let parent = {};
parent.name = "Parent";
parent.property1 = "hello";
parent.property2 = "world";
let kid = {};
kid.name = "Kid";
kid.childContent1 = "hi";
kid.childContent2 = "there";
parent.child = kid;

//displaying objects
document.getElementById('dir').addEventListener("click", () => {
    console.dir(parent);
});
document.getElementById('dirxml').addEventListener("click", () => {
    console.dirxml(parent);
});

//group functions
document.getElementById('start').addEventListener("click", () => {
    console.group();
});
document.getElementById('end').addEventListener("click", () => {
    console.groupEnd();
});

//time functions
document.getElementById('timer').addEventListener("click", () => {
    console.time("Timer");
});
document.getElementById('timeoff').addEventListener("click", () => {
    console.timeEnd("Timer");
});

//trace
function traceFn() {
    console.trace();
}
document.getElementById('trace').addEventListener("click", traceFn());


document.getElementById('global').addEventListener("click", () => {
    console.log(fakeVariable);
});