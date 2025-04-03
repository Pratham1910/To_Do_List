const inputBox = document.querySelector('#inputBox')
const listContainer = document.querySelector('#listContainer')


function addlist(){
    if(inputBox.value == ''){
        alert("Write something in input!")
    }else{
        let list = document.createElement('li');
        list.innerHTML = inputBox.value;
        listContainer.appendChild(list);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        list.appendChild(span)
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener('click',function(e){
    console.log(e.target.tagName);
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
};
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
};
showTask();