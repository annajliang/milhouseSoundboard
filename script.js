//where all functions will be stored (namespacing)
const milhouseApp = {};

const audioArray = [
"https://od.lk/s/NDRfMjAyODgzMzBf/mom_says_im_cool.mp3",
"https://od.lk/s/NDRfMjAyODgzMzNf/my_mom_bought_me_deodorant.mp3",
"https://od.lk/s/NDRfMjAyODgzMzRf/welcome_thrillho.mp3",
"https://od.lk/s/NDRfMjAyODgzNDBf/i_have_soy_milk.mp3",
"https://od.lk/s/NDRfMjAyODgzMzlf/remember_alf.mp3",
"https://od.lk/s/NDRfMjAyODgzNDFf/gonna_explode_here.mp3",
"https://od.lk/s/NDRfMjAzMDcwMjRf/bound_to_respect_you.mp3",
"https://od.lk/s/NDRfMjAzMDcwMjVf/i_have_a_horsey.mp3",
"https://od.lk/s/NDRfMjAzMDcwMjZf/ill_kick_your_butt.mp3",
"https://od.lk/s/NDRfMjAzMDcwMjdf/why_did_i_have_the_bowl.mp3",
"https://od.lk/s/NDRfMjAzMDcwMzNf/when_doves_cry.mp3",
"https://od.lk/s/NDRfMjAzMDcwOTNf/whats_a_big_sister_for.mp3",
"https://od.lk/s/NDRfMjAzMDcwOTRf/everythings_coming_up_milhouse.mp3",
"https://od.lk/s/NDRfMjAzMDcwOTVf/im_freaking_out.mp3",
"https://od.lk/s/NDRfMjAzMDcwOTZf/hardest_place_to_add_mass.mp3",
"https://od.lk/s/NDRfMjAzMDcwOTdf/take_that_dr_sally_waxler.mp3"
]

milhouseApp.init = function() {
    milhouseApp.playSound();
};

milhouseApp.playSound = function() {
        for (let i = 0; i < audioArray.length; i++) {
            $(`#button-${i}`).on("click", function () {
                // console.log(audioArray[i]);
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