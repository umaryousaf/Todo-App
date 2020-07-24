var list = document.getElementsByClassName("list-group")[0];

function addtodo(){
    var todo_item = document.getElementById("todo-item");

    // create li tag with text node
    var li = document.createElement("li");
    li.setAttribute("class" , "list-group-item d-flex justify-content-between align-items-center ")
    var liText = document.createTextNode(todo_item.value);
    li.appendChild(liText)

    // create del button
    var delBtn = document.createElement("button");
    var delText = document.createTextNode("Delete");
    delBtn.setAttribute("class" , "btn btn-danger");
    delBtn.setAttribute("onclick" , "deleteItem(this)")
    delBtn.appendChild(delText)
   
    // create edit button
    var editBtn = document.createElement("button");
    var editText = document.createTextNode("Edit");
    editBtn.setAttribute("class" , "btn btn-success");
    editBtn.setAttribute("onclick" , "editItem(this)")
    editBtn.appendChild(editText)
    

    //create span 
    var span = document.createElement("span");
    span.appendChild(delBtn);
    span.appendChild(editBtn);
    li.appendChild(span)



    
    list.appendChild(li)

    todo_item.value = " "
    
}

function deleteItem(e){
    e.parentNode.parentNode.remove()
}

function editItem(e){
    
    var val = prompt("Enter update value" ,  e.parentNode.parentNode.firstChild.nodeValue)

    e.parentNode.parentNode.firstChild.nodeValue = val;
}

function allDelete(){
    list.innerHTML = ""
}