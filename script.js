//where all functions will be stored (namespacing)
const milhouseApp = {};

const milhouseQuotes = [
"https://od.lk/s/NDRfMjAyODgzMzBf/mom_says_im_cool.mp3",
"https://od.lk/s/NDRfMjAyODgzMzNf/my_mom_bought_me_deodorant.mp3",
"https://od.lk/s/NDRfMjAyODgzMzRf/welcome_thrillho.mp3",
"https://od.lk/s/NDRfMjAyODgzNDBf/i_have_soy_milk.mp3",
"https://od.lk/s/NDRfMjAyODgzMzlf/remember_alf.mp3",
"https://od.lk/s/NDRfMjAyODgzNDFf/gonna_explode_here.mp3"
]

milhouseApp.init = function() {
    milhouseApp.getSound();
};

milhouseApp.getSound = function() {
    $(".sound-1").on("click", function() {
        const audio = new Audio(milhouseQuotes[0]);
        audio.play();
    })

    $(".sound-2").on("click", function () {
        const audio = new Audio(milhouseQuotes[1]);
        audio.play();
    })

    $(".sound-3").on("click", function () {
        const audio = new Audio(milhouseQuotes[2]);
        audio.play();
    })

    $(".sound-4").on("click", function () {
        const audio = new Audio(milhouseQuotes[3]);
        audio.play();
    })

    $(".sound-5").on("click", function () {
        const audio = new Audio(milhouseQuotes[4]);
        audio.play();
    })

    $(".sound-6").on("click", function () {
        const audio = new Audio(milhouseQuotes[5]);
        audio.play();
    })
}

//document ready
$(function () {
    //app is called when document is ready
    milhouseApp.init();
});
