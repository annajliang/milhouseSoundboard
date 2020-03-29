//where all functions will be stored
const soundboardApp = {};

//function that will execute all the functions when called
soundboardApp.init = function () {
    soundboardApp.disableSound();
    soundboardApp.showInfoAlert();
    soundboardApp.showFocusOutline();
    soundboardApp.toggleSound();
    soundboardApp.playSingleSound();
};

//variable where all audio files are stored
const $sounds = $("audio");

//variable where all button items are stored
const $buttons = $(".button__item");

//variable that contains an array of objects that stores additional information regarding the audio files
const soundInfo = [
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
    },
];

//function that disables the sound from being played when any "i" or ".button__responsive " elements are clicked
soundboardApp.disableSound = function () {
    $("i, .button__responsive").click(function () {
        $(this).prop("disabled", true);
        return false;
    });
};

//function that allows for the video width/height, alert padding/width and sound info to be modified 
soundboardApp.getAlertOptions = function (i, videoWidth, videoHeight, alertPadding, alertWidth) {
    //returns it as an object
    return {
        icon: "info",
        html: `
                    This audio is from: 
                    <br><a href="${soundInfo[i].wikiURL}" target="_blank">${soundInfo[i].episodeName}
                    (Season ${soundInfo[i].seasonNum}, Episode ${soundInfo[i].episodeNum})</a>
                    <br><iframe width="${videoWidth}" height="${videoHeight}" class="padding" src="${soundInfo[i].youtubeURL}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    `,
        showCloseButton: true,
        padding: `${alertPadding}rem`,
        width: `${alertWidth}rem`,
    };
};

//function that shows additional info about the sound that is played when user clicks on the corresponding info icon
//info alert is displayed on click events and keyup events (specifically the 'enter' key)
soundboardApp.showInfoAlert = function () {
    for (let i = 0; i < soundInfo.length; i++) {
        const alertOptions = $("body").width() >= 500 ? soundboardApp.getAlertOptions(i, 400, 300, "1.5", "25") : soundboardApp.getAlertOptions(i, 260, 210, "1", "20");
        $(`.icon-${i + 1}`).on("click", function () {
            Swal.fire(alertOptions);
        });
        $(`.icon-${i + 1}`).on("keyup", function (e) {
            if (e.which === 13) {
                Swal.fire(alertOptions);
            }
        });
    }
};

//function that shows the focus outline on "button" and "a" tags when the tab key is pressed
soundboardApp.showFocusOutline = function () {
    $("body").on("keyup", function (e) {
        if (e.which === 9) {
            $(this).removeClass("no-focus-outline");
        }
    });
};

//function that removes the filter when sound has ended
soundboardApp.resetFilterOnEnded = function (i) {
    $sounds.on("ended", function () {
        $(`.button__item--${i + 1}`).css({ "filter": "none" });
    });
}

//function that listens for a click on each button and toggles the corresponding sound on and off depending on whether the sound is paused or not
//filter is added when the sound is being played and removed when sound is paused
soundboardApp.toggleSound = function () {
    for (let i = 0; i < $sounds.length; i++) {
        $(`.button__item--${i + 1}`).on("click", function () {
            if ($sounds[i].paused) {
                $sounds[i].play();
                $(this).css({ "filter": "grayscale(62%)" });
            }
            else {
                $sounds[i].pause();
                $(this).css({ "filter": "none" });
            }
        });
        soundboardApp.resetFilterOnEnded(i);
    }
};

//function that only allows one filter to be applied at a time when a button is clicked on
soundboardApp.showSingleFilter = function () {
    $buttons.on("click", function () {
        $buttons.not($(this)).each(function (index, button) {
            $(button).css({ "filter": "none" });
        });
    });
};

//function that only allows for one sound to be played at a time when a button is clicked
soundboardApp.playSingleSound = function () {
    $sounds.on("play", function () {
        $sounds.not($(this)).each(function (index, sound) {
            sound.currentTime = 0;
            sound.pause();
            soundboardApp.showSingleFilter();
        });
    });
};

//document ready
$(function () {
    //app is called when document is ready
    soundboardApp.init();
});