let buttons = Array.from(document.getElementsByClassName("number"));
let delete_input = false;
console.log(buttons)

document.getElementById("ce").addEventListener("click",ce)
document.getElementById("ac").addEventListener("click",ac)
document.getElementById("equals").addEventListener("click",clalculate)

function ce(){
    let text = document.getElementById("output").innerHTML;
    document.getElementById("output").innerHTML = text.slice(0,text.length-1);
}
function ac(){
    document.getElementById("output").innerHTML = ""
}

function onClickNumber(element) {
    if (delete_input) {
        ac()
        delete_input = false;
    }
    document.getElementById("output").innerHTML += element.innerHTML;
}

function clalculate(){
    document.getElementById("output").innerHTML = "="+eval(document.getElementById("output").innerHTML);
    delete_input = true;
}


buttons.forEach(element => {
    console.log("a")
    element.addEventListener("click", () => onClickNumber(element)); 
});
