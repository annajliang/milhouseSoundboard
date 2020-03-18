//where all functions will be stored (namespacing)
const milhouseApp = {};

milhouseApp.init = function() {
    milhouseApp.playAudio();
};

milhouseApp.playAudio = function () {
    const playlist = $('audio');
    // console.log(playlist);

    for (let i = 0; i < playlist.length; i++) {
        $(`#button-${i}`).on("click", function() {
            playlist[i].play();
        })
    }
};

//document ready
$(function () {
    //app is called when document is ready
    milhouseApp.init();
});