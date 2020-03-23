//where all functions will be stored (namespacing)
const milhouseApp = {};

milhouseApp.init = function () {
    milhouseApp.infoAlert();
    // milhouseApp.infoAlertMobile();
    milhouseApp.showFocusOutline();
    milhouseApp.toggleSound();
    milhouseApp.playSingleSound();
};

const $sounds = $("audio");

const quoteInfo = [
    {
        wikiURL: "https://en.wikipedia.org/wiki/Burns%27_Heir",
        youtubeURL: "https://www.youtube.com/embed/_bj7AiQiszM",
        episodeName: "Burns' Heir",
        seasonNum: 5,
        episodeNum: 18,
    },
    {
        wikiURL: "https://en.wikipedia.org/wiki/Homerpalooza",
        youtubeURL: "https://www.youtube.com/embed/mA1Mm22y9NM",
        episodeName: "Homerpalooza",
        seasonNum: 7,
        episodeNum: 24,
    },
    {
        wikiURL: "https://en.wikipedia.org/wiki/Marge_Be_Not_Proud",
        youtubeURL: "https://www.youtube.com/embed/uUOxUEPJlNw",
        episodeName: "Marge Be Not Proud",
        seasonNum: 7,
        episodeNum: 11,
    },
    {
        wikiURL: "https://en.wikipedia.org/wiki/Lisa%27s_Sax",
        youtubeURL: "https://www.youtube.com/embed/8k5D3sP_fqA",
        episodeName: "Lisa's Sax",
        seasonNum: 9,
        episodeNum: 3,
    },
    {
        wikiURL: "https://en.wikipedia.org/wiki/Bart_Sells_His_Soul",
        youtubeURL: "https://www.youtube.com/embed/3dENaxa6NGM",
        episodeName: "Bart Sells His Soul",
        seasonNum: 7,
        episodeNum: 4,
    },
    {
        wikiURL: "https://en.wikipedia.org/wiki/Lemon_of_Troy",
        youtubeURL: "https://www.youtube.com/embed/UxQsWHQWKsk",
        episodeName: "Lemon of Troy",
        seasonNum: 6,
        episodeNum: 24,
    },
    {
        wikiURL: "https://en.wikipedia.org/wiki/Lisa%27s_Date_with_Density",
        youtubeURL: "https://www.youtube.com/embed/WX8cDA87V3Y",
        episodeName: "Lisa's Date with Density",
        seasonNum: 8,
        episodeNum: 7,
    },
    {
        wikiURL: "https://en.wikipedia.org/wiki/Brother_from_the_Same_Planet",
        youtubeURL: "https://www.youtube.com/embed/p_vyjk7c-MY",
        episodeName: "Brother from the Same Planet",
        seasonNum: 4,
        episodeNum: 14,
    },
    {
        wikiURL: "https://en.wikipedia.org/wiki/Lemon_of_Troy",
        youtubeURL: "https://www.youtube.com/embed/UxQsWHQWKsk",
        episodeName: "Lemon of Troy",
        seasonNum: 6,
        episodeNum: 24,
    },
    {
        wikiURL: "https://en.wikipedia.org/wiki/The_Canine_Mutiny",
        youtubeURL: "https://www.youtube.com/embed/poyorjOXeCg",
        episodeName: "The Canine Mutiny",
        seasonNum: 8,
        episodeNum: 20,
    },
    {
        wikiURL: "https://en.wikipedia.org/wiki/Lemon_of_Troy",
        youtubeURL: "https://www.youtube.com/embed/UxQsWHQWKsk",
        episodeName: "Lemon of Troy",
        seasonNum: 6,
        episodeNum: 24,
    },
    {
        wikiURL: "https://en.wikipedia.org/wiki/Lisa%27s_Date_with_Density",
        youtubeURL: "https://www.youtube.com/embed/WX8cDA87V3Y",
        episodeName: "Lisa's Date with Density",
        seasonNum: 8,
        episodeNum: 7,
    },
    {
        wikiURL: "https://en.wikipedia.org/wiki/Mom_and_Pop_Art",
        youtubeURL: "https://www.youtube.com/embed/dGdX5Bpc1NU",
        episodeName: "Mom and Pop Art",
        seasonNum: 10,
        episodeNum: 19,
    },
    {
        wikiURL: "https://en.wikipedia.org/wiki/Team_Homer",
        youtubeURL: "https://www.youtube.com/embed/s332KDgyyf8",
        episodeName: "Team Homer",
        seasonNum: 7,
        episodeNum: 12,
    },
    {
        wikiURL: "https://en.wikipedia.org/wiki/Days_of_Future_Future",
        youtubeURL: "https://www.youtube.com/embed/DPBMJrd0O4A",
        episodeName: "Days of Future Future",
        seasonNum: 25,
        episodeNum: 18,
    },
    {
        wikiURL: "https://en.wikipedia.org/wiki/Sideshow_Bob%27s_Last_Gleaming",
        youtubeURL: "https://www.youtube.com/embed/fU15E16K01c",
        episodeName: "Sideshow Bob's Last Gleaming",
        seasonNum: 7,
        episodeNum: 9,
    }
]

milhouseApp.infoAlert = function () {
    for (let i = 0; i < quoteInfo.length; i++) {
        $(`.icon-${i + 1}`).on("click", function () {
            Swal.fire({
                // title: "Info",
                icon: "info",
                html: `
                    This audio is from: 
                    <br><a href="${quoteInfo[i].wikiURL}" target="_blank">${quoteInfo[i].episodeName}
                    (Season ${quoteInfo[i].seasonNum}, Episode ${quoteInfo[i].episodeNum})</a>
                    <br><iframe width="400" height="300" class="padding" src="${quoteInfo[i].youtubeURL}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    `,
                showCloseButton: true,
                padding: "1.5rem",
                // width: "20rem"
                width: "25rem"
            });
        })
    }
}

// milhouseApp.infoAlertMobile = function () {
//     if (matchMedia('only screen and (max-width: 425px)').matches) {
//         for (let i = 0; i < quoteInfo.length; i++) {
//             $(`.icon-${i + 1}`).on("click", function () {
//                 Swal.fire({
//                     // title: "Info",
//                     icon: "info",
//                     html: `
//                     This audio is from: 
//                     <br><a href="${quoteInfo[i].wikiURL}" target="_blank">${quoteInfo[i].episodeName}
//                     (Season ${quoteInfo[i].seasonNum}, Episode ${quoteInfo[i].episodeNum})</a>
//                     <br><iframe width="300" height="250" class="padding" src="${quoteInfo[i].youtubeURL}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//                     `,
//                     showCloseButton: true,
//                     padding: "1.5rem",
//                     // width: "20rem"
//                     width: "25rem"
//                 });
//             })
//         }
//     }
// }

milhouseApp.showFocusOutline = function () {
    $("body").on("keyup", function (e) {
        if (e.which === 9) {
            $(".button").removeClass("no-focus-outline");
        }
    })
};

milhouseApp.toggleSound = function() {
    for (let i = 0; i < $sounds.length; i++) {
        $(`.button-${i + 1}`).on("click", function () {
            if ($sounds[i].paused) {
                $sounds[i].play();
            }
            else {
                $sounds[i].pause();
            }
        })
    }
}

milhouseApp.playSingleSound = function () {
    $sounds.on("play", function () {
        $sounds.not($(this)).each(function (index, sound) {
            sound.currentTime = 0;
            sound.pause();
        })
    })
}

//document ready
$(function () {
    //app is called when document is ready
    milhouseApp.init();
});