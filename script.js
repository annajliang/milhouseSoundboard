//where all functions will be stored (namespacing)
const milhouseApp = {};

const audioArray = [
"https://od.lk/s/NDRfMjAyODgzMzBf/mom_says_im_cool.mp3",
"https://od.lk/s/NDRfMjAyODgzMzNf/my_mom_bought_me_deodorant.mp3",
"https://od.lk/s/NDRfMjAyODgzMzRf/welcome_thrillho.mp3",
"https://od.lk/s/NDRfMjAyODgzNDBf/i_have_soy_milk.mp3",
"https://od.lk/s/NDRfMjAyODgzMzlf/remember_alf.mp3",
"https://od.lk/s/NDRfMjAyODgzNDFf/gonna_explode_here.mp3"
]

// const audioArray = [
//     {
//         audio: "https://od.lk/s/NDRfMjAyODgzMzBf/mom_says_im_cool.mp3",
//         id: "button-0"
//     },
//     {
//         audio: "https://od.lk/s/NDRfMjAyODgzMzNf/my_mom_bought_me_deodorant.mp3",
//         id: "button-1"
//     },
//     {
//         audio: "https://od.lk/s/NDRfMjAyODgzMzRf/welcome_thrillho.mp3",
//         id: "button-2"
//     },
//     {
//         audio: "https://od.lk/s/NDRfMjAyODgzNDBf/i_have_soy_milk.mp3",
//         id: "button-3"
//     },
//     {
//         audio: "https://od.lk/s/NDRfMjAyODgzMzlf/remember_alf.mp3",
//         id: "button-4"
//     },
//     {
//         audio: "https://od.lk/s/NDRfMjAyODgzNDFf/gonna_explode_here.mp3",
//         id: "button-5"
//     }
// ]

milhouseApp.init = function() {
    milhouseApp.playSound();
};

milhouseApp.playSound = function() {
        for (let i = 0; i < audioArray.length; i++) {
            $(`#button-${i}`).on("click", function () {
                console.log(audioArray[i]);
                const audio = new Audio(audioArray[i]);
                audio.play();
            })
        }
}

//document ready
$(function () {
    //app is called when document is ready
    milhouseApp.init();
});