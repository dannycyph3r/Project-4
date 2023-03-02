


// Not entirely sure but this calls the element 
// adds an event called click , with action jump
// create a function called jump
// add animation and remove the jump after 300milliseconds
// create function removejump , stop event




var character = document.getElementById("xter");
document.addEventListener("click",jump);

function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(removeJump,300); //300ms = length of animation
};
function removeJump(){
    character.classList.remove("animate");
}

// supposed to fix a glitch - update this code below breaks the jump animation
// if(character.classList == "animate"){return}

// game width - block width (500 - 20)
// game height - character height - block height (200 - 50 - 20)
// game height - character height (200 - 50)


// lets create a function called checkDead , to see if they collide

var block = document.getElementById("block");
function checkDead(){
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
        alert("Game over");
    }
}

setInterval(checkDead, 10);