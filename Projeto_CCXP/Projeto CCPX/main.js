function addRedBorder(id)
{
    element = document.querySelector('#' +  id)
    element.style.border = "1px solid red";
}
addRedBorder("quinta");

function addBlueBorder(id)
{
    element = document.querySelector("#" + id)
    element.style.border = "1px solid blue";
}
addBlueBorder("sexta")

function addYellowBorder(id)
{
    element = document.querySelector("#" + id)
    element.style.border = "1px solid yellow";
}
addYellowBorder("sabado")


function addGreenBorder(id)
{
    element = document.querySelector("#" + id)
    element.style.border = "1px solid green";
}
addGreenBorder("domingo")

function highlightCard(selector)
{
    var element = document.querySelector(selector);
    element.classList.toggle("card-highlight");
}
