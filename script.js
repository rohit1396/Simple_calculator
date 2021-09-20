function clicked(value){
    let resultBox = document.getElementById("result");
    resultBox.value+=value;
}

function evaluateResult(){
    let resultBox = document.getElementById("result");
    if(resultBox.value.length>0)
        resultBox.value=eval(resultBox.value)
}

function clearResult(){
    let resultBox = document.getElementById("result");
    let resultVal = resultBox.value;
    resultBox.value=resultVal.substring(0,resultVal.length-1);
}

function switchMode(){
    let theme = document.getElementById("theme");
    theme.classList.toggle('dark-mode');
}