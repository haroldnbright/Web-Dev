let addBtn = document.querySelector(".add-btn")
let deleteBtn = document.querySelector(".remove-btn")
let modalCont = document.querySelector(".modal-cont")

// By default, modal container isn't visible.
let isModalContVisible = false

// Clicking on add button should make the modal container visible, and clicking again should again hide it.
addBtn.addEventListener('click', function() {
    // Toggle the value of isModalContVisible -> if true, make it false and vice-versa.
    // if(isModalContVisible == true) {
    //     isModalContVisible = false;
    // } else {
    //     isModalContVisible = true;
    // }
    // ! => negation operation, this operator negates the Value.
    isModalContVisible = !isModalContVisible

    //If isModalContVisible = true, set the display = "flex" else, set the display = "none"
    if(isModalContVisible === true) {
        //Make the modal visible.
        modalCont.style.display = "flex"
    } else {
        //Hide the modal.
        modalCont.style.display = "none"
    }
})

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

