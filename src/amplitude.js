const amplitudeJS = () => {
    waitForElement("#white-player-playlist-container", 8000)
        .then(function () {
            console.log(
                "white-player-playlist-container element is loaded.. do stuff"
            );
            amplitudePlayerScript();
        })
        .catch(() => {
            console.log(
                "white-player-playlist-container element did not load in 8 seconds"
            );
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
    document
        .getElementsByClassName("show-playlist")[0]
        .addEventListener("click", function () {
            document
                .getElementById("white-player-playlist-container")
                .classList.remove("slide-out-top");
            document
                .getElementById("white-player-playlist-container")
                .classList.add("slide-in-top");
            document.getElementById(
                "white-player-playlist-container"
            ).style.display = "block";
        });

    document
        .getElementsByClassName("close-playlist")[0]
        .addEventListener("click", function () {
            document
                .getElementById("white-player-playlist-container")
                .classList.remove("slide-in-top");
            document
                .getElementById("white-player-playlist-container")
                .classList.add("slide-out-top");
            document.getElementById(
                "white-player-playlist-container"
            ).style.display = "none";
        });

    document
        .getElementsByClassName("show-playlist")[1]
        .addEventListener("click", function () {
            document
                .getElementById("white-player-playlist-container2")
                .classList.remove("slide-out-top");
            document
                .getElementById("white-player-playlist-container2")
                .classList.add("slide-in-top");
            document.getElementById(
                "white-player-playlist-container2"
            ).style.display = "block";
        });

    document
        .getElementsByClassName("close-playlist")[1]
        .addEventListener("click", function () {
            document
                .getElementById("white-player-playlist-container2")
                .classList.remove("slide-in-top");
            document
                .getElementById("white-player-playlist-container2")
                .classList.add("slide-out-top");
            document.getElementById(
                "white-player-playlist-container2"
            ).style.display = "none";
        });

    Amplitude.init({
        songs: [
            {
                name: "First Snow",
                artist: "Emancipator",
                album: "Soon It Will Be Cold Enough",
                url: "https://521dimensions.com/song/FirstSnow-Emancipator.mp3",
                cover_art_url:
                    "https://521dimensions.com/img/open-source/amplitudejs/album-art/soon-it-will-be-cold-enough.jpg",
            },
        ],
        playlists: {
            emancipator: {
                songs: [
                    {
                        name: "First Snow",
                        artist: "Emancipator",
                        album: "Soon It Will Be Cold Enough",
                        url:
                            "https://521dimensions.com/song/FirstSnow-Emancipator.mp3",
                        cover_art_url:
                            "https://521dimensions.com/img/open-source/amplitudejs/album-art/soon-it-will-be-cold-enough.jpg",
                    },
                    {
                        name: "Dusk To Dawn",
                        artist: "Emancipator",
                        album: "Dusk To Dawn",
                        url:
                            "https://521dimensions.com/song/DuskToDawn-Emancipator.mp3",
                        cover_art_url:
                            "https://521dimensions.com/img/open-source/amplitudejs/album-art/from-dusk-to-dawn.jpg",
                    },
                    {
                        name: "Anthem",
                        artist: "Emancipator",
                        album: "Soon It Will Be Cold Enough",
                        url:
                            "https://521dimensions.com/song/Anthem-Emancipator.mp3",
                        cover_art_url:
                            "https://521dimensions.com/img/open-source/amplitudejs/album-art/soon-it-will-be-cold-enough.jpg",
                    },
                ],
            },
            trip_hop: {
                songs: [
                    {
                        name: "Risin' High (feat Raashan Ahmad)",
                        artist: "Ancient Astronauts",
                        album: "We Are to Answer",
                        url:
                            "https://521dimensions.com/song/Ancient Astronauts - Risin' High (feat Raashan Ahmad).mp3",
                        cover_art_url:
                            "https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg",
                    },
                    {
                        name: "The Gun",
                        artist: "Lorn",
                        album: "Ask The Dust",
                        url: "https://521dimensions.com/song/08 The Gun.mp3",
                        cover_art_url:
                            "https://521dimensions.com/img/open-source/amplitudejs/album-art/ask-the-dust.jpg",
                    },
                    {
                        name: "Anvil",
                        artist: "Lorn",
                        album: "Anvil",
                        url: "https://521dimensions.com/song/LORN - ANVIL.mp3",
                        cover_art_url:
                            "https://521dimensions.com/img/open-source/amplitudejs/album-art/anvil.jpg",
                    },
                ],
            },
        },
    });
}

export default amplitudeJS;
