let audioList = ["http://k007.kiwi6.com/hotlink/i439fjfmqh/Shake_-JaeJoe_Ft._AceahSpades_and_Thrillz.mp3",
"http://k007.kiwi6.com/hotlink/i8321m92n2/a_va_p_ter.mp3","http://k007.kiwi6.com/hotlink/sce3rezufz/Shadow_Puppets.mp3","http://k007.kiwi6.com/hotlink/3yr5g29xpq/Post-Nuclear_Apocalypse_Blues.mp3"];
let audio = new Audio(audioList[0])
let corrent = 0;
play.onclick = function(){
    audio.play()
    pauza.style.display="block";
    play.style.display="none";
    
}

pauza.onclick = function(){
    audio.pause();
    pauza.style.display="none";
    play.style.display="block";
}

next.onclick = function(){
    corrent++;
    if(audioList[corrent] !== undefined){
        audio.pause();
        audio = new Audio(audioList[corrent]);
        audio.play()
    }

}

prev.onclick = function(){
    corrent--;
    audio.pause();
    if(audioList[corrent] !== undefined){
        audio = new Audio(audioList[corrent]);
        console.log(audio);
        audio.play();
    }

}