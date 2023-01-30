


// Not entirely sure but this calls the element 
// adds an event called click , with action jump
// create a function called jump
// add animation and remove the jump after 300milliseconds
// create function removejump , stop event




var character = document.getElementById("xter");
document.addEventListener("click",jump);

function jump(){
    if(xter.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(removeJump,300); //300ms = length of animation
};
function removeJump(){
    character.classList.remove("animate");
}

// supposed to fix a glitch
// if(xter.classList == "animate"){return}

//game width - block width (500 - 20)
//game height - character height - block height (200 - 50 - 20)
//game height - character height (200 - 50)


