let header = document.querySelector("header");
let element = header.getElementsByTagName("li")[2];
element.querySelector('a').textContent="Projects";

let div = document.querySelector(".accordian-wrapper");
let divElement = div.querySelectorAll("div");

function block(index){
    let para = divElement[index].querySelector("p");
    para.style.display = "block";
}

block(2);
block(3);
