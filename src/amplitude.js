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
                name: "Eksamensopgave 9.7. Knudsen Properties v. Dennis Knudsen",
                artist: "Emancipator",
                album: "Finansjura",
                url: "https://res.cloudinary.com/hndu2f8jv/video/upload/v1623936132/podcasts/Poscast_til_eksamensopgave_9.7._Knudsen_Properties_v._Dennis_Knudsen_m2sllj.m4a",
                cover_art_url:
                    "https://res.cloudinary.com/hndu2f8jv/image/upload/v1623938956/sonnyjuraimages/legal2_w8dskp.jpg",
            },
        ],
        playlists: {
            emancipator: {
                songs: [
                    {
                        name: "Eksamensopgave 9.3. Tømrermester Bertil Jaobsen og Tina Jensen",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "https://res.cloudinary.com/hndu2f8jv/video/upload/v1623936130/podcasts/Poscast_til_eksamensopgave_9.3._T%C3%B8mrermester_Bertil_Jaobsen_og_Tina_Jensen_vosge7.m4a",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624045659/podcastgif/giphy_1_rrpccq.gif",
                    },
                    {
                        name: "Dusk To Dawn",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "https://521dimensions.com/song/DuskToDawn-Emancipator.mp3",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624045659/podcastgif/giphy_1_rrpccq.gif",
                    },
                    {
                        name: "Eksamensopgave 9.4. Lottogevinsten",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "https://res.cloudinary.com/hndu2f8jv/video/upload/v1623936133/podcasts/Poscast_til_eksamensopgave_9.4._Lottogevinsten_mkzmxp.m4a",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1623938956/sonnyjuraimages/legal2_w8dskp.jpg",
                    },
                ],
            },
            trip_hop: {
                songs: [
                    {
                        name: "Jura Front",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "https://res.cloudinary.com/hndu2f8jv/video/upload/v1623936135/podcasts/Poscast_til_eksamensopgave_6.1._Ejendomsm%C3%A6glerens_st%C3%B8vler_gujuq8.m4a",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1623938959/sonnyjuraimages/legal1_quhdds.jpg",
                    },
                    {
                        name: "Eksamensopgave 7.1. Børge brugtvognsforhandler",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url: "https://res.cloudinary.com/hndu2f8jv/video/upload/v1623936139/podcasts/Poscast_til_eksamensopgave_7.1._B%C3%B8rge_brugtvognsforhandler_jwsb7s.m4a",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1623938951/sonnyjuraimages/legal5_qkiogk.jpg",
                    },
                    {
                        name: "Anvil",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
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
