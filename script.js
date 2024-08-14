let toDos = [];
// 1. ADDING TO-DOS

// When the user submits the #to-do-form form:
// - Check if the user has typed something in the input
//   - If yes, add the input value to the to-dos array above
//   - Render the new to-do in the #to-do-list ul
//     - Check the HTML for example to-do list item (commented out)
//   - Update the to-do count next to "My To-Dos" whenever a to-do is added

// 2. COMPLETE TO-DOS

// When the user clicks a to-do list item
// - Remove that to-do from the to-do array and list
// - Add that to-do to a completed to-dos array and render that completed list 
//     - Check the HTML for example completed to-do list item (commented out)
// - Update the to-do count and completed to-do count in the headings

// When should we attach the event listener for clicking a to-do list item?

//Get form and add event listener to submit button
let formEl = document.getElementById("to-do-form")
formEl.addEventListener("submit", addToList)

function addToList(e) {
    //Prevent refresh
    e.preventDefault() 
    //Cache DOMs
    let inputEl = document.getElementById("to-do-input")
    let listEl = document.getElementById("to-do-list")
    let li = document.createElement("li")
    let totalEl = document.getElementById("to-do-count")
    //Create list item and add to to-do list
    li.appendChild(document.createTextNode(inputEl.value))
    li.classList.add("list-item")
    listEl.appendChild(li)
    li.addEventListener("click", crossOff)
    //Update list count
    totalEl.innerHTML = listEl.childElementCount
    //Clear input
    inputEl.value="" 
}

function crossOff(){
    //Cache DOMs
    let completedEl = document.getElementById("completed-list")
    let toDoEl = document.getElementById("to-do-list")
    let completedCountEl = document.getElementById("completed-to-do-count")
    let toDoCountEl = document.getElementById("to-do-count")
    //Move item across lists
    completedEl.appendChild(this)
    //Update list counts
    toDoCountEl.innerHTML = toDoEl.childElementCount
    completedCountEl.innerHTML = completedEl.childElementCount
    //Change event to remove item from completed list
    this.addEventListener("click", removeItem)
}

function removeItem() {
    //Cache DOMs
    let completedEl = document.getElementById("completed-list")
    let completedCountEl = document.getElementById("completed-to-do-count")
    //Remove list item
    completedEl.removeChild(this)
    //Update list item count
    completedCountEl.innerHTML = completedEl.childElementCount
}