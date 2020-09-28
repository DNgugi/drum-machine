window.onload = init;
function init(){
   play();  
}

function play(pad){
    let audio = document.getElementById(pad);
    audio.play();

    if (pad === 'q' || pad === 'Q'){
        document.getElementById("display").innerHTML = "Punchy Kick";
    } else if (pad === 'w' || pad === 'W'){
        document.getElementById("display").innerHTML = "Broken Snare";
    }else if (pad === 'e' || pad === 'E'){
        document.getElementById("display").innerHTML = "Tsssk";
    }else if (pad === 'a' || pad === 'A'){
        document.getElementById("display").innerHTML = "Disc Oh";
    }else if (pad === 's' || pad === 'S'){
        document.getElementById("display").innerHTML = "Give us light ";
    }else if (pad === 'd' || pad === 'D'){
        document.getElementById("display").innerHTML = "Stick";
    }else if (pad === 'z' || pad === 'Z'){
        document.getElementById("display").innerHTML = "Punchy Kick 2";
    }else if (pad === 'x' || pad === 'X'){
        document.getElementById("display").innerHTML = "Give us light 2";
    }else if (pad === 'c' || pad === 'C'){
        document.getElementById("display").innerHTML = "Broken Snare 2";
    }
    
}


document.onkeyup = function (event){
    if (event.key === 'q' || event.key === 'Q'){
    play('Q');
    } else if (event.key === 'w' || event.key === 'W'){
        play('W');
        }
        else if (event.key === 'e' || event.key === 'E'){
            play('E');
            }
            else if (event.key === 'a' || event.key === 'A'){
                play('A');
                }
                else if (event.key === 's' || event.key === 'S'){
                    play('S');
                    }
                    else if (event.key === 'd' || event.key === 'D'){
                        play('D');
                        }
                        else if (event.key === 'z' || event.key === 'Z'){
                            play('Z');
                            }
                            else if (event.key === 'x' || event.key === 'X'){
                                play('X');
                                }
                                else if (event.key === 'c' || event.key === 'C'){
                                    play('C');
                                    }

}