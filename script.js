


// Not entirely sure but this calls the element 
// adds an event called click , with action jump
// create a function called jump
// add animation and remove the jump after 300milliseconds
// create function removejump , stop event




var character = document.getElementById("character");
document.addEventListener("click",jump);
function jump(){
    character.classList.add("animate");
    setTimeout(removeJump,300); //300ms = length of animation
};
function removeJump(){
    character.classList.remove("animate");
}


