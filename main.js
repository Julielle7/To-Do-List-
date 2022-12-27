let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEveventListner('click', function(){
    var paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContaeinr.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListner('click', function(){
        paragraph.style.TextDecoration = "line-through";
    
    })
    paragraph.addEventListner('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })

})
