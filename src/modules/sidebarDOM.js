function sidebarDOM(){
    // DIVS
    const todoPage = document.querySelector(".main-page");
    const newToDo = document.querySelector(".new-todo");
    const storage = document.querySelector(".storage");
    const allStorages = document.querySelector(".all-storages");
    // SIDEBAR
    const sidebar = document.querySelector(".sidebar");
    const menuBtn = document.getElementById("menu-btn");
    ///
    const inboxBtn = document.getElementById("inbox-btn");
    const inboxText = document.getElementById("inbox-text");
    ////
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
    // XD
    const newModal = document.getElementById("new-modal");
    const newForm = document.getElementById("new-form");
    const newTitle = document.getElementById("new-title");
    const newCloseBtn = document.getElementById("new-close-button");
    // END OF SELECTORS

    // BY DEFAULT ON LOAD
    let enabled = true;
    sidebar.classList.add("hide");
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
        if(enabled === false){
            todoPage.innerHTML = storage.innerHTML;
            newToDo.classList.remove("hide");
            enabled = !enabled;
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
        enabled = !enabled;

        // CREATES PROJECT IN SIDEBAR
        const projectContainer = document.createElement("div");
        projectContainer.classList.add("project");
        const projectText = document.createElement("h5");
        projectText.innerText = projectsTitle.value;
        projectText.classList.add("sidebar-text");

        const projectIco = document.createElement("span");
        projectIco.innerText = "folder_open";
        projectIco.classList.add("projects-icon");
        projectIco.classList.add("material-symbols-outlined");
        
        projectContainer.appendChild(projectIco);
        projectContainer.appendChild(projectText);
        projectList.appendChild(projectContainer);

        todoPage.innerHTML = "";
        newToDo.classList.add("hide");

        // ADDS NEW TODO BUTTON
        const projectNewToDo = document.createElement("div");
        projectNewToDo.classList.add("new-todo");
        todoPage.appendChild(projectNewToDo);

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
            const a = document.createElement('h3');
            a.innerText = "A";
            todo.appendChild(a);
            todoPage.appendChild(todo);

            const todoCopy = todo.cloneNode(true);
            projectStorage.appendChild(todoCopy);
        })

        projectText.addEventListener('click', () => {
            todoPage.innerHTML = projectStorage.innerHTML;
            const projectNewToDo = document.createElement("div");
            projectNewToDo.classList.add("new-todo");
            todoPage.appendChild(projectNewToDo);
            newToDo.classList.add("hide");
            enabled = false;

            projectNewToDo.addEventListener('click', () => {
                const todo = document.createElement('div');
                todo.classList.add('todo');

                const a = document.createElement('h3');
                a.innerText = "A";
                todo.appendChild(a);

                todoPage.appendChild(todo);
    
                const todoCopy = todo.cloneNode(true);
                projectStorage.appendChild(todoCopy);
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