function sidebarDOM(){
    // DIVS
    const todoPage = document.querySelector(".main-page");
    const newToDo = document.querySelector(".new-todo");
    const storage = document.querySelector(".storage");
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
    const allProjects = document.querySelectorAll(".project");
    // MODAL 
    const projectsForm = document.getElementById("projects-form");
    const projectsModal = document.getElementById("projects-modal");
    const projectsCloseBtn = document.getElementById("projects-close-button");
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

    projectsText.addEventListener('click', () => {
        if(enabled === true){
            newToDo.classList.add("hide");
            todoPage.innerHTML = "";
            enabled = !enabled;
            // THIS GOES IN A FUNCTION
            if(todoPage.innerHTML === ""){
                const messageContainer = document.createElement("div");
                messageContainer.classList.add("message");
                const messageText = document.createElement("h4");
                messageText.innerText = "You don't have any projects";
                messageContainer.appendChild(messageText);
                todoPage.appendChild(messageContainer);
            }
        }
    })

    projectsForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // NEW PROJECT
    
        projectsModal.style.display = "none";
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