function sidebarDOM(){
    const todoPage = document.querySelector(".main-page");

    const menuBtn = document.getElementById("menu-btn");
    const sidebar = document.querySelector(".sidebar");

    const projectsBtn = document.getElementById("projects-btn");

    sidebar.classList.add("hide");

    menuBtn.addEventListener('click', () => {
        sidebar.classList.toggle("hide");

        if(menuBtn.innerText === "menu"){
            menuBtn.innerText = "close";
        }else if(menuBtn.innerText === "close"){
            menuBtn.innerText = "menu";
        }
    })

    projectsBtn.addEventListener('click', () => {
        // TODOS HAVE TO BE STORED
        // PROJECTS TEXT SHOULD CLEAR ALL TODOS

        projectsBtn.classList.toggle("rotate");
    })
}

export default sidebarDOM;