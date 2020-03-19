//where all functions will be stored (namespacing)
const milhouseApp = {};

milhouseApp.init = function() {
    milhouseApp.showFocusOutline();
    milhouseApp.playSound();
    milhouseApp.pauseSound();
};

const $sounds = $("audio");

milhouseApp.showFocusOutline = function() {
    $("body").on("keyup", function(e) {
        if (e.which === 9) {
            $(".button").removeClass("no-focus-outline");
        }
    })
};

milhouseApp.playSound = function() {
    for (let i = 0; i < $sounds.length; i++) {
        $(`.button-${i}`).on("click", function() {
            $sounds[i].play();
        })
    }
};

milhouseApp.pauseSound = function() {
    $sounds.on("play", function() {
        $sounds.not($(this)).each(function(index, sound) {
            sound.pause();
        })
    })
}

//document ready
$(function() {
    //app is called when document is ready
    milhouseApp.init();
});