let animals = document.querySelectorAll(".animal");


document.addEventListener('keydown',function (e) {
     let soundsrc
     if (e.key == "C" || e.key == "c") {
            soundsrc = "assets/audio/caw.wav"
        }
        else if(e.key == "D" || e.key == "d"){
            let soundsrc = "assets/audio/dog.wav"
        }
        else if(e.key == "J" || e.key == "j"){
            let soundsrc = "assets/audio/saddonkey.wav"
        }
        else if(e.key == "L" || e.key == "l"){
            let soundsrc = "assets/audio/lion.wav"
        }
        let sound = new Audio(soundsrc);
            sound.play();
})
// davamatebt || ert if elsshi

function playsound(leter){
    let soundsrc
     if (leter == "C") {
            soundsrc = "assets/audio/caw.wav"
        }
        else if(leter == "D"){
            let soundsrc = "assets/audio/dog.wav"
        }
        else if(leter == "J"){
            let soundsrc = "assets/audio/saddonkey.wav"
        }
        else if(leter == "L"){
            let soundsrc = "assets/audio/lion.wav"
        }
        let sound = new Audio(soundsrc);
            sound.play();
    }


for(let i = 0; i < animals.length; i++){
    console.log(animals[i]);
    animals[i].addEventListener("click", function(){
        console.log(animals[i]);
       playsound(animals[i].innerHTML);
})
}