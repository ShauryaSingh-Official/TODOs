const main_form = document.querySelector(".main_form");
const input = document.querySelector(".main_form input[type='text']");
const todo_list = document.querySelector(".todo_list"); // ul
let newTodo;
main_form.addEventListener("submit", (e) => {
    e.preventDefault();
    newTodo = input.value;
    const newLi = document.createElement("li");
    const innerHTML = `
        <span class="text">${newTodo}.</span>
        <div class="todo_control">
            <button class="done listBtn"><i class="fa-solid fa-check fa-lg"></i></button>
            <button class="remove listBtn"><i class="fa-solid fa-trash fa-lg"></i></button>
        </div>`
    newLi.innerHTML = innerHTML;
    todo_list.append(newLi);
    input.value="";
});

const todo_control = document.querySelector(".todo_control");
todo_list.addEventListener("click", (e)=>{
    console.log(e.target);
    console.log(e.target.parentNode);
    console.log(e.target.parentNode.classList);
    if(e.target.parentNode.classList.contains("done")){
        const liSpan = e.target.parentNode.parentNode.previousElementSibling;
        liSpan.style.textDecoration = "line-through";
    }
    else if(e.target.parentNode.classList.contains("remove")){
        const li = e.target.parentNode.parentNode.parentNode;
        li.remove();
    }
})