(()=>{"use strict";(function(){let e=[],t=0;const d=document.querySelector(".main-page"),n=document.getElementById("form"),c=document.getElementById("add"),s=document.getElementById("modal"),l=document.getElementById("close-button"),o=document.getElementById("modal-title"),i=document.getElementById("modal-desc"),a=document.getElementById("modal-date"),m=document.getElementById("modal-prio"),r=document.querySelector(".storage");function u(e,t,d,n){this.title=e,this.desc=t,this.date=d,this.prio=n}c.addEventListener("click",(()=>{s.style.display="block"})),n.addEventListener("submit",(n=>{var c,l,p,L;n.preventDefault(),c=o.value,l=i.value,p=a.value,L=m.value,e.push(new u(c,l,p,L)),function(n){const c=document.createElement("div");c.classList.add("todo"),d.appendChild(c);const s=document.createElement("div");s.classList.add("edit-container"),c.appendChild(s);const l=document.createElement("span");l.innerText="edit_note",l.classList.add("material-symbols-outlined"),l.classList.add("edit-btn"),s.appendChild(l);const o=document.createElement("div");o.classList.add("text-container"),c.appendChild(o);const i=document.createElement("h3");if(i.classList.add("todo-title"),i.innerText=`${e[t].title}`,o.appendChild(i),""===e[t].desc){const e=document.createElement("h5");e.classList.add("todo-desc"),e.innerText="No description",o.appendChild(e)}else if(""!==e[t].desc){const d=document.createElement("h5");d.classList.add("todo-desc"),d.innerText=`${e[t].desc}`,o.appendChild(d)}const a=document.createElement("div");a.classList.add("date-container"),c.appendChild(a);const m=document.createElement("span");if(m.innerText="calendar_today",m.classList.add("material-symbols-outlined"),a.appendChild(m),""===e[t].date){const e=document.createElement("h3");e.classList.add("date"),e.innerText="No date",a.appendChild(e)}else if(""!==e[t].date){const d=document.createElement("h3");d.classList.add("date"),d.innerText=`${e[t].date}`,a.appendChild(d)}const r=document.createElement("div");r.classList.add("check-container"),c.appendChild(r);const u=document.createElement("input");u.setAttribute("type","checkbox"),u.classList.add("checkbox"),r.appendChild(u),u.addEventListener("click",(()=>{c.classList.toggle("done"),m.classList.toggle("done"),l.classList.toggle("done")})),""===e[t].prio||("low"===e[t].prio?(l.classList.add("low"),m.classList.add("low"),c.classList.add("low")):"medium"===e[t].prio?(l.classList.add("medium"),m.classList.add("medium"),c.classList.add("medium")):"high"===e[t].prio&&(l.classList.add("white"),m.classList.add("high"),c.classList.add("high")));const p=c.cloneNode(!0);p.querySelector(".checkbox").addEventListener("click",(()=>{p.classList.toggle("done")})),n.appendChild(p),t++}(r),s.style.display="none"})),l.addEventListener("click",(()=>{s.style.display="none"})),window.onclick=function(e){e.target==s&&(s.style.display="none")}})(),function(){const e=document.querySelector(".main-page"),t=document.querySelector(".new-todo"),d=document.querySelector(".storage"),n=document.querySelector(".all-storages"),c=document.querySelector(".sidebar"),s=document.getElementById("menu-btn"),l=(document.getElementById("inbox-btn"),document.getElementById("inbox-text")),o=document.getElementById("projects-btn"),i=(document.getElementById("projects-text"),document.getElementById("new-project-btn")),a=document.getElementById("projects");let m=document.querySelectorAll(".project");const r=document.getElementById("projects-form"),u=document.getElementById("projects-modal"),p=document.getElementById("project-title"),L=document.getElementById("projects-close-button");document.getElementById("new-modal"),document.getElementById("new-form"),document.getElementById("new-title"),document.getElementById("new-close-button");let E=!0;c.classList.add("hide");for(let e of m)e.classList.add("hide");s.addEventListener("click",(()=>{c.classList.toggle("hide"),"menu"===s.innerText?s.innerText="close":"close"===s.innerText&&(s.innerText="menu")})),l.addEventListener("click",(()=>{!1===E&&(e.innerHTML=d.innerHTML,t.classList.remove("hide"),E=!E)})),o.addEventListener("click",(()=>{o.classList.toggle("rotate");for(let e of m)e.classList.toggle("hide")})),r.addEventListener("submit",(d=>{d.preventDefault(),E=!E;const c=document.createElement("div");c.classList.add("project");const s=document.createElement("h5");s.innerText=p.value,s.classList.add("sidebar-text");const l=document.createElement("span");l.innerText="folder_open",l.classList.add("projects-icon"),l.classList.add("material-symbols-outlined"),c.appendChild(l),c.appendChild(s),a.appendChild(c),e.innerHTML="",t.classList.add("hide");const o=document.createElement("div");o.classList.add("new-todo"),e.appendChild(o);const i=document.createElement("div");i.classList.add("storage"),n.appendChild(i),m=document.querySelectorAll(".project"),u.style.display="none",o.addEventListener("click",(()=>{const t=document.createElement("div");t.classList.add("todo");const d=document.createElement("h3");d.innerText="A",t.appendChild(d),e.appendChild(t);const n=t.cloneNode(!0);i.appendChild(n)})),s.addEventListener("click",(()=>{e.innerHTML=i.innerHTML;const d=document.createElement("div");d.classList.add("new-todo"),e.appendChild(d),t.classList.add("hide"),E=!1,d.addEventListener("click",(()=>{const t=document.createElement("div");t.classList.add("todo");const d=document.createElement("h3");d.innerText="A",t.appendChild(d),e.appendChild(t);const n=t.cloneNode(!0);i.appendChild(n)}))}))})),i.addEventListener("click",(()=>{u.style.display="block"})),L.addEventListener("click",(()=>{u.style.display="none"})),window.onclick=function(e){e.target==u&&(u.style.display="none")}}()})();