function sum(){
    var num1 = document.getElementById("num1").valueAsNumber;
    var num2 = document.getElementById("num2").valueAsNumber;
    var res = (num1 + num2);
    document.getElementById("resSoma").textContent = res.toFixed(2);
}

function sub(){
    var num1 = document.getElementById("num3").valueAsNumber;
    var num2 = document.getElementById("num4").valueAsNumber;
    var res = (num1 - num2);
    document.getElementById("resSub").textContent = res.toFixed(2);
}

function div(){
    var num1 = document.getElementById("num5").valueAsNumber;
    var num2 = document.getElementById("num6").valueAsNumber;
    var res = (num1 / num2);
    document.getElementById("resDiv").textContent = res.toFixed(2);
    
}

function mult(){
    var num1 = document.getElementById("num7").valueAsNumber;
    var num2 = document.getElementById("num8").valueAsNumber;
    var res = (num1 * num2);
    document.getElementById("resMult").textContent = res.toFixed(2);
}

function med(){
    var num1 = document.getElementById("num9").valueAsNumber;
    var num2 = document.getElementById("num10").valueAsNumber;
    var res = ((num1 + num2)/2);
    document.getElementById("resMed").textContent = res.toFixed(2)
}

function clear(){
    console.log("cu");
}

