let drumSet = document.querySelectorAll(".drum");

function makeSound(key) {
    switch (key) {
        case "w":
            let kick = new Audio("sounds/kick-bass.mp3")
            kick.play();
            break;

        case "a":
            let snare = new Audio("sounds/snare.mp3")
            snare.play();
            break;

        case "s":
            let crash = new Audio("sounds/crash.mp3")
            crash.play();
            break;

        case "d":
            let tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play();
            break;

        case "j":
            let tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play();
            break;

        case "k":
            let tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play();
            break;

        case "l":
            let tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play();
            break;

        default:
            console.log("Thank you for using the website, Created by Harikesh Kumar Sharma.");
            break;
    }
}

// adding event listeners to every element in the drum set.
for (let i = 0; i < drumSet.length; i++) {
    drumSet[i].addEventListener("click", function (event) {
        makeSound(drumSet[i].textContent);
    })
    drumSet[i].addEventListener("keydown", (event)=>{
        let key = event.key;
        makeSound(key);
    })
}