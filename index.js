
//dette er tallknappene

//1
document.getElementById("1").addEventListener("click", function(){
    document.getElementById("tall").innerHTML += "1"
});
//2
document.getElementById("2").addEventListener("click", function(){
    document.getElementById("tall").innerHTML += "2"
});
//3
document.getElementById("3").addEventListener("click", function(){
    document.getElementById("tall").innerHTML += "3"
});
//4
document.getElementById("4").addEventListener("click", function(){
    document.getElementById("tall").innerHTML += "4"
});
//5
document.getElementById("5").addEventListener("click", function(){
    document.getElementById("tall").innerHTML += "5"
});
//6
document.getElementById("6").addEventListener("click", function(){
    document.getElementById("tall").innerHTML += "6"
});
//7
document.getElementById("7").addEventListener("click", function(){
    document.getElementById("tall").innerHTML += "7"
});
//8
document.getElementById("8").addEventListener("click", function(){
    document.getElementById("tall").innerHTML += "8"
});
//9
document.getElementById("9").addEventListener("click", function(){
    document.getElementById("tall").innerHTML += "9"
});
//0
document.getElementById("0").addEventListener("click", function(){
    document.getElementById("tall").innerHTML += "0"
});

//ac knapp

document.getElementById("ac").addEventListener("click" , function(){
    document.getElementById("tall").innerHTML = ""
})

//del knapp
document.getElementById("del").addEventListener("click" , function(){
    var currentDisplay =  document.getElementById("tall").innerHTML;
    if (currentDisplay.length > 0) {
        document.getElementById("tall").innerHTML = currentDisplay.slice(0, -1)
    };
});

//tegn

//+
document.getElementById("pluss").addEventListener("click", function() {
    var currentDisplay = document.getElementById("tall").innerHTML;
    if (currentDisplay.indexOf(`*`) === -1 && currentDisplay.indexOf(`/`) === -1 && currentDisplay.indexOf(`+`) === -1 && currentDisplay.indexOf(`-`) === -1) {
        document.getElementById("tall").innerHTML += "+";
    }
});

//-
document.getElementById("minus").addEventListener("click", function() {
    var currentDisplay = document.getElementById("tall").innerHTML;
    if (currentDisplay.indexOf(`*`) === -1 && currentDisplay.indexOf(`/`) === -1 && currentDisplay.indexOf(`+`) === -1 && currentDisplay.indexOf(`-`) === -1) {
        document.getElementById("tall").innerHTML += "-";
    }
});

//dele
document.getElementById("dele").addEventListener("click", function() {
    var currentDisplay = document.getElementById("tall").innerHTML;
    if (currentDisplay.indexOf(`*`) === -1 && currentDisplay.indexOf(`/`) === -1 && currentDisplay.indexOf(`+`) === -1 && currentDisplay.indexOf(`-`) === -1) {
        document.getElementById("tall").innerHTML += "/";
    }
});

//*
document.getElementById("gange").addEventListener("click", function() {
    var currentDisplay = document.getElementById("tall").innerHTML;
    if (currentDisplay.indexOf(`*`) === -1 && currentDisplay.indexOf(`/`) === -1 && currentDisplay.indexOf(`+`) === -1 && currentDisplay.indexOf(`-`) === -1) {
        document.getElementById("tall").innerHTML += "*";
    }
});


//function
function erLik(){
    var expression = document.getElementById("tall").innerHTML;
    try{
        var resultat = eval(expression);
        document.getElementById("tall").innerHTML= resultat
    } catch (error) {
        document.getElementById("tall").innerHTML = "error"
        console.error("Error", error)
    }
}

document.getElementById("erlik").addEventListener("click", erLik)

