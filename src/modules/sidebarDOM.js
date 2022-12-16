function sidebarDOM(){
    const todoPage = document.querySelector(".main-page");
    const storage = document.querySelector(".storage");

    const menuBtn = document.getElementById("menu-btn");
    const sidebar = document.querySelector(".sidebar");

    const inboxBtn = document.getElementById("inbox-btn");
    const inboxText = document.getElementById("inbox-text");
    const projectsBtn = document.getElementById("projects-btn");
    const projectsText = document.getElementById("projects-text");

    let enabled = true;

    sidebar.classList.add("hide");

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
            storage.innerHTML = "";
            enabled = !enabled;
        }
    })

    projectsBtn.addEventListener('click', () => {
        projectsBtn.classList.toggle("rotate");
    })

    projectsText.addEventListener('click', () => {
        if(enabled === true){
            storage.innerHTML = todoPage.innerHTML;
            todoPage.innerHTML = "";
            enabled = !enabled;
        }
    })
}

export default sidebarDOM;