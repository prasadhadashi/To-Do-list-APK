console.log('Welcome to To-Do List')

const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

const AddTask =()=>{
    if(inputBox.value === ''){
        alert("Please write a note before add!");
        setTimeout((e) => {
            e.target.alert.close()
        }, 1000);
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);   
    }
    inputBox.value = '';
    savedata();
}

listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN"){   
        e.target.parentElement.remove();
        savedata();
    }
})

const savedata = ()=>{
    localStorage.setItem("data", listcontainer.innerHTML);
}

const showtask =()=>{
    listcontainer.innerHTML = localStorage.getItem("data");
}

showtask();

    // let btn = document.getElementById("btn");       

// this id is a best use of 