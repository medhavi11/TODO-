const form=document.getElementById('form')
const input=document.getElementById('input')
const todoUL=document.getElementById('todos')

const todos=JSON.parse(localStorage.getItem('todos'));


if(todos)
{
    todos.forEach(todo=>addTodo(todo))
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    addTodo()
})

function addTodo(todo)
{
    let todotext=input.value;
    if(todo)
    {
        todotext=todo.text;
    }
    if(todotext)
    {
        const todoEl =document.createElement('Li');
        if(todo && todo.completed)
        {
            todoEl.classList.add('completed');
        }
        todoEl.innerText=todotext;

        todoEl.addEventListener('click',()=>
        {
            todoEl.classList.toggle('completed')
            updateLS();
        });

        todoEl.addEventListener('contextmenu',(e)=>{
            e.preventDefault();
            todoEl.remove();
            updateLS();
        });




        todoUL.appendChild(todoEl)

        input.value='';

        updateLS();
    }
}

function updateLS()
{
    todosEl=document.querySelectorAll('li');
    const todos=[];
    todosEl.forEach(todoEl=>
        {
            todos.push
            ({
                 text:todoEl.innerText,
                  completed:todoEl.classList.contains('completed')
            })
        })

        localStorage.setItem('todos',JSON.stringify(todos));
}