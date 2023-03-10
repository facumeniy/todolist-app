function modalDOM(){
    // GLOBAL VARIABLES
    let todoList = [];
    let i = 0;

    const todoPage = document.querySelector(".main-page");
    const todosCont = document.querySelector(".todos");

    // MODAL GET ELEMENTS
    const form = document.getElementById("form");
    const deleteToDoBtn = document.getElementById("deletebtn");
    const newToDoBtn = document.getElementById("add");
    const modal = document.getElementById("modal");
    const closeBtn = document.getElementById("close-button");
    const modalTitle = document.getElementById("modal-title");
    const modalDesc = document.getElementById("modal-desc");
    const modalDate = document.getElementById("modal-date");
    const modalPrio = document.getElementById("modal-prio");

    const storage = document.querySelector(".storage");

    const clearToDo = document.createElement("div");
    clearToDo.classList.add("delete-todo");
    const deleteToDoIcon = document.createElement("span");
    deleteToDoIcon.innerText = "delete";
    deleteToDoIcon.classList.add("material-symbols-outlined");
    deleteToDoIcon.classList.add("white");
    clearToDo.appendChild(deleteToDoIcon);
    todoPage.appendChild(clearToDo);

    clearToDo.addEventListener('click', () => {
        todosCont.innerHTML = "";
        storage.innerHTML = "";
    })

    // FUNCTIONS
    function todo(title, desc, date, prio){
        this.title = title;
        this.desc = desc;
        this.date = date;
        this.prio = prio;
    };
    
    function addTodo(a, b, c, d){
        todoList.push(new todo(a, b, c, d));
    };

    function newToDo(container){
        const todo = document.createElement('div');
        todo.classList.add('todo');
        todosCont.appendChild(todo);

        const editCont = document.createElement('div');
        editCont.classList.add('edit-container');
        todo.appendChild(editCont);

        const editIcon = document.createElement('span');
        editIcon.innerText = "edit_note";
        editIcon.classList.add('material-symbols-outlined');
        editIcon.classList.add('edit-btn');
        editCont.appendChild(editIcon);

        const textCont = document.createElement('div');
        textCont.classList.add('text-container');
        todo.appendChild(textCont);

        const todoTitle = document.createElement('h3');
        todoTitle.classList.add('todo-title');
        todoTitle.innerText = `${todoList[i].title}`;
        textCont.appendChild(todoTitle);

        if(todoList[i].desc === ""){
            const todoDesc = document.createElement('h5');
            todoDesc.classList.add('todo-desc');
            todoDesc.innerText = "No description";
            textCont.appendChild(todoDesc);
        }else if(todoList[i].desc !== ""){
            const todoDesc = document.createElement('h5');
            todoDesc.classList.add('todo-desc');
            todoDesc.innerText = `${todoList[i].desc}`;
            textCont.appendChild(todoDesc);
        }
        
        const dateCont = document.createElement('div');
        dateCont.classList.add('date-container');
        todo.appendChild(dateCont);

        const dateIcon = document.createElement('span');
        dateIcon.innerText = "calendar_today";
        dateIcon.classList.add('material-symbols-outlined');
        dateCont.appendChild(dateIcon);

        if(todoList[i].date === ""){
            const todoDate = document.createElement('h3');
            todoDate.classList.add('date');
            todoDate.innerText = "No date";
            dateCont.appendChild(todoDate);
        }else if(todoList[i].date !== ""){
            const todoDate = document.createElement('h3');
            todoDate.classList.add('date');
            todoDate.innerText = `${todoList[i].date}`;
            dateCont.appendChild(todoDate);
        }

        const checkCont = document.createElement('div');
        checkCont.classList.add('check-container');
        todo.appendChild(checkCont);

        const checkbox = document.createElement('input');
        checkbox.setAttribute("type", "checkbox");
        checkbox.classList.add('checkbox');
        checkCont.appendChild(checkbox);

        checkbox.addEventListener('click', () => {
            todo.classList.toggle('done');
            dateIcon.classList.toggle('done');
            editIcon.classList.toggle('done');
        })

        if(todoList[i].prio === ""){
        }
        else if(todoList[i].prio === "low"){
            editIcon.classList.add('low');
            dateIcon.classList.add('low');
            todo.classList.add('low');
        }else if(todoList[i].prio === "medium"){
            editIcon.classList.add('medium');
            dateIcon.classList.add('medium');
            todo.classList.add('medium');
        }else if(todoList[i].prio === "high"){
            editIcon.classList.add('high');
            dateIcon.classList.add('high');
            todo.classList.add('high');
        }

        const todoCopy = todo.cloneNode(true);
        container.appendChild(todoCopy);

        i++;
    }

    newToDoBtn.addEventListener('click', () => {
        modal.style.display = "block";
    })

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let a = modalTitle.value;
        let b = modalDesc.value;
        let c = modalDate.value;
        let d = modalPrio.value;

        addTodo(a, b, c, d);
        newToDo(storage);

        modal.style.display = "none";
    })

    closeBtn.addEventListener('click', () => {
        modal.style.display = "none";
    })

    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
}

export default modalDOM;
