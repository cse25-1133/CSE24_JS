let heading = document.getElementById("jsid");
let input = document.getElementById("hello");
let para = document.getElementById("para");
let x= document.getElementById("demo").style color="blue";

let changeHeadingbtn = document.getElementById("changeheading");
let changebgbtn = document.getElementById("changeBackground");
let increasefontbtn = document.getElementById("increasefont");
let hidebtn = document.getElementById("hide");
let resetbtn = document.getElementById("reset");
changeHeadingbtn.onclick = function () {

    if (input.value !== "") {
        heading.innerText = input.value;
    } else {
        alert("Please enter some text!");
    }
};
changebgbtn.onclick = function () {
    document.body.style.backgroundColor = "lightblue";
};
increasefontbtn.onclick = function () {
    para.style.fontSize = "20px";
};
hidebtn.onclick = function () {
    if (para.style.display === "none") {
        para.style.display = "block";
    } else {
        para.style.display = "none";
    }
};
resetbtn.onclick = function () {
    heading.innerText = "Welcome to the JavaScript";
    document.body.style.backgroundColor = "white";
    para.style.fontSize = "16px";
    para.style.display = "block";
    input.value = "";
    

};
//let add=(x,y) => { return x+y;}
//Array is an ordered 
// var person2= new Object();
//java script can change all the html elemnets in the page
//it can change all the attributes
//java script can change all the css style in the page
//java script can remove all the existing elements and attributes
//java script can react to all the existing  html events
//java script can create a new html event in the page
//the quer selector can put the elements
//mouse events (7 events)
//keybord events(2 events)
//form events(4 events: onfocus event, onsubmit, onblur, onchange)
//window events(load event[onload] , unload event, resize)





