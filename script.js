let display = document.getElementById("display");

function appendValue(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function deleteLast(){
    display.value = display.value.slice(0, -1);
}

function calculate(){

    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";

        setTimeout(() => {
            display.value = "";
        },1500);
    }
}

/* Keyboard Support */

document.addEventListener("keydown",(event)=>{

    const key = event.key;

    if(
        !isNaN(key) ||
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/" ||
        key === "." ||
        key === "%"
    ){
        appendValue(key);
    }

    else if(key === "Enter"){
        calculate();
    }

    else if(key === "Backspace"){
        deleteLast();
    }

    else if(key === "Escape"){
        clearDisplay();
    }
});
