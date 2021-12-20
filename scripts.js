let delete_task_spans = document.getElementsByClassName("delete");

var list = document.getElementsByTagName('ul');
console.log(list);
list[0].addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
  }
}, false);


let add_task_btn = document.getElementById("addB");

add_task_btn.addEventListener("click", function add_task(){
  let input_task = document.getElementById("input_task").value;
  let taskToAdd = document.createElement("li");
  let textNode = document.createTextNode(input_task);
  taskToAdd.appendChild(textNode);
  if(input_task === "")
  alert("You must write a task..");
  else
  {
    document.getElementById("listOfTask").appendChild(taskToAdd);         
  } 
  document.getElementById("input_task").value = "";
  
  let span = document.createElement("SPAN");
  let x_sign = document.createTextNode("\u00D7");
  span.className = "delete";
  span.appendChild(x_sign);
  taskToAdd.appendChild(span);

  span.addEventListener("click", function delete_task(){
  let current_task = this.parentElement;
  current_task.style.display = "none";
  });
        
});




