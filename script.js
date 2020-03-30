//where all functions will be stored
const soundboardApp = {};

//variable where all audio files are stored
const $sounds = $("audio");

//variable where all button items are stored
const $buttons = $(".buttonItem");

//variable that contains an object with two nested objects, each storing the properties of values that are to be referenced more than once in soundInfo
const repeatedInfo = {
  lemonOfTroy: {
    wikiUrl: "https://en.wikipedia.org/wiki/Lemon_of_Troy",
    youtubeUrl: "https://www.youtube.com/embed/UxQsWHQWKsk",
    episodeName: "Lemon of Troy",
    seasonNum: 6,
    episodeNum: 24
  },
  lisasDateWithDensity: {
    wikiUrl: "https://en.wikipedia.org/wiki/Lisa%27s_Date_with_Density",
    youtubeUrl: "https://www.youtube.com/embed/WX8cDA87V3Y",
    episodeName: "Lisa's Date with Density",
    seasonNum: 8,
    episodeNum: 7
  }
};

//variable that contains an array of objects that stores additional information regarding the audio files
const soundInfo = [
  {
    wikiUrl: "https://en.wikipedia.org/wiki/Burns%27_Heir",
    youtubeUrl: "https://www.youtube.com/embed/_bj7AiQiszM",
    episodeName: "Burns' Heir",
    seasonNum: 5,
    episodeNum: 18
  },
  {
    wikiUrl: "https://en.wikipedia.org/wiki/Homerpalooza",
    youtubeUrl: "https://www.youtube.com/embed/mA1Mm22y9NM",
    episodeName: "Homerpalooza",
    seasonNum: 7,
    episodeNum: 24
  },
  {
    wikiUrl: "https://en.wikipedia.org/wiki/Marge_Be_Not_Proud",
    youtubeUrl: "https://www.youtube.com/embed/uUOxUEPJlNw",
    episodeName: "Marge Be Not Proud",
    seasonNum: 7,
    episodeNum: 11
  },
  {
    wikiUrl: "https://en.wikipedia.org/wiki/Lisa%27s_Sax",
    youtubeUrl: "https://www.youtube.com/embed/8k5D3sP_fqA",
    episodeName: "Lisa's Sax",
    seasonNum: 9,
    episodeNum: 3
  },
  {
    wikiUrl: "https://en.wikipedia.org/wiki/Bart_Sells_His_Soul",
    youtubeUrl: "https://www.youtube.com/embed/3dENaxa6NGM",
    episodeName: "Bart Sells His Soul",
    seasonNum: 7,
    episodeNum: 4
  },
  {
    wikiUrl: repeatedInfo.lemonOfTroy.wikiUrl,
    youtubeUrl: repeatedInfo.lemonOfTroy.youtubeUrl,
    episodeName: repeatedInfo.lemonOfTroy.episodeName,
    seasonNum: repeatedInfo.lemonOfTroy.seasonNum,
    episodeNum: repeatedInfo.lemonOfTroy.episodeNum
  },
  {
    wikiUrl: repeatedInfo.lisasDateWithDensity.wikiUrl,
    youtubeUrl: repeatedInfo.lisasDateWithDensity.youtubeUrl,
    episodeName: repeatedInfo.lisasDateWithDensity.episodeName,
    seasonNum: repeatedInfo.lisasDateWithDensity.seasonNum,
    episodeNum: repeatedInfo.lisasDateWithDensity.episodeNum
  },
  {
    wikiUrl: "https://en.wikipedia.org/wiki/Brother_from_the_Same_Planet",
    youtubeUrl: "https://www.youtube.com/embed/p_vyjk7c-MY",
    episodeName: "Brother from the Same Planet",
    seasonNum: 4,
    episodeNum: 14
  },
  {
    wikiUrl: repeatedInfo.lemonOfTroy.wikiUrl,
    youtubeUrl: repeatedInfo.lemonOfTroy.youtubeUrl,
    episodeName: repeatedInfo.lemonOfTroy.episodeName,
    seasonNum: repeatedInfo.lemonOfTroy.seasonNum,
    episodeNum: repeatedInfo.lemonOfTroy.episodeNum
  },
  {
    wikiUrl: "https://en.wikipedia.org/wiki/The_Canine_Mutiny",
    youtubeUrl: "https://www.youtube.com/embed/poyorjOXeCg",
    episodeName: "The Canine Mutiny",
    seasonNum: 8,
    episodeNum: 20
  },
  {
    wikiUrl: repeatedInfo.lemonOfTroy.wikiUrl,
    youtubeUrl: repeatedInfo.lemonOfTroy.youtubeUrl,
    episodeName: repeatedInfo.lemonOfTroy.episodeName,
    seasonNum: repeatedInfo.lemonOfTroy.seasonNum,
    episodeNum: repeatedInfo.lemonOfTroy.episodeNum
  },
  {
    wikiUrl: repeatedInfo.lisasDateWithDensity.wikiUrl,
    youtubeUrl: repeatedInfo.lisasDateWithDensity.youtubeUrl,
    episodeName: repeatedInfo.lisasDateWithDensity.episodeName,
    seasonNum: repeatedInfo.lisasDateWithDensity.seasonNum,
    episodeNum: repeatedInfo.lisasDateWithDensity.episodeNum
  },
  {
    wikiUrl: "https://en.wikipedia.org/wiki/Mom_and_Pop_Art",
    youtubeUrl: "https://www.youtube.com/embed/dGdX5Bpc1NU",
    episodeName: "Mom and Pop Art",
    seasonNum: 10,
    episodeNum: 19
  },
  {
    wikiUrl: "https://en.wikipedia.org/wiki/Team_Homer",
    youtubeUrl: "https://www.youtube.com/embed/s332KDgyyf8",
    episodeName: "Team Homer",
    seasonNum: 7,
    episodeNum: 12
  },
  {
    wikiUrl: "https://en.wikipedia.org/wiki/Days_of_Future_Future",
    youtubeUrl: "https://www.youtube.com/embed/DPBMJrd0O4A",
    episodeName: "Days of Future Future",
    seasonNum: 25,
    episodeNum: 18
  },
  {
    wikiUrl: "https://en.wikipedia.org/wiki/Sideshow_Bob%27s_Last_Gleaming",
    youtubeUrl: "https://www.youtube.com/embed/fU15E16K01c",
    episodeName: "Sideshow Bob's Last Gleaming",
    seasonNum: 7,
    episodeNum: 9
  }
];

//function that disables the sound from being played when any "i" or ".button__responsive " elements are clicked
soundboardApp.disableSound = function() {
  $("i, .buttonResponsive").click(function() {
    $(this).prop("disabled", true);
    return false;
  });
};

//function that takes three parameters and allows for the alert padding/width and the index of each nested object inside the soundInfo array to be modified depending on what arguments are passed
soundboardApp.getAlertOptions = function(i, alertPadding, alertWidth) {
  //returns the object
  return {
    icon: "info",
    html: `
                    This audio is from: 
                    <br><a href="${soundInfo[i].wikiUrl}" target="_blank">${soundInfo[i].episodeName}
                    (Season ${soundInfo[i].seasonNum}, Episode ${soundInfo[i].episodeNum})</a>
                    <br><iframe width="100%" height="300" class="padding" src="${soundInfo[i].youtubeUrl}" frameborder="0" allowfullscreen></iframe>
                    `,

    showCloseButton: true,
    padding: `${alertPadding}rem`,
    width: `${alertWidth}rem`
  };
};

//function that shows additional info about the sound that is played when user clicks on the corresponding info icon
soundboardApp.showInfoAlert = function() {
  for (let i = 0; i < soundInfo.length; i++) {
    //variable that stores either object (returned from soundboardApp.getAlertOptions) depending on if the condition is true or false
    const alertOptions =
      $("body").width() >= 500
        ? soundboardApp.getAlertOptions(i, "2", "25")
        : soundboardApp.getAlertOptions(i, "0.7", "20");
    //alert popup runs on click event for each info icon
    $(`.icon${i + 1}`).on("click", function() {
      Swal.fire(alertOptions);
    });
    //alert popup runs on keyup event
    $(`.icon${i + 1}`).on("keyup", function(e) {
      //specifically checks for the "enter" key during keyup
      if (e.which === 13) {
        Swal.fire(alertOptions);
      }
    });
  }
};

//function that shows the focus outline on "button" and "a" tags when the tab key is pressed
soundboardApp.showFocusOutline = function() {
  $("body").on("keyup", function(e) {
    if (e.which === 9) {
      $(this).removeClass("noFocusOutline");
    }
  });
};

//function that removes the current filter from the button that is currently playing sound when said sound has ended
soundboardApp.removeCurrentFilter = function(i) {
  $sounds.on("ended", function() {
    $(`.buttonItem${i + 1}`)
      .children(".buttonSide").removeClass("filter");
  });
};

//function that listens for a click on each button and toggles the corresponding sound on and off depending on whether the sound is paused or not
//filter is also added when the sound is being played and removed when sound is paused on only the children elements with a class name of .button__side of the parent element
soundboardApp.setupOnClickListeners = function() {
  for (let i = 0; i < $sounds.length; i++) {
    $(`.buttonItem${i + 1}`).on("click", function() {
      if ($sounds[i].paused) {
        $sounds[i].play();
        $(this)
          .children(".buttonSide").toggleClass("filter");
      } else {
        $sounds[i].pause();
        $(this)
          .children(".buttonSide").toggleClass("filter");
      }
    });
    soundboardApp.removeCurrentFilter(i);
  }
};

//function that only allows for one filter to be applied at a time on a click event
//removes any previous filters except the current one
soundboardApp.removeExtraFilters = function() {
  $buttons.on("click", function() {
    $buttons.not($(this)).each(function(index, button) {
      $(button)
        .children(".buttonSide").removeClass("filter");
    });
  });
};

//function that only allows for only one sound to be played at a time on a play event
//removes any previous sounds except the current one
soundboardApp.removeExtraSounds = function() {
  $sounds.on("play", function() {
    $sounds.not($(this)).each(function(index, sound) {
      sound.currentTime = 0;
      sound.pause();
      soundboardApp.removeExtraFilters();
    });
  });
};

//function that will execute all the functions when called
soundboardApp.init = function() {
  soundboardApp.disableSound();
  soundboardApp.showInfoAlert();
  soundboardApp.showFocusOutline();
  soundboardApp.setupOnClickListeners();
  soundboardApp.removeExtraSounds();
};

//document ready
$(function() {
  //soundboardApp is called when document is ready
  soundboardApp.init();
});
