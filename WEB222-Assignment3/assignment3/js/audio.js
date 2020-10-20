// Data for the "HTML Audio" Page

var audio = {
    controls: true, 
    source: [
        {src: "https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/Track03.mp3", type: "audio/mpeg"},
        {src: "https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/Track03.ogg", type: "audio/ogg"}
    ]
};

window.onload = function() {
    let audioSection = document.querySelector('#audio');
    let string = "";

    for (var i = 0; i < 1; i++) {
        string += "<audio controls><source src='" + audio.source[i].src + "' type='" + audio.source[i].type + "'></audio>";
    }

    audioSection.innerHTML += string;
}