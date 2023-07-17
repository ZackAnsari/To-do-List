const input = document.querySelector("#input-box")
const list = document.querySelector("#list-container");
const add = document.querySelector("#button");
const form = document.querySelector("#form")

form.addEventListener("submit",function(e){
    e.preventDefault();
    const todo = input.value;
    if(todo !== ""){
        const newLi = document.createElement("li");
        const xout = document.createElement("span");
        xout.innerHTML = "\u00d7";
        newLi.innerText = todo;
        newLi.append(xout);
        list.append(newLi);
    
    }else{
        alert("Enter a valid response");
    }
    form.reset();
    saveData();
});

list.addEventListener("click",function(e){
    if(e.target.tagName === ('LI')){
        e.target.classList.toggle("checked")
        saveData();
    } else if(e.target.tagName ===('SPAN')){
        e.target.parentElement.remove();
        saveData();
    }   
},false);

function saveData(){
    localStorage.setItem("data",list.innerHTML);
}

function showTask(){
    list.innerHTML = localStorage.getItem("data");

}

showTask();