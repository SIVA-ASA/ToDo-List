const input = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");
const emptyMsg = document.getElementById("emptyMsg");

addBtn.addEventListener("click",addItem)
function addItem() {
    let item = input.value.trim();
    if(item === "") return;

    let li = document.createElement("li");
    li.innerHTML = `${item} <button class="deleteBtn">Delete</button>`;

    list.appendChild(li);
    input.value = "";

    emptyMsg.style.display = "none";

    li.querySelector(".deleteBtn").addEventListener("click",() => {
        li.remove();
        if(li.children.length === ""){
            emptyMsg.style.display = "block";
        }
    })
}