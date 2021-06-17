const amplitudeJS = () => {
    waitForElement(".song", 8000)
        .then(function () {
            console.log("song element is loaded.. do stuff");
            amplitudePlayerScript();
        })
        .catch(() => {
            console.log("song element did not load in 8 seconds");
        });
};

function waitForElement(querySelector, timeout = 0) {
    const startTime = new Date().getTime();
    return new Promise((resolve, reject) => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            if (document.querySelector(querySelector)) {
                clearInterval(timer);
                resolve();
            } else if (timeout && now - startTime >= timeout) {
                clearInterval(timer);
                reject();
            }
        }, 100);
    });
}

function amplitudePlayerScript() {
    /*
	When the bandcamp link is pressed, stop all propagation so AmplitudeJS doesn't
	play the song.
*/
    // let bandcampLinks = document.getElementsByClassName("bandcamp-link");

    // for (var i = 0; i < bandcampLinks.length; i++) {
    //     bandcampLinks[i].addEventListener("click", function (e) {
    //         e.stopPropagation();
    //     });
    // }

    let songElements = document.getElementsByClassName("song");

    for (var i = 0; i < songElements.length; i++) {
        /*
		Ensure that on mouseover, CSS styles don't get messed up for active songs.
	*/
        songElements[i].addEventListener("mouseover", function () {
            this.style.backgroundColor = "#00A0FF";

            this.querySelectorAll(
                ".song-meta-data .song-title"
            )[0].style.color = "#FFFFFF";
            this.querySelectorAll(
                ".song-meta-data .song-artist"
            )[0].style.color = "#FFFFFF";

            if (!this.classList.contains("amplitude-active-song-container")) {
                this.querySelectorAll(
                    ".play-button-container"
                )[0].style.display = "block";
            }

            this.querySelectorAll("img.bandcamp-grey")[0].style.display =
                "none";
            this.querySelectorAll("img.bandcamp-white")[0].style.display =
                "block";
            this.querySelectorAll(".song-duration")[0].style.color = "#FFFFFF";
        });

        /*
		Ensure that on mouseout, CSS styles don't get messed up for active songs.
	*/
        songElements[i].addEventListener("mouseout", function () {
            this.style.backgroundColor = "#FFFFFF";
            this.querySelectorAll(
                ".song-meta-data .song-title"
            )[0].style.color = "#272726";
            this.querySelectorAll(
                ".song-meta-data .song-artist"
            )[0].style.color = "#607D8B";
            this.querySelectorAll(".play-button-container")[0].style.display =
                "none";
            this.querySelectorAll("img.bandcamp-grey")[0].style.display =
                "block";
            this.querySelectorAll("img.bandcamp-white")[0].style.display =
                "none";
            this.querySelectorAll(".song-duration")[0].style.color = "#607D8B";
        });

        /*
		Show and hide the play button container on the song when the song is clicked.
	*/
        songElements[i].addEventListener("click", function () {
            this.querySelectorAll(".play-button-container")[0].style.display =
                "none";
        });
    }

    /*
	Initializes AmplitudeJS
*/
Amplitude.init({
    songs: [
        {
            name: "Jura 1 podcast",
            artist: "Sonny Christoffersen",
            album: "Finansjura",
            url:
                "https://res.cloudinary.com/hndu2f8jv/video/upload/v1623936160/podcasts/Poscast_til_eksamensopgave_9.6._Joachim_btjteb.m4a",
            cover_art_url:
                "https://res.cloudinary.com/hndu2f8jv/image/upload/v1623938959/sonnyjuraimages/legal1_quhdds.jpg",
        },
        {
            name: "The Gun",
            artist: "Sonny Christoffersen",
            album: "Finansjura",
            url: "https://521dimensions.com/song/08 The Gun.mp3",
            cover_art_url:
            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1623938956/sonnyjuraimages/legal2_w8dskp.jpg",
        },
        {
            name: "Anvil",
            artist: "Sonny Christoffersen",
            album: "Finansjura",
            url: "https://521dimensions.com/song/LORN - ANVIL.mp3",
            cover_art_url:
                "https://res.cloudinary.com/hndu2f8jv/image/upload/v1623938951/sonnyjuraimages/legal7_tkypaw.jpg",
        },
        {
            name: "I Came Running",
            artist: "Sonny Christoffersen",
            album: "Finansjura",
            url:
                "https://521dimensions.com/song/ICameRunning-AncientAstronauts.mp3",
            cover_art_url:
                "https://res.cloudinary.com/hndu2f8jv/image/upload/v1623938952/sonnyjuraimages/legal3_qdy0v9.jpg",
        },
        {
            name: "First Snow",
            artist: "Sonny Christoffersen",
            album: "Finansjura",
            url: "https://521dimensions.com/song/FirstSnow-Emancipator.mp3",
            cover_art_url:
            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1623938951/sonnyjuraimages/legal5_qkiogk.jpg",
        },
        {
            name: "Terrain",
            artist: "Sonny Christoffersen",
            album: "Finansjura",
            url: "https://521dimensions.com/song/Terrain-pglost.mp3",
            cover_art_url:
                "https://res.cloudinary.com/hndu2f8jv/image/upload/v1623938951/sonnyjuraimages/legal4_eprxz2.jpg",
        },
        {
            name: "Vorel",
            artist: "Sonny Christoffersen",
            album: "Finansjura",
            url: "https://521dimensions.com/song/Vorel-RussianCircles.mp3",
            cover_art_url:
                "https://res.cloudinary.com/hndu2f8jv/image/upload/v1623938951/sonnyjuraimages/legal6_gmd4fn.jpg",
        },
        {
            name: "Intro / Sweet Glory",
            artist: "Sonny Christoffersen",
            album: "Finansjura",
            url:
                "https://521dimensions.com/song/IntroSweetGlory-Jimkata.mp3",
            cover_art_url:
                "https://res.cloudinary.com/hndu2f8jv/image/upload/v1623938948/sonnyjuraimages/legal9_tkzi0d.jpg",
        },
        {
            name: "Offcut #6",
            artist: "Sonny Christoffersen",
            album: "Finansjura",
            url: "https://521dimensions.com/song/Offcut6-LittlePeople.mp3",
            cover_art_url:
            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1623938948/sonnyjuraimages/legal13_a5duka.jpg",
                
        },
        {
            name: "Dusk To Dawn",
            artist: "Sonny Christoffersen",
            album: "Finansjura",
            url:
                "https://521dimensions.com/song/DuskToDawn-Emancipator.mp3",
            cover_art_url:
                "https://res.cloudinary.com/hndu2f8jv/image/upload/v1623938948/sonnyjuraimages/legal8_bwxadc.jpg",
        },
        {
            name: "Anthem",
            artist: "Sonny Christoffersen",
            album: "Finansjura",
            url: "https://521dimensions.com/song/Anthem-Emancipator.mp3",
            cover_art_url:
                "https://res.cloudinary.com/hndu2f8jv/image/upload/v1623938948/sonnyjuraimages/legal12_mdul7h.jpg",
        },
    ],
    callbacks: {
        play: function () {
            document.getElementById("album-art").style.visibility =
                "hidden";
            document.getElementById(
                "large-visualization"
            ).style.visibility = "visible";
        },

        pause: function () {
            document.getElementById("album-art").style.visibility =
                "visible";
            document.getElementById(
                "large-visualization"
            ).style.visibility = "hidden";
        },
    },
    waveforms: {
        sample_rate: 50,
    },
});

    /* Amplitude.init({
        songs: [
            {
                name: "Jura 1 podcast",
                artist: "Sonny Christoffersen",
                album: "Finansjura",
                url:
                    "https://res.cloudinary.com/hndu2f8jv/video/upload/v1623936160/podcasts/Poscast_til_eksamensopgave_9.6._Joachim_btjteb.m4a",
                cover_art_url:
                    "https://res.cloudinary.com/hndu2f8jv/image/upload/v1623938959/sonnyjuraimages/legal1_quhdds.jpg",
            },
            {
                name: "The Gun",
                artist: "Sonny Christoffersen",
                album: "Finansjura",
                url: "https://521dimensions.com/song/08 The Gun.mp3",
                cover_art_url:
                "https://res.cloudinary.com/hndu2f8jv/image/upload/v1623938956/sonnyjuraimages/legal2_w8dskp.jpg",
            },
            {
                name: "Anvil",
                artist: "Sonny Christoffersen",
                album: "Finansjura",
                url: "https://521dimensions.com/song/LORN - ANVIL.mp3",
                cover_art_url:
                    "https://res.cloudinary.com/hndu2f8jv/image/upload/v1623938951/sonnyjuraimages/legal7_tkypaw.jpg",
            },
            {
                name: "I Came Running",
                artist: "Sonny Christoffersen",
                album: "Finansjura",
                url:
                    "https://521dimensions.com/song/ICameRunning-AncientAstronauts.mp3",
                cover_art_url:
                    "https://res.cloudinary.com/hndu2f8jv/image/upload/v1623938952/sonnyjuraimages/legal3_qdy0v9.jpg",
            },
            {
                name: "First Snow",
                artist: "Sonny Christoffersen",
                album: "Finansjura",
                url: "https://521dimensions.com/song/FirstSnow-Emancipator.mp3",
                cover_art_url:
                "https://res.cloudinary.com/hndu2f8jv/image/upload/v1623938951/sonnyjuraimages/legal5_qkiogk.jpg",
            },
            {
                name: "Terrain",
                artist: "Sonny Christoffersen",
                album: "Finansjura",
                url: "https://521dimensions.com/song/Terrain-pglost.mp3",
                cover_art_url:
                    "https://res.cloudinary.com/hndu2f8jv/image/upload/v1623938951/sonnyjuraimages/legal4_eprxz2.jpg",
            },
            {
                name: "Vorel",
                artist: "Sonny Christoffersen",
                album: "Finansjura",
                url: "https://521dimensions.com/song/Vorel-RussianCircles.mp3",
                cover_art_url:
                    "https://res.cloudinary.com/hndu2f8jv/image/upload/v1623938951/sonnyjuraimages/legal6_gmd4fn.jpg",
            },
            {
                name: "Intro / Sweet Glory",
                artist: "Sonny Christoffersen",
                album: "Finansjura",
                url:
                    "https://521dimensions.com/song/IntroSweetGlory-Jimkata.mp3",
                cover_art_url:
                    "https://res.cloudinary.com/hndu2f8jv/image/upload/v1623938948/sonnyjuraimages/legal9_tkzi0d.jpg",
            },
            {
                name: "Offcut #6",
                artist: "Sonny Christoffersen",
                album: "Finansjura",
                url: "https://521dimensions.com/song/Offcut6-LittlePeople.mp3",
                cover_art_url:
                "https://res.cloudinary.com/hndu2f8jv/image/upload/v1623938948/sonnyjuraimages/legal13_a5duka.jpg",
                    
            },
            {
                name: "Dusk To Dawn",
                artist: "Sonny Christoffersen",
                album: "Finansjura",
                url:
                    "https://521dimensions.com/song/DuskToDawn-Emancipator.mp3",
                cover_art_url:
                    "https://res.cloudinary.com/hndu2f8jv/image/upload/v1623938948/sonnyjuraimages/legal8_bwxadc.jpg",
            },
            {
                name: "Anthem",
                artist: "Sonny Christoffersen",
                album: "Finansjura",
                url: "https://521dimensions.com/song/Anthem-Emancipator.mp3",
                cover_art_url:
                    "https://res.cloudinary.com/hndu2f8jv/image/upload/v1623938948/sonnyjuraimages/legal12_mdul7h.jpg",
            },
        ],
        callbacks: {
            play: function () {
                document.getElementById("album-art").style.visibility =
                    "hidden";
                document.getElementById(
                    "large-visualization"
                ).style.visibility = "visible";
            },

            pause: function () {
                document.getElementById("album-art").style.visibility =
                    "visible";
                document.getElementById(
                    "large-visualization"
                ).style.visibility = "hidden";
            },
        },
        waveforms: {
            sample_rate: 50,
        },
    }); */
    document.getElementById("large-visualization").style.height =
        document.getElementById("album-art").offsetWidth + "px";
}

export default amplitudeJS;