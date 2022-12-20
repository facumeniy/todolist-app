function sidebarDOM(){
    // DIVS
    const todoPage = document.querySelector(".main-page");
    const todosCont = document.querySelector(".todos");
    const newToDo = document.querySelector(".new-todo");
    const storage = document.querySelector(".storage");
    const allStorages = document.querySelector(".all-storages");
    // SIDEBAR
    const sidebar = document.querySelector(".sidebar");
    const menuBtn = document.getElementById("menu-btn");
    ///
    const inboxContainer = document.getElementById("inbox");
    const inboxBtn = document.getElementById("inbox-btn");
    const inboxText = document.getElementById("inbox-text");
    ////
    const projectsContainer = document.getElementById("projects-interactive");
    const projectsBtn = document.getElementById("projects-btn");
    const projectsText = document.getElementById("projects-text");
    const newProject = document.getElementById("new-project-btn");
    const projectList = document.getElementById("projects");
    let allProjects = document.querySelectorAll(".project");
    // NEW PROJECT MODAL 
    const projectsForm = document.getElementById("projects-form");
    const projectsModal = document.getElementById("projects-modal");
    const projectsTitle = document.getElementById("project-title");
    const projectsCloseBtn = document.getElementById("projects-close-button");
    // END OF SELECTORS

    // BY DEFAULT ON LOAD
    
    let enabled = true;
    sidebar.classList.add("hide");
    inboxContainer.classList.add("selected");
    for(let project of allProjects){
        project.classList.add("hide");
    }

    menuBtn.addEventListener('click', () => {
        sidebar.classList.toggle("hide");
        if(menuBtn.innerText === "menu"){
            menuBtn.innerText = "close";
        }else if(menuBtn.innerText === "close"){
            menuBtn.innerText = "menu";
        }
    })

    inboxText.addEventListener('click', () => {
        inboxContainer.classList.add("selected");
        for(let project of allProjects){
            project.classList.remove("selected");
        }
        if(enabled === false){
            todosCont.innerHTML = storage.innerHTML;

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

            newToDo.classList.remove("hide");
            enabled = !enabled;
        }
    })

    projectsText.addEventListener('click', () => {
        projectsBtn.classList.toggle("rotate");
        for(let project of allProjects){
            project.classList.toggle("hide");
        }
    })

    projectsBtn.addEventListener('click', () => {
        projectsBtn.classList.toggle("rotate");
        for(let project of allProjects){
            project.classList.toggle("hide");
        }
    })

    projectsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        inboxContainer.classList.remove("selected");
        for(let project of allProjects){
            project.classList.remove("selected");
        }
        enabled = !enabled;

        // CREATES PROJECT IN SIDEBAR
        const projectContainer = document.createElement("div");
        projectContainer.classList.add("project");
        projectContainer.classList.add("selected");
        const projectText = document.createElement("h5");
        projectText.innerText = projectsTitle.value;
        projectText.classList.add("sidebar-text");

        const projectIco = document.createElement("span");
        projectIco.innerText = "arrow_right";
        projectIco.classList.add("projects-icon");
        projectIco.classList.add("material-symbols-outlined");
        projectIco.classList.add("sidebar-button");
        
        projectContainer.appendChild(projectIco);
        projectContainer.appendChild(projectText);
        projectList.appendChild(projectContainer);

        todosCont.innerHTML = "";
        newToDo.classList.add("hide");

        // ADDS NEW TODO BUTTON
        const projectNewToDo = document.createElement("div");
        projectNewToDo.classList.add("new-todo");
        const newToDoIcon = document.createElement("span");
        newToDoIcon.innerText = "add";
        newToDoIcon.classList.add("material-symbols-outlined");
        newToDoIcon.classList.add("white");
        projectNewToDo.appendChild(newToDoIcon);
        todoPage.appendChild(projectNewToDo);

        // ADDS CLEAR TODO BUTTON
        const clearToDo = document.createElement("div");
        clearToDo.classList.add("delete-todo");
        const deleteToDoIcon = document.createElement("span");
        deleteToDoIcon.innerText = "delete";
        deleteToDoIcon.classList.add("material-symbols-outlined");
        deleteToDoIcon.classList.add("white");
        clearToDo.appendChild(deleteToDoIcon);
        todoPage.appendChild(clearToDo);

        // CREATES STORAGE DIV
        const projectStorage = document.createElement("div");
        projectStorage.classList.add("storage");
        allStorages.appendChild(projectStorage);

        // UPDATES PROJECTS & REMOVES ORIGINAL BUTTON
        allProjects = document.querySelectorAll(".project");
        projectsModal.style.display = "none";

        // CREATES NEW TO DO & SAVES IT IN STORAGE
        projectNewToDo.addEventListener('click', () => {
            const todo = document.createElement('div');
            todo.classList.add('todo');
            // TEXT CONTAINER
            const titleSelectorContainer = document.createElement('div');
            titleSelectorContainer.classList.add('title-selector-container');
            todo.appendChild(titleSelectorContainer);
            ///// TEXT
            const textSelector = document.createElement("input");
            textSelector.setAttribute("type", "text");
            textSelector.classList.add("title-selector");
            textSelector.placeholder = "To do title";
            titleSelectorContainer.appendChild(textSelector);
            // DATE CONTAINER
            const dateSelectorContainer = document.createElement('div');
            dateSelectorContainer.classList.add('date-selector-container');
            todo.appendChild(dateSelectorContainer);
            ///// DATE
            const dateSelector = document.createElement("input");
            dateSelector.setAttribute("type", "date");
            dateSelectorContainer.appendChild(dateSelector);
            // PRIO CONTAINER
            const prioContainer = document.createElement('div');
            prioContainer.classList.add('priority-container');
            todo.appendChild(prioContainer);
            // PRIO SELECTOR
            const select = document.createElement('select');
            const option1 = document.createElement('option');
            option1.value = '';
            option1.text = 'None';
            select.appendChild(option1);

            const option2 = document.createElement('option');
            option2.value = 'low';
            option2.text = 'Low';
            select.appendChild(option2);

            const option3 = document.createElement('option');
            option3.value = 'mid';
            option3.text = 'Medium';
            select.appendChild(option3);

            const option4 = document.createElement('option');
            option4.value = 'high';
            option4.text = 'High';
            select.appendChild(option4);

            prioContainer.appendChild(select);
            // BUTTONS CONTAINER
            const buttonContainer = document.createElement('div');
            buttonContainer.classList.add('buttons-container');
            todo.appendChild(buttonContainer);
            ///// CLOSE BUTTON
            const closeBtn = document.createElement("button");
            closeBtn.innerText = "Close";
            closeBtn.id = "close-button";
            buttonContainer.append(closeBtn);
            ///// ADD BUTTON
            const addBtn = document.createElement("button");
            addBtn.innerText = "Add";
            addBtn.id = "add-button";
            buttonContainer.append(addBtn);
            addBtn.classList.add("disabled");

            textSelector.addEventListener('change', () => {
                if(textSelector.value === ""){
                    addBtn.disabled = true;
                }else{
                    addBtn.classList.remove("disabled");
                    addBtn.addEventListener('click', () => {
                        todo.innerHTML = "";

                        const editCont = document.createElement('div');
                        editCont.classList.add('edit-container');
                        todo.appendChild(editCont);

                        const editIcon = document.createElement('span');
                        editIcon.innerText = "edit_note";
                        editIcon.classList.add('material-symbols-outlined');
                        editIcon.classList.add('edit-btn');
                        editCont.appendChild(editIcon);

                        const todoTitleContainer = document.createElement('div');
                        todoTitleContainer.classList.add('text-container');
                        todo.appendChild(todoTitleContainer);
        
                        const todoTitle = document.createElement('h3');
                        todoTitle.classList.add('todo-title');
                        todoTitle.innerText = textSelector.value;
                        todoTitleContainer.appendChild(todoTitle);

                        const dateCont = document.createElement('div');
                        dateCont.classList.add('date-container');
                        todo.appendChild(dateCont);

                        const dateIcon = document.createElement('span');
                        dateIcon.innerText = "calendar_today";
                        dateIcon.classList.add('material-symbols-outlined');
                        dateCont.appendChild(dateIcon);

                        if(dateSelector.value === ""){
                            const todoDate = document.createElement('h3');
                            todoDate.classList.add('date');
                            todoDate.innerText = "No date";
                            dateCont.appendChild(todoDate);
                        }else if(dateSelector.value !== ""){
                            const todoDate = document.createElement('h3');
                            todoDate.classList.add('date');
                            todoDate.innerText = dateSelector.value;
                            dateCont.appendChild(todoDate);
                        }

                        const checkCont = document.createElement('div');
                        checkCont.classList.add('check-container');
                        todo.appendChild(checkCont);

                        if(select.value === ""){
                        }
                        else if(select.value === "low"){
                            editIcon.classList.add('low');
                            dateIcon.classList.add('low');
                            todo.classList.add('low');
                        }else if(select.value === "mid"){
                            editIcon.classList.add('medium');
                            dateIcon.classList.add('medium');
                            todo.classList.add('medium');
                        }else if(select.value === "high"){
                            editIcon.classList.add('white');
                            dateIcon.classList.add('high');
                            todo.classList.add('high');
                        }

                        const todoCopy = todo.cloneNode(true);
                        projectStorage.appendChild(todoCopy);
                    })
                }
            })
            todosCont.appendChild(todo);
        })

        clearToDo.addEventListener('click', () => {
                todosCont.innerHTML = "";
                projectStorage.innerHTML = "";
        })

        projectText.addEventListener('click', () => {
            inboxContainer.classList.remove("selected");
            for(let project of allProjects){
                project.classList.remove("selected");
            }
            projectContainer.classList.add("selected");
            // ADD BUTTON
            todosCont.innerHTML = projectStorage.innerHTML;
            const projectNewToDo = document.createElement("div");
            projectNewToDo.classList.add("new-todo");
            const newToDoIcon = document.createElement("span");
            newToDoIcon.innerText = "add";
            newToDoIcon.classList.add("material-symbols-outlined");
            newToDoIcon.classList.add("white");
            projectNewToDo.appendChild(newToDoIcon);
            todoPage.appendChild(projectNewToDo);
            // CLEAR BUTTON
            const clearToDo = document.createElement("div");
            clearToDo.classList.add("delete-todo");
            const deleteToDoIcon = document.createElement("span");
            deleteToDoIcon.innerText = "delete";
            deleteToDoIcon.classList.add("material-symbols-outlined");
            deleteToDoIcon.classList.add("white");
            clearToDo.appendChild(deleteToDoIcon);
            todoPage.appendChild(clearToDo);

            newToDo.classList.add("hide");
            enabled = false;


            projectNewToDo.addEventListener('click', () => {
                const todo = document.createElement('div');
                todo.classList.add('todo');
            // TEXT CONTAINER
            const titleSelectorContainer = document.createElement('div');
            titleSelectorContainer.classList.add('title-selector-container');
            todo.appendChild(titleSelectorContainer);
            ///// TEXT
            const textSelector = document.createElement("input");
            textSelector.setAttribute("type", "text");
            textSelector.classList.add("title-selector");
            textSelector.placeholder = "To do title";
            titleSelectorContainer.appendChild(textSelector);
            // DATE CONTAINER
            const dateSelectorContainer = document.createElement('div');
            dateSelectorContainer.classList.add('date-selector-container');
            todo.appendChild(dateSelectorContainer);
            ///// DATE
            const dateSelector = document.createElement("input");
            dateSelector.setAttribute("type", "date");
            dateSelectorContainer.appendChild(dateSelector);
            // PRIO CONTAINER
            const prioContainer = document.createElement('div');
            prioContainer.classList.add('priority-container');
            todo.appendChild(prioContainer);
            // PRIO SELECTOR
            const select = document.createElement('select');
            const option1 = document.createElement('option');
            option1.value = 'low';
            option1.text = 'Low';
            select.appendChild(option1);

            const option2 = document.createElement('option');
            option2.value = 'mid';
            option2.text = 'Medium';
            select.appendChild(option2);

            const option3 = document.createElement('option');
            option3.value = 'high';
            option3.text = 'High';
            select.appendChild(option3);

            prioContainer.appendChild(select);
            // BUTTONS CONTAINER
            const buttonContainer = document.createElement('div');
            buttonContainer.classList.add('buttons-container');
            todo.appendChild(buttonContainer);
            ///// CLOSE BUTTON
            const closeBtn = document.createElement("button");
            closeBtn.innerText = "Close";
            closeBtn.id = "close-button";
            buttonContainer.append(closeBtn);
            ///// ADD BUTTON
            const addBtn = document.createElement("button");
            addBtn.innerText = "Add";
            addBtn.id = "add-button";
            buttonContainer.append(addBtn);
            addBtn.classList.add("disabled");

            textSelector.addEventListener('change', () => {
                if(textSelector.value === ""){
                    addBtn.disabled = true;
                }else{
                    addBtn.classList.remove("disabled");
                    addBtn.addEventListener('click', () => {
                        todo.innerHTML = "";

                        const editCont = document.createElement('div');
                        editCont.classList.add('edit-container');
                        todo.appendChild(editCont);

                        const editIcon = document.createElement('span');
                        editIcon.innerText = "edit_note";
                        editIcon.classList.add('material-symbols-outlined');
                        editIcon.classList.add('edit-btn');
                        editCont.appendChild(editIcon);

                        const todoTitleContainer = document.createElement('div');
                        todoTitleContainer.classList.add('text-container');
                        todo.appendChild(todoTitleContainer);
        
                        const todoTitle = document.createElement('h3');
                        todoTitle.classList.add('todo-title');
                        todoTitle.innerText = textSelector.value;
                        todoTitleContainer.appendChild(todoTitle);

                        const dateCont = document.createElement('div');
                        dateCont.classList.add('date-container');
                        todo.appendChild(dateCont);

                        const dateIcon = document.createElement('span');
                        dateIcon.innerText = "calendar_today";
                        dateIcon.classList.add('material-symbols-outlined');
                        dateCont.appendChild(dateIcon);

                        if(dateSelector.value === ""){
                            const todoDate = document.createElement('h3');
                            todoDate.classList.add('date');
                            todoDate.innerText = "No date";
                            dateCont.appendChild(todoDate);
                        }else if(dateSelector.value !== ""){
                            const todoDate = document.createElement('h3');
                            todoDate.classList.add('date');
                            todoDate.innerText = dateSelector.value;
                            dateCont.appendChild(todoDate);
                        }

                        const checkCont = document.createElement('div');
                        checkCont.classList.add('check-container');
                        todo.appendChild(checkCont);


                        if(select.value === ""){
                        }
                        else if(select.value === "low"){
                            editIcon.classList.add('low');
                            dateIcon.classList.add('low');
                            todo.classList.add('low');
                        }else if(select.value === "mid"){
                            editIcon.classList.add('medium');
                            dateIcon.classList.add('medium');
                            todo.classList.add('medium');
                        }else if(select.value === "high"){
                            editIcon.classList.add('white');
                            dateIcon.classList.add('high');
                            todo.classList.add('high');
                        }

                        const todoCopy = todo.cloneNode(true);
                        projectStorage.appendChild(todoCopy);
                    })
                }
            })
                todosCont.appendChild(todo);
            })
            clearToDo.addEventListener('click', () => {
                todosCont.innerHTML = "";
                projectStorage.innerHTML = "";

            })
        }) 
    })

    newProject.addEventListener('click', () => {
        projectsModal.style.display = "block";
    })

    projectsCloseBtn.addEventListener('click', () => {
        projectsModal.style.display = "none";
    })

    window.onclick = function(event) {
        if (event.target == projectsModal) {
            projectsModal.style.display = "none";
        }
      }
}

export default sidebarDOM;