let addBtn = document.querySelector(".add-btn")
let deleteBtn = document.querySelector(".remove-btn")
let modalCont = document.querySelector(".modal-cont")
let taskArea = document.querySelector(".textArea-cont")
let mainCont = document.querySelector(".main-cont")

// By default, modal container isn't visible.
let isModalContVisible = false

let ticketColor = 'lightpink'

let lockClass = 'fa-lock'
let unLockClass = 'fa-unlock'

// Clicking on add button should make the modal container visible, and clicking again should again hide it.
addBtn.addEventListener('click', function () {
    // Toggle the value of isModalContVisible -> if true, make it false and vice-versa.
    // if(isModalContVisible == true) {
    //     isModalContVisible = false;
    // } else {
    //     isModalContVisible = true;
    // }
    // ! => negation operation, this operator negates the Value.
    isModalContVisible = !isModalContVisible

    //If isModalContVisible = true, set the display = "flex" else, set the display = "none"
    if (isModalContVisible === true) {
        //Make the modal visible.
        modalCont.style.display = "flex"
    } else {
        //Hide the modal.
        modalCont.style.display = "none"
    }
})

// <!-- <div class="ticket-cont">
//         <div class="ticket-color" style="background-color: lightpink"></div>
//         <div class="ticket-id">12345</div>
//         <div class="task-area">Test task</div>
//         <div class="ticket-lock">
//           <i class="fa-solid fa-lock"></i>
//           <i class="fa-solid fa-unlock"></i>
//         </div>
//       </div> -->

//Event to create a ticket when user presses Shift Key.
modalCont.addEventListener('keydown', function (event) {
    //Check if user has pressed Shift key or not.
    if (event.key == "Shift") {
        //Create a ticket.
        let ticketCont = document.createElement('div')
        ticketCont.setAttribute('class', 'ticket-cont')

        //generate a new and unique ticket id for every ticket.
        let ticketId = crypto.randomUUID().slice(0, 12) // UUID - Universally Unique IDentifier.

        // console.log(ticketId)

        let taskText = taskArea.value

        ticketCont.innerHTML = `
            <div class="ticket-color" style="background-color: ${ticketColor}"></div>
            <div class="ticket-id">${ticketId}</div>
            <div class="task-area">${taskText}</div>
            <div class="ticket-lock">
                <i class="fa-solid fa-lock"></i>
            </div>
        `

        mainCont.append(ticketCont)

        //Once the ticket is created, modal-cont should become invisible.
        modalCont.style.display = "none"
        isModalContVisible = false

        //Reset the text area.
        taskArea.value = ""

        handleLock(ticketCont)
    }
})

function handleLock(ticket) {
    let ticketLockCont = ticket.querySelector(".ticket-lock")
    let ticketLockIcon = ticketLockCont.children[0]
    let ticketTextArea = ticket.querySelector(".task-area")

    ticketLockIcon.addEventListener('click', function() {
        //When a user clicks on lock icon, it should become unlocked.
        //and the text Area should become editable.
        if(ticketLockIcon.classList.contains(lockClass)) {
            //Currently lock is locked, now on click we need to unlock it 
            // and make the text area editable

            //remove fa-lock from the classList and add fa-unlock.
            ticketLockIcon.classList.remove(lockClass)
            ticketLockIcon.classList.add(unLockClass)

            //Make the text Area editable.
            ticketTextArea.setAttribute('contenteditable', 'true')
        } else {
            ////remove fa-unlock from the classList and add fa-lock.
            ticketLockIcon.classList.remove(unLockClass)
            ticketLockIcon.classList.add(lockClass)

            //Make the text are non-editable.
            ticketTextArea.setAttribute('contenteditable', 'false')
        }
    })
}


// == vs === in JavaScript
// == (loose equality) => Compares the value after type conversion (coercion)
// JS converts one type to another type automatically.

// 5 == "5" => TRUE
// 0 == false => TRUE
// 10 == "ten" => FALSE

// == can cause unexpected errors in Prodcution scenarios.

// === (strict equality) => Compares the value as well as type

// 5 === "5" => FALSE
// 0 == false => FALSE

// Using === is a safer option and should always be used instead of ==

