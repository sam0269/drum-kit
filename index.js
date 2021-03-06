const drumBtn = document.querySelectorAll(".drum");

drumBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const btnClicked = btn.innerHTML;
    generateEvent(btnClicked);
    makeAnimation(btnClicked);
  });
});

document.addEventListener("keypress",function(event){
    const keyPress = event.key;
    // console.log(keyPress);
    generateEvent(keyPress);
    makeAnimation(keyPress);
});


function generateEvent(singleCharacter){
    switch (singleCharacter) {
        case "w":
          const crash = new Audio("sounds/crash.mp3");
          crash.play();
          break;
        case "a":
          const kickBass = new Audio("sounds/kick-bass.mp3");
          kickBass.play();
          break;
        case "s":
          const snare = new Audio("sounds/snare.mp3");
          snare.play();
          break;
        case "d":
          const tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play();
          break;
        case "j":
          const tom2 = new Audio("sounds/tom-2.mp3");
          tom2.play();
          break;
        case "k":
          const tom3 = new Audio("sounds/tom-3.mp3");
          tom3.play();
          break;
        case "l":
          const tom4 = new Audio("sounds/tom-4.mp3");
          tom4.play();
          break;
        default: console.log(`Invalid Input by user`);
      }
}

function makeAnimation(key){
    const btnAnimate = document.querySelector("."+key);

    btnAnimate.classList.add('pressed');
    setTimeout(()=>{
        btnAnimate.classList.remove('pressed');
    },200);
}