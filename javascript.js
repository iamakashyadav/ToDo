console.log('todo');
let todolist = document.getElementById('to-do-list');
let addButton = document.getElementById('addButton');
let input = document.getElementById('todo');
let allBtn = document.getElementById('allBtn');
let completedBtn = document.getElementById('completedBtn');
let pendingBtn = document.getElementById('pendingBtn');
let todoArray=[];


// const addCompleteTodoHandler = (index)=>{
//     console.log("inside completeTodoHandler",index);
//     // console.log(id);
//     // finalText='';
//     if(!todoArray[index].isCompleted){
//         todoArray[index].isCompleted=!todoArray[index].isCompleted;
//     }
//     display("allBtn");
// }

const negateTodoHandler = (index, tabBtn)=>{
    // console.log("tabBtn",tabBtn);
    todoArray[index].isCompleted=!todoArray[index].isCompleted;
    display(tabBtn);
}

const display = (id)=>{
    // console.log("btttttn",id);
    let finalText='';
    if (id == "allBtn"){
        // console.log("Inside allbtn");
        todoArray.forEach((element,i) => {    
            if (element.isCompleted){
                finalText+=`<p style="background-color: #459045;" onClick="negateTodoHandler(${i}, 'allBtn')">${element.todo}</p>`
            }else{
                finalText+=`<p style="background-color: rgb(184, 240, 248);" onClick="negateTodoHandler(${i}, 'allBtn')">${element.todo}</p>`
            }
        });
    }
    else if(id == "completedBtn"){
        // console.log("Inside completedBtn");
        todoArray.forEach((element,i) => {
            // console.log("Inside completedBtn of for loop", element.isCompleted);
            if(element.isCompleted){
                finalText+=`<p style="background-color: #459045;" onClick="negateTodoHandler(${i}, 'completedBtn')">${element.todo}</p>`
            }
        });
    }else{
        console.log("Inside pendig");
        todoArray.forEach((element,i) => {
            if(!element.isCompleted){
                finalText+=`<p onClick="negateTodoHandler(${i}, 'pendingBtn')">${element.todo}</p>`
            }
        });
    }
    todolist.innerHTML=finalText;
    
}

const addTodoHandler = () =>{
    let toDoText = input.value;
    if (toDoText.length){
        const todoItem={
            todo : toDoText,
            isCompleted : false
        }
        todoArray.push(todoItem);
        allBtn.click();
        display("allBtn");
        input.value='';
    }
}

const addButtonHandler = (e)=>{
    e.preventDefault();
    // console.log("click");
    addTodoHandler();
}

const changeBtnColorToggle = (e)=>{
    const id = e.target.id;
    if (!Array.from(e.target.classList).includes('active')){
        e.target.classList.toggle('active');
    }
    if (id == "allBtn"){
        if(Array.from(completedBtn.classList).includes('active')){
            completedBtn.classList.toggle('active');
        }
        if(Array.from(pendingBtn.classList).includes('active')){
            pendingBtn.classList.toggle('active');
        }
    }
    else if(id == "completedBtn"){
        if(Array.from(allBtn.classList).includes('active')){
            allBtn.classList.toggle('active');
        }
        if(Array.from(pendingBtn.classList).includes('active')){
            pendingBtn.classList.toggle('active');
        }
    }else{
        if(Array.from(completedBtn.classList).includes('active')){
            completedBtn.classList.toggle('active');
        }
        if(Array.from(allBtn.classList).includes('active')){
            allBtn.classList.toggle('active');
        }
    }
}

const showTodoHandler = (e)=>{
    // console.log(e);
    changeBtnColorToggle(e);
    display(e.target.id);
    
}

addButton.addEventListener('click', addButtonHandler);
allBtn.addEventListener('click', showTodoHandler);
completedBtn.addEventListener('click', showTodoHandler);
pendingBtn.addEventListener('click', showTodoHandler);





