const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

// Extra Function
inputBox.addEventListener("keydown", function(event) {
    if (event.key === 'Enter') {
      event.preventDefault() // prevent the form from submitting
      addTask()
    }
})

// Main Work Starts here
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        listContainer.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputBox.value="";
    saveData();
}

function deleteAll(){
    const items = document.querySelectorAll('li')
        items.forEach(el => {
          el.remove()
    })
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData();
    }
}, false)

//saveData() function to save ToDo data in local storage 

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

//showTask() function to show saved data on local storage

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}

showTask()