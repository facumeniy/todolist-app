(()=>{"use strict";(function(){let e=[],t=0;const d=document.querySelector(".main-page"),n=document.getElementById("form"),s=document.getElementById("add"),c=document.getElementById("modal"),i=document.getElementById("close-button"),l=(document.getElementById("add-button"),document.getElementById("modal-title")),o=document.getElementById("modal-desc"),a=document.getElementById("modal-date"),m=document.getElementById("modal-prio"),r=document.querySelector(".storage");function u(e,t,d,n){this.title=e,this.desc=t,this.date=d,this.prio=n}s.addEventListener("click",(()=>{c.style.display="block"})),n.addEventListener("submit",(n=>{var s,i,p,L;n.preventDefault(),s=l.value,i=o.value,p=a.value,L=m.value,e.push(new u(s,i,p,L)),function(){const n=document.createElement("div");n.classList.add("todo"),d.appendChild(n);const s=document.createElement("div");s.classList.add("edit-container"),n.appendChild(s);const c=document.createElement("span");c.innerText="edit_note",c.classList.add("material-symbols-outlined"),c.classList.add("edit-btn"),s.appendChild(c);const i=document.createElement("div");i.classList.add("text-container"),n.appendChild(i);const l=document.createElement("h3");if(l.classList.add("todo-title"),l.innerText=`${e[t].title}`,i.appendChild(l),""===e[t].desc){const e=document.createElement("h5");e.classList.add("todo-desc"),e.innerText="No description",i.appendChild(e)}else if(""!==e[t].desc){const d=document.createElement("h5");d.classList.add("todo-desc"),d.innerText=`${e[t].desc}`,i.appendChild(d)}const o=document.createElement("div");o.classList.add("date-container"),n.appendChild(o);const a=document.createElement("span");if(a.innerText="calendar_today",a.classList.add("material-symbols-outlined"),o.appendChild(a),""===e[t].date){const e=document.createElement("h3");e.classList.add("date"),e.innerText="No date",o.appendChild(e)}else if(""!==e[t].date){const d=document.createElement("h3");d.classList.add("date"),d.innerText=`${e[t].date}`,o.appendChild(d)}const m=document.createElement("div");m.classList.add("check-container"),n.appendChild(m);const u=document.createElement("input");u.setAttribute("type","checkbox"),u.classList.add("checkbox"),m.appendChild(u),u.addEventListener("click",(()=>{n.classList.toggle("done"),a.classList.toggle("done"),c.classList.toggle("done")})),""===e[t].prio||("low"===e[t].prio?(c.classList.add("low"),a.classList.add("low"),n.classList.add("low")):"medium"===e[t].prio?(c.classList.add("medium"),a.classList.add("medium"),n.classList.add("medium")):"high"===e[t].prio&&(c.classList.add("white"),a.classList.add("high"),n.classList.add("high")));const p=n.cloneNode(!0);p.querySelector(".checkbox").addEventListener("click",(()=>{p.classList.toggle("done")})),r.appendChild(p),t++}(),c.style.display="none"})),i.addEventListener("click",(()=>{c.style.display="none"})),window.onclick=function(e){e.target==c&&(c.style.display="none")}})(),function(){const e=document.querySelector(".main-page"),t=document.querySelector(".new-todo"),d=document.querySelector(".storage"),n=document.querySelector(".sidebar"),s=document.getElementById("menu-btn"),c=(document.getElementById("inbox-btn"),document.getElementById("inbox-text")),i=document.getElementById("projects-btn"),l=document.getElementById("projects-text"),o=document.getElementById("new-project-btn"),a=document.querySelectorAll(".project"),m=document.getElementById("projects-form"),r=document.getElementById("projects-modal"),u=document.getElementById("projects-close-button");let p=!0;n.classList.add("hide");for(let e of a)e.classList.add("hide");s.addEventListener("click",(()=>{n.classList.toggle("hide"),"menu"===s.innerText?s.innerText="close":"close"===s.innerText&&(s.innerText="menu")})),c.addEventListener("click",(()=>{!1===p&&(e.innerHTML=d.innerHTML,t.classList.remove("hide"),p=!p)})),i.addEventListener("click",(()=>{i.classList.toggle("rotate");for(let e of a)e.classList.toggle("hide")})),l.addEventListener("click",(()=>{if(!0===p&&(t.classList.add("hide"),e.innerHTML="",p=!p,""===e.innerHTML)){const t=document.createElement("div");t.classList.add("message");const d=document.createElement("h4");d.innerText="You don't have any projects",t.appendChild(d),e.appendChild(t)}})),m.addEventListener("submit",(e=>{e.preventDefault(),r.style.display="none"})),o.addEventListener("click",(()=>{r.style.display="block"})),u.addEventListener("click",(()=>{r.style.display="none"})),window.onclick=function(e){e.target==r&&(r.style.display="none")}}()})();