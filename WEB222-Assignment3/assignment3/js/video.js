// Data for the "HTML Video" Page

var video = {
    controls: true, 
    width: 320,
    height: 240,
    source: [
        {src: "https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/movie.mp4", type: "video/mp4"},
        {src: "https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/movie.ogg", type: "video/ogg"}
    ]
};

window.onload = function() {
    let videos = document.querySelector('#videos');
    var m_Start = "<video", m_End = "</video>";

    for (var i = 0; i < video.source.length; i++) {
        m_Start += " width='" + video.width + "' height='" + video.height + "' controls>";
            m_Start += "<source src='" + video.source[i].src + "' type='" + video.source[i].type + "' ";
                m_Start += m_End;
                videos.innerHTML = m_Start;
        }
    }