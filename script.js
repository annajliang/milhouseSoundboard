//where all functions will be stored (namespacing)
const milhouseApp = {};

milhouseApp.init = function () {
    milhouseApp.alert();
    milhouseApp.showFocusOutline();
    milhouseApp.playSound();
    milhouseApp.pauseSound();
};

const $sounds = $("audio");

const quoteInfo = [
    {
        wikiURL: "https://en.wikipedia.org/wiki/Burns%27_Heir",
        episodeName: "Burns' Heir",
        seasonNum: 5,
        episodeNum: 18,
    },
    {
        wikiURL: "https://en.wikipedia.org/wiki/Homerpalooza' target='_blank",
        episodeName: "Homerpalooza",
        seasonNum: 7,
        episodeNum: 24,
    },
    {
        wikiURL: "https://en.wikipedia.org/wiki/Marge_Be_Not_Proud' target='_blank",
        episodeName: "Marge Be Not Proud",
        seasonNum: 7,
        episodeNum: 11,
    },
    {
        wikiURL: "https://en.wikipedia.org/wiki/Lisa%27s_Sax' target='_blank",
        episodeName: "Lisa's Sax",
        seasonNum: 9,
        episodeNum: 3,
    },
    {
        wikiURL: "https://en.wikipedia.org/wiki/Bart_Sells_His_Soul' target='_blank",
        episodeName: "Bart Sells His Soul",
        seasonNum: 7,
        episodeNum: 4,
    },
    {
        wikiURL: "https://en.wikipedia.org/wiki/Lemon_of_Troy' target='_blank",
        episodeName: "Lemon of Troy",
        seasonNum: 6,
        episodeNum: 24,
    },
    {
        wikiURL: "https://en.wikipedia.org/wiki/Lisa%27s_Date_with_Density' target='_blank",
        episodeName: "Lisa's Date with Density",
        seasonNum: 8,
        episodeNum: 7,
    },
    {
        wikiURL: "https://en.wikipedia.org/wiki/Lemon_of_Troy' target='_blank",
        episodeName: "Lemon of Troy",
        seasonNum: 6,
        episodeNum: 24,
    },
    {
        wikiURL: "https://en.wikipedia.org/wiki/The_Canine_Mutiny' target='_blank",
        episodeName: "The Canine Mutiny",
        seasonNum: 8,
        episodeNum: 20,
    },
    {
        wikiURL: "https://en.wikipedia.org/wiki/Lemon_of_Troy' target='_blank",
        episodeName: "Lemon of Troy",
        seasonNum: 6,
        episodeNum: 24,
    },
    {
        wikiURL: "https://en.wikipedia.org/wiki/Lisa%27s_Date_with_Density' target='_blank",
        episodeName: "Lisa's Date with Density",
        seasonNum: 8,
        episodeNum: 7,
    },
    {
        wikiURL: "https://en.wikipedia.org/wiki/Mom_and_Pop_Art' target='_blank",
        episodeName: "Mom and Pop Art",
        seasonNum: 10,
        episodeNum: 19,
    },
    {
        wikiURL: "https://en.wikipedia.org/wiki/Team_Homer' target='_blank",
        episodeName: "Mom and Pop Art",
        seasonNum: 7,
        episodeNum: 12,
    },
    {
        wikiURL: "https://en.wikipedia.org/wiki/Days_of_Future_Future' target='_blank",
        episodeName: "Days of Future Future",
        seasonNum: 25,
        episodeNum: 18,
    },
    {
        wikiURL: "https://en.wikipedia.org/wiki/Sideshow_Bob%27s_Last_Gleaming' target='_blank",
        episodeName: "Days of Future Future",
        seasonNum: 7,
        episodeNum: 9,
    }
]

milhouseApp.alert = function () {
    $("i").on("click", function() {
        Swal.fire({
            title: "Info",
            html: `This audio is from: <br><a href="${quoteInfo[0].wikiURL}" target="_blank">${quoteInfo[0].episodeName} (Season ${quoteInfo[0].seasonNum}, Episode ${quoteInfo[0].episodeNum})</a>`,
            // html: `This quote is from Burns' Heir (Season 5, Episode 18) <iframe width="450" height="300" src="https://www.youtube.com/embed/_bj7AiQiszM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
            icon: "info",
            padding: "1.5rem",
            width: "20rem"
        });       
    })
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