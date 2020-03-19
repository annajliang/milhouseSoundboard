//where all functions will be stored (namespacing)
const milhouseApp = {};

milhouseApp.init = function () {
    milhouseApp.alert();
    milhouseApp.showFocusOutline();
    milhouseApp.playSound();
    milhouseApp.pauseSound();
};

const $sounds = $("audio");

milhouseApp.alert = function () {
    Swal.fire({
        title: "Quote Info",
        html: `This quote is from: <br><a href="https://en.wikipedia.org/wiki/Burns%27_Heir">Burns' Heir (Season 5, Episode 18)</a>`,
        // html: `This quote is from Burns' Heir (Season 5, Episode 18) <iframe width="450" height="300" src="https://www.youtube.com/embed/_bj7AiQiszM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        icon: "info",
        padding: "1.5rem",
        width: "20rem"
    });
}

milhouseApp.showFocusOutline = function () {
    $("body").on("keyup", function (e) {
        if (e.which === 9) {
            $(".button").removeClass("no-focus-outline");
        }
    })
};

milhouseApp.playSound = function () {
    for (let i = 0; i < $sounds.length; i++) {
        $(`.button-${i}`).on("click", function () {
            $sounds[i].play();
        })
    }
};

milhouseApp.pauseSound = function () {
    $sounds.on("play", function () {
        $sounds.not($(this)).each(function (index, sound) {
            sound.pause();
        })
    })
}

//document ready
$(function () {
    //app is called when document is ready
    milhouseApp.init();
});