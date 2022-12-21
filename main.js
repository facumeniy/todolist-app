(()=>{"use strict";(function(){let e=[],t=0;const d=document.querySelector(".main-page"),n=document.querySelector(".todos"),s=document.getElementById("form"),a=(document.getElementById("deletebtn"),document.getElementById("add")),c=document.getElementById("modal"),l=document.getElementById("close-button"),i=document.getElementById("modal-title"),o=document.getElementById("modal-desc"),m=document.getElementById("modal-date"),r=document.getElementById("modal-prio"),p=document.querySelector(".storage"),u=document.createElement("div");u.classList.add("delete-todo");const L=document.createElement("span");function h(e,t,d,n){this.title=e,this.desc=t,this.date=d,this.prio=n}L.innerText="delete",L.classList.add("material-symbols-outlined"),L.classList.add("white"),u.appendChild(L),d.appendChild(u),u.addEventListener("click",(()=>{n.innerHTML="",p.innerHTML=""})),a.addEventListener("click",(()=>{c.style.display="block"})),s.addEventListener("submit",(d=>{var s,a,l,u;d.preventDefault(),s=i.value,a=o.value,l=m.value,u=r.value,e.push(new h(s,a,l,u)),function(d){const s=document.createElement("div");s.classList.add("todo"),n.appendChild(s);const a=document.createElement("div");a.classList.add("edit-container"),s.appendChild(a);const c=document.createElement("span");c.innerText="edit_note",c.classList.add("material-symbols-outlined"),c.classList.add("edit-btn"),a.appendChild(c);const l=document.createElement("div");l.classList.add("text-container"),s.appendChild(l);const i=document.createElement("h3");if(i.classList.add("todo-title"),i.innerText=`${e[t].title}`,l.appendChild(i),""===e[t].desc){const e=document.createElement("h5");e.classList.add("todo-desc"),e.innerText="No description",l.appendChild(e)}else if(""!==e[t].desc){const d=document.createElement("h5");d.classList.add("todo-desc"),d.innerText=`${e[t].desc}`,l.appendChild(d)}const o=document.createElement("div");o.classList.add("date-container"),s.appendChild(o);const m=document.createElement("span");if(m.innerText="calendar_today",m.classList.add("material-symbols-outlined"),o.appendChild(m),""===e[t].date){const e=document.createElement("h3");e.classList.add("date"),e.innerText="No date",o.appendChild(e)}else if(""!==e[t].date){const d=document.createElement("h3");d.classList.add("date"),d.innerText=`${e[t].date}`,o.appendChild(d)}const r=document.createElement("div");r.classList.add("check-container"),s.appendChild(r);const p=document.createElement("input");p.setAttribute("type","checkbox"),p.classList.add("checkbox"),r.appendChild(p),p.addEventListener("click",(()=>{s.classList.toggle("done"),m.classList.toggle("done"),c.classList.toggle("done")})),""===e[t].prio||("low"===e[t].prio?(c.classList.add("low"),m.classList.add("low"),s.classList.add("low")):"medium"===e[t].prio?(c.classList.add("medium"),m.classList.add("medium"),s.classList.add("medium")):"high"===e[t].prio&&(c.classList.add("white"),m.classList.add("high"),s.classList.add("high")));const u=s.cloneNode(!0);d.appendChild(u),t++}(p),c.style.display="none"})),l.addEventListener("click",(()=>{c.style.display="none"})),window.onclick=function(e){e.target==c&&(c.style.display="none")}})(),function(){const e=document.querySelector(".main-page"),t=document.querySelector(".todos"),d=document.querySelector(".new-todo"),n=document.querySelector(".storage"),s=document.querySelector(".all-storages"),a=document.querySelector(".sidebar"),c=document.getElementById("menu-btn"),l=document.getElementById("inbox"),i=(document.getElementById("inbox-btn"),document.getElementById("inbox-text")),o=(document.getElementById("projects-interactive"),document.getElementById("projects-btn")),m=document.getElementById("projects-text"),r=document.getElementById("new-project-btn"),p=document.getElementById("projects");let u=document.querySelectorAll(".project");const L=document.getElementById("projects-form"),h=document.getElementById("projects-modal"),E=document.getElementById("project-title"),v=document.getElementById("projects-close-button");let C=!0;a.classList.add("hide"),l.classList.add("selected");for(let e of u)e.classList.add("hide");c.addEventListener("click",(()=>{a.classList.toggle("hide"),"menu"===c.innerText?c.innerText="close":"close"===c.innerText&&(c.innerText="menu")})),i.addEventListener("click",(()=>{l.classList.add("selected");for(let e of u)e.classList.remove("selected");if(!1===C){t.innerHTML=n.innerHTML;const s=document.createElement("div");s.classList.add("delete-todo");const a=document.createElement("span");a.innerText="delete",a.classList.add("material-symbols-outlined"),a.classList.add("white"),s.appendChild(a),e.appendChild(s),s.addEventListener("click",(()=>{t.innerHTML="",n.innerHTML=""})),d.classList.remove("hide"),C=!C}})),m.addEventListener("click",(()=>{o.classList.toggle("rotate");for(let e of u)e.classList.toggle("hide")})),o.addEventListener("click",(()=>{o.classList.toggle("rotate");for(let e of u)e.classList.toggle("hide")})),L.addEventListener("submit",(n=>{n.preventDefault(),l.classList.remove("selected");for(let e of u)e.classList.remove("selected");C=!C;const a=document.createElement("div");a.classList.add("project"),a.classList.add("selected");const c=document.createElement("h5");c.innerText=E.value,c.classList.add("sidebar-text");const i=document.createElement("span");i.innerText="arrow_right",i.classList.add("projects-icon"),i.classList.add("material-symbols-outlined"),i.classList.add("sidebar-button"),a.appendChild(i),a.appendChild(c),p.appendChild(a),t.innerHTML="",d.classList.add("hide");const o=document.createElement("div");o.classList.add("new-todo");const m=document.createElement("span");m.innerText="add",m.classList.add("material-symbols-outlined"),m.classList.add("white"),o.appendChild(m),e.appendChild(o);const r=document.createElement("div");r.classList.add("delete-todo");const L=document.createElement("span");L.innerText="delete",L.classList.add("material-symbols-outlined"),L.classList.add("white"),r.appendChild(L),e.appendChild(r);const v=document.createElement("div");v.classList.add("storage"),s.appendChild(v),u=document.querySelectorAll(".project"),h.style.display="none",o.addEventListener("click",(()=>{const e=document.createElement("div");e.classList.add("todo");const d=document.createElement("div");d.classList.add("title-selector-container"),e.appendChild(d);const n=document.createElement("input");n.setAttribute("type","text"),n.classList.add("title-selector"),n.placeholder="To do title",d.appendChild(n);const s=document.createElement("div");s.classList.add("date-selector-container"),e.appendChild(s);const a=document.createElement("input");a.setAttribute("type","date"),s.appendChild(a);const c=document.createElement("div");c.classList.add("priority-container"),e.appendChild(c);const l=document.createElement("select"),i=document.createElement("option");i.value="",i.text="None",l.appendChild(i);const o=document.createElement("option");o.value="low",o.text="Low",l.appendChild(o);const m=document.createElement("option");m.value="mid",m.text="Medium",l.appendChild(m);const r=document.createElement("option");r.value="high",r.text="High",l.appendChild(r),c.appendChild(l);const p=document.createElement("div");p.classList.add("buttons-container"),e.appendChild(p);const u=document.createElement("button");u.innerText="Close",u.id="close-button",p.append(u);const L=document.createElement("button");L.innerText="Add",L.id="add-button",p.append(L),L.classList.add("disabled"),n.addEventListener("change",(()=>{""===n.value?L.disabled=!0:(L.classList.remove("disabled"),L.addEventListener("click",(()=>{e.innerHTML="";const t=document.createElement("div");t.classList.add("edit-container"),e.appendChild(t);const d=document.createElement("span");d.innerText="edit_note",d.classList.add("material-symbols-outlined"),d.classList.add("edit-btn"),t.appendChild(d);const s=document.createElement("div");s.classList.add("text-container"),e.appendChild(s);const c=document.createElement("h3");c.classList.add("todo-title"),c.innerText=n.value,s.appendChild(c);const i=document.createElement("div");i.classList.add("date-container"),e.appendChild(i);const o=document.createElement("span");if(o.innerText="calendar_today",o.classList.add("material-symbols-outlined"),i.appendChild(o),""===a.value){const e=document.createElement("h3");e.classList.add("date"),e.innerText="No date",i.appendChild(e)}else if(""!==a.value){const e=document.createElement("h3");e.classList.add("date"),e.innerText=a.value,i.appendChild(e)}const m=document.createElement("div");m.classList.add("check-container"),e.appendChild(m),""===l.value||("low"===l.value?(d.classList.add("low"),o.classList.add("low"),e.classList.add("low")):"mid"===l.value?(d.classList.add("medium"),o.classList.add("medium"),e.classList.add("medium")):"high"===l.value&&(d.classList.add("white"),o.classList.add("high"),e.classList.add("high")));const r=e.cloneNode(!0);v.appendChild(r)})))})),t.appendChild(e)})),r.addEventListener("click",(()=>{t.innerHTML="",v.innerHTML=""})),c.addEventListener("click",(()=>{l.classList.remove("selected");for(let e of u)e.classList.remove("selected");a.classList.add("selected"),t.innerHTML=v.innerHTML;const n=document.createElement("div");n.classList.add("new-todo");const s=document.createElement("span");s.innerText="add",s.classList.add("material-symbols-outlined"),s.classList.add("white"),n.appendChild(s),e.appendChild(n);const c=document.createElement("div");c.classList.add("delete-todo");const i=document.createElement("span");i.innerText="delete",i.classList.add("material-symbols-outlined"),i.classList.add("white"),c.appendChild(i),e.appendChild(c),d.classList.add("hide"),C=!1,n.addEventListener("click",(()=>{const e=document.createElement("div");e.classList.add("todo");const d=document.createElement("div");d.classList.add("title-selector-container"),e.appendChild(d);const n=document.createElement("input");n.setAttribute("type","text"),n.classList.add("title-selector"),n.placeholder="To do title",d.appendChild(n);const s=document.createElement("div");s.classList.add("date-selector-container"),e.appendChild(s);const a=document.createElement("input");a.setAttribute("type","date"),s.appendChild(a);const c=document.createElement("div");c.classList.add("priority-container"),e.appendChild(c);const l=document.createElement("select"),i=document.createElement("option");i.value="low",i.text="Low",l.appendChild(i);const o=document.createElement("option");o.value="mid",o.text="Medium",l.appendChild(o);const m=document.createElement("option");m.value="high",m.text="High",l.appendChild(m),c.appendChild(l);const r=document.createElement("div");r.classList.add("buttons-container"),e.appendChild(r);const p=document.createElement("button");p.innerText="Close",p.id="close-button",r.append(p);const u=document.createElement("button");u.innerText="Add",u.id="add-button",r.append(u),u.classList.add("disabled"),n.addEventListener("change",(()=>{""===n.value?u.disabled=!0:(u.classList.remove("disabled"),u.addEventListener("click",(()=>{e.innerHTML="";const t=document.createElement("div");t.classList.add("edit-container"),e.appendChild(t);const d=document.createElement("span");d.innerText="edit_note",d.classList.add("material-symbols-outlined"),d.classList.add("edit-btn"),t.appendChild(d);const s=document.createElement("div");s.classList.add("text-container"),e.appendChild(s);const c=document.createElement("h3");c.classList.add("todo-title"),c.innerText=n.value,s.appendChild(c);const i=document.createElement("div");i.classList.add("date-container"),e.appendChild(i);const o=document.createElement("span");if(o.innerText="calendar_today",o.classList.add("material-symbols-outlined"),i.appendChild(o),""===a.value){const e=document.createElement("h3");e.classList.add("date"),e.innerText="No date",i.appendChild(e)}else if(""!==a.value){const e=document.createElement("h3");e.classList.add("date"),e.innerText=a.value,i.appendChild(e)}const m=document.createElement("div");m.classList.add("check-container"),e.appendChild(m),""===l.value||("low"===l.value?(d.classList.add("low"),o.classList.add("low"),e.classList.add("low")):"mid"===l.value?(d.classList.add("medium"),o.classList.add("medium"),e.classList.add("medium")):"high"===l.value&&(d.classList.add("white"),o.classList.add("high"),e.classList.add("high")));const r=e.cloneNode(!0);v.appendChild(r)})))})),t.appendChild(e)})),c.addEventListener("click",(()=>{t.innerHTML="",v.innerHTML=""}))}))})),r.addEventListener("click",(()=>{h.style.display="block"})),v.addEventListener("click",(()=>{h.style.display="none"})),window.onclick=function(e){e.target==h&&(h.style.display="none")}}()})();