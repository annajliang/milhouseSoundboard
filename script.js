//where all functions will be stored (namespacing)
const milhouseApp = {};

const milhouseQuotes = [
"https://od.lk/s/NDRfMjAyODgzMzBf/mom_says_im_cool.mp3"
]

milhouseApp.init = function() {
    milhouseApp.getSound();
};

milhouseApp.getSound = function() {
    $(".sound-1").on("click", function() {
        const audio = new Audio(milhouseQuotes[0]);
        audio.play();
    })
}

//document ready
$(function () {
    //app is called when document is ready
    milhouseApp.init();
});
