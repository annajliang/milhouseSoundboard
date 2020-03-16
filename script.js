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
    milhouseApp.playSound();
};

milhouseApp.getSound = function() {
    $(".button__side--back").on("click", function() {
        let buttonNum = `"#${$(this).attr("id")}"`;
        return buttonNum
    })
}

let buttonNumIndex = milhouseApp.getSound();
console.log(buttonNumIndex);

milhouseApp.playSound = function(buttonNumIndex) {
    $(`${buttonNumIndex}`).on("click", function() {
        const audio = new Audio(milhouseQuotes[0]);
        audio.play();
    })
}

//document ready
$(function () {
    //app is called when document is ready
    milhouseApp.init();
});
