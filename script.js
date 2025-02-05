let btn = document.querySelector("#addBtn");
    let lis = document.querySelector("#tsk");
    let inp = document.querySelector("#inp");
    
    btn.addEventListener("click", () => {
        if (inp.value.trim() !== "") {
            let item = document.createElement("li");
            item.innerText = inp.value;
            let delbtn = document.createElement("button");
    
            delbtn.innerText = "Delete";
            delbtn.classList.add("delete");
    
            item.appendChild(delbtn);
            lis.appendChild(item);
            inp.value = "";
        }
    });
    
    lis.addEventListener("click", (event) => {
        if (event.target.classList.contains("delete")) {
            event.target.parentElement.remove();
        }
    });