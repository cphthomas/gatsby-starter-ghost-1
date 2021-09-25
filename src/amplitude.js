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
    /* one single image for all playlist & change image on play pause*/
    $(document).on("click", ".amplitude-playing", function () {
        var playlist = $(this).data("amplitude-playlist");
        var imgTags = $(".main-album-art");
        $(imgTags).each(function (index) {
            var imgTagData = $(this).data("amplitude-playlist");
            if (imgTagData == playlist) {
                $(this).attr(
                    "src",
                    "http://docs.google.com/uc?export=open&id=114iX14rGzeY-uPvJ388dqksId2eKrUSV"
                );
            } else {
                $(this).attr(
                    "src",
                    "http://docs.google.com/uc?export=open&id=111d2e_oa2FrnfRhQVs3rC9l_LLu8i3Wd"
                );
            }
        });
    });
    $(document).on("click", ".amplitude-paused", function () {
        var playlist = $(this).data("amplitude-playlist");
        var imgTags = $(".main-album-art");
        $(imgTags).each(function (index) {
            var imgTagData = $(this).data("amplitude-playlist");
            if (imgTagData == playlist) {
                $(this).attr(
                    "src",
                    "http://docs.google.com/uc?export=open&id=111d2e_oa2FrnfRhQVs3rC9l_LLu8i3Wd"
                );
            }
        });
    });

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

    document
        .getElementById("speedTextPlayer1")
        .addEventListener("click", function () {
            var currentInnerText = parseFloat(
                document.getElementById("speedUpText").innerHTML
            );
            console.log(currentInnerText);
            if (currentInnerText == 1) {
                document.getElementById("speedUpText").innerHTML = "1.5";
            } else if (currentInnerText == 1.5) {
                document.getElementById("speedUpText").innerHTML = "2";
            } else if (currentInnerText == 2) {
                document.getElementById("speedUpText").innerHTML = "1";
            }
        });

    document
        .getElementById("speedTextPlayer2")
        .addEventListener("click", function () {
            var currentInnerText = parseFloat(
                document.getElementById("speedUpText2").innerHTML
            );
            console.log(currentInnerText);
            if (currentInnerText == 1) {
                document.getElementById("speedUpText2").innerHTML = "1.5";
            } else if (currentInnerText == 1.5) {
                document.getElementById("speedUpText2").innerHTML = "2";
            } else if (currentInnerText == 2) {
                document.getElementById("speedUpText2").innerHTML = "1";
            }
        });

    Amplitude.init({
        songs: [
            {
                name: "Sang alene",
                artist: "Sang alene",
                album: "Soon It Will Be Cold Enough",
                url: "https://521dimensions.com/song/FirstSnow-Emancipator.mp3",
                cover_art_url:
                    "https://521dimensions.com/img/open-source/amplitudejs/album-art/soon-it-will-be-cold-enough.jpg",
            },
        ],
        playlists: {
            jura1: {
                songs: [
                    {
                        name: "3.1 Eksamensopgave Borde og stole",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "http://docs.google.com/uc?export=open&id=1xWOS4EbSW6FCebQdiTyNdZhnIr1SCcKZ",
                        cover_art_url:
                            "http://docs.google.com/uc?export=open&id=111d2e_oa2FrnfRhQVs3rC9l_LLu8i3Wd",
                    },
                    {
                        name: "3.2 Eksamensopgave Hundekiks og tudekiks",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "http://docs.google.com/uc?export=open&id=1z5Mk4dVhl2CUCELRMejiqOg0hhOT4pjI",
                        cover_art_url:
                            "http://docs.google.com/uc?export=open&id=111d2e_oa2FrnfRhQVs3rC9l_LLu8i3Wd",
                    },
                    {
                        name: "4.1 Eksamensopgave jem og fix",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "http://docs.google.com/uc?export=open&id=10Ozi03uHOu0-lBEET3ZAly3n-5Je7dFw",
                        cover_art_url:
                            "http://docs.google.com/uc?export=open&id=111d2e_oa2FrnfRhQVs3rC9l_LLu8i3Wd",
                    },
                    {
                        name: "6.1 Eksamensopgave Ejendomshandleren",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "http://docs.google.com/uc?export=open&id=1Hk4jexYLozxWYREZ2t5ZHDXiwoiR87pU",
                        cover_art_url:
                            "http://docs.google.com/uc?export=open&id=111d2e_oa2FrnfRhQVs3rC9l_LLu8i3Wd",
                    },
                    {
                        name: "6.2 Eksamensopgave Murermester Madsen",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "http://docs.google.com/uc?export=open&id=1x6uGDs642ka-Sc7jd4yJnSsosXGVTUMC",
                        cover_art_url:
                            "http://docs.google.com/uc?export=open&id=111d2e_oa2FrnfRhQVs3rC9l_LLu8i3Wd",
                    },
                    {
                        name: "6.3 Eksamensopgave Randers Boldklub",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "http://docs.google.com/uc?export=open&id=1taUArwsWdkrdclKFxOa-VgmYPKEqvett",
                        cover_art_url:
                            "http://docs.google.com/uc?export=open&id=111d2e_oa2FrnfRhQVs3rC9l_LLu8i3Wd",
                    },
                    {
                        name: "7.1 Eksamensopgave Brugtvognshandleren",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "http://docs.google.com/uc?export=open&id=1e4XzhD5l7s5M2VHNV59wE86Yu0siDRby",
                        cover_art_url:
                            "http://docs.google.com/uc?export=open&id=111d2e_oa2FrnfRhQVs3rC9l_LLu8i3Wd",
                    },
                    {
                        name: "8.1 Eksamensopgave Ivar Justesen",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "http://docs.google.com/uc?export=open&id=1v9y1xw6sodDE_640ThRaj30jIq74UjKx",
                        cover_art_url:
                            "http://docs.google.com/uc?export=open&id=111d2e_oa2FrnfRhQVs3rC9l_LLu8i3Wd",
                    },
                    {
                        name: "9.1 Eksamensopgave Konkurs",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "http://docs.google.com/uc?export=open&id=1bh9Og02i_7f5UvlIqPb3_ZapydiXarDb",
                        cover_art_url:
                            "http://docs.google.com/uc?export=open&id=111d2e_oa2FrnfRhQVs3rC9l_LLu8i3Wd",
                    },
                    {
                        name: "9.2 Eksamensopgave Grossistens Bekymringer",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "http://docs.google.com/uc?export=open&id=1XMgmUbeb1TtYdd6KnhjJ05Gmhrc9fT8c",
                        cover_art_url:
                            "http://docs.google.com/uc?export=open&id=111d2e_oa2FrnfRhQVs3rC9l_LLu8i3Wd",
                    },
                    {
                        name: "9.3 Eksamensopgave Bertil og Tina",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "http://docs.google.com/uc?export=open&id=1qFQQEfVoaEn8WD6VVoayXJ8Uo4wzwIlK",
                        cover_art_url:
                            "http://docs.google.com/uc?export=open&id=111d2e_oa2FrnfRhQVs3rC9l_LLu8i3Wd",
                    },
                    {
                        name: "9.4 Eksamensopgave Lottogevinsten",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "http://docs.google.com/uc?export=open&id=1C8M0e6kB9X2XtIx9O7pW7BY_PujZQMg3",
                        cover_art_url:
                            "http://docs.google.com/uc?export=open&id=111d2e_oa2FrnfRhQVs3rC9l_LLu8i3Wd",
                    },
                    {
                        name: "9.5 Eksamensopgave Jeanett Apollo",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "http://docs.google.com/uc?export=open&id=1_ZYozZyGTD2uUFGKzLV1YYxpdaQGA5uP",
                        cover_art_url:
                            "http://docs.google.com/uc?export=open&id=111d2e_oa2FrnfRhQVs3rC9l_LLu8i3Wd",
                    },
                    {
                        name: "9.6 Eksamensopgave Joachim",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "http://docs.google.com/uc?export=open&id=1s_IGypv-Q3QpBQjGmDetxg7c-7KBi9lE",
                        cover_art_url:
                            "http://docs.google.com/uc?export=open&id=111d2e_oa2FrnfRhQVs3rC9l_LLu8i3Wd",
                    },
                    {
                        name: "9.7 Eksamensopgave Knudsen Properties",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "http://docs.google.com/uc?export=open&id=1sNyNv9_V5szwF9CTfQeq-7H3hUD4X-q7",
                        cover_art_url:
                            "http://docs.google.com/uc?export=open&id=111d2e_oa2FrnfRhQVs3rC9l_LLu8i3Wd",
                    },
                    {
                        name: "10.1 Eksamensopgave Kunst",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "http://docs.google.com/uc?export=open&id=1dArlzI0Xzb4l290rF8oSVkUHqxqmdubK",
                        cover_art_url:
                            "http://docs.google.com/uc?export=open&id=111d2e_oa2FrnfRhQVs3rC9l_LLu8i3Wd",
                    },
                    {
                        name: "10.2 Eksamensopgave Olsen",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "http://docs.google.com/uc?export=open&id=1VynnsFqmTgxOGZEkLlyOYOm-YoCcP_Jv",
                        cover_art_url:
                            "http://docs.google.com/uc?export=open&id=111d2e_oa2FrnfRhQVs3rC9l_LLu8i3Wd",
                    },
                    {
                        name: "10.3 Eksamensopgave Bo Bjerrehus",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "http://docs.google.com/uc?export=open&id=1aBUsOgtCbdHIqfGjEIMQ0QFS82E8bs9Z",
                        cover_art_url:
                            "http://docs.google.com/uc?export=open&id=111d2e_oa2FrnfRhQVs3rC9l_LLu8i3Wd",
                    },
                    {
                        name: "11.1 Eksamensopgave Temafesten",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "http://docs.google.com/uc?export=open&id=1jNj8ctBhMZguzr0ZEPzxv4xUUOyxHqsO",
                        cover_art_url:
                            "http://docs.google.com/uc?export=open&id=111d2e_oa2FrnfRhQVs3rC9l_LLu8i3Wd",
                    },
                    {
                        name: "11.2 Eksamensopgave Jens Peters Landejendom",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "http://docs.google.com/uc?export=open&id=1gG-9pyXqdD2_0hMWYfNXAPA6TBU-5VFS",
                        cover_art_url:
                            "http://docs.google.com/uc?export=open&id=111d2e_oa2FrnfRhQVs3rC9l_LLu8i3Wd",
                    },
                    {
                        name: "11.3 Eksamensopgave Travlhed i Kreditafdelingen",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "http://docs.google.com/uc?export=open&id=1gN0M9WQvNWaLOv6xwcaCMf7I3uIM9kif",
                        cover_art_url:
                            "http://docs.google.com/uc?export=open&id=111d2e_oa2FrnfRhQVs3rC9l_LLu8i3Wd",
                    },
                    {
                        name: "14.1 Eksamensopgave Biler og dyre vaner",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "http://docs.google.com/uc?export=open&id=1LwGo2QLAjXedniwTBGnar8WYxkxKegBy",
                        cover_art_url:
                            "http://docs.google.com/uc?export=open&id=111d2e_oa2FrnfRhQVs3rC9l_LLu8i3Wd",
                    },
                    {
                        name: "14.2 Eksamensopgave Musik med problemer",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "http://docs.google.com/uc?export=open&id=1wfcnOVoAWBI0l9_VKQBXEFnQLEBG0Zan",
                        cover_art_url:
                            "http://docs.google.com/uc?export=open&id=111d2e_oa2FrnfRhQVs3rC9l_LLu8i3Wd",
                    },
                    {
                        name: "14.3 Eksamensopgave Taeppehandleren",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "http://docs.google.com/uc?export=open&id=182-J7PO6UFnJpk78ufKdS3jXFBL10b2g",
                        cover_art_url:
                            "http://docs.google.com/uc?export=open&id=111d2e_oa2FrnfRhQVs3rC9l_LLu8i3Wd",
                    },
                    {
                        name: "14.4 Eksamensopgave Moebler med prioritet",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "http://docs.google.com/uc?export=open&id=17fy12V0bDS8sHQqgyJ_8lRgEuBFmUdOv",
                        cover_art_url:
                            "http://docs.google.com/uc?export=open&id=111d2e_oa2FrnfRhQVs3rC9l_LLu8i3Wd",
                    },
                    {
                        name: "14.5 Eksamensopgave Smykkefirmaet Frandsen",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "http://docs.google.com/uc?export=open&id=1ls7XI7qTb7lGY9wqzWESTNcMHpFwBbLm",
                        cover_art_url:
                            "http://docs.google.com/uc?export=open&id=111d2e_oa2FrnfRhQVs3rC9l_LLu8i3Wd",
                    },
                    {
                        name: "14.6 Eksamensopgave Oekologi og kassevogn",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "http://docs.google.com/uc?export=open&id=1anzDmiJiHglLo63_ncFDiKSrg2ESehvn",
                        cover_art_url:
                            "http://docs.google.com/uc?export=open&id=111d2e_oa2FrnfRhQVs3rC9l_LLu8i3Wd",
                    },
                    {
                        name: "16.1 Eksamensopgave Kalle og Sille",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "http://docs.google.com/uc?export=open&id=14r1klEd7ABtOIJdzSIVDPN9c2V4sQwPp",
                        cover_art_url:
                            "http://docs.google.com/uc?export=open&id=111d2e_oa2FrnfRhQVs3rC9l_LLu8i3Wd",
                    },
                    {
                        name: "16.2 Eksamensopgave Jeg fik jobbet mor",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "http://docs.google.com/uc?export=open&id=1HESz_YYSQ1bbm1ivonqUwgmGGc2A5a7S",
                        cover_art_url:
                            "http://docs.google.com/uc?export=open&id=111d2e_oa2FrnfRhQVs3rC9l_LLu8i3Wd",
                    },
                    {
                        name: "16.3 Eksamensopgave Anna og Oline",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "http://docs.google.com/uc?export=open&id=13985Dc3fi7tVNUqOON40D_ZoN_GORvdC",
                        cover_art_url:
                            "http://docs.google.com/uc?export=open&id=111d2e_oa2FrnfRhQVs3rC9l_LLu8i3Wd",
                    },
                    {
                        name: "17.1 Eksamensopgave Bo og Jette",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "http://docs.google.com/uc?export=open&id=15i9QAl0_zZIug2hdMu9Cpy0BftazKQhv",
                        cover_art_url:
                            "http://docs.google.com/uc?export=open&id=111d2e_oa2FrnfRhQVs3rC9l_LLu8i3Wd",
                    },
                    {
                        name: "17.2 Eksamensopgave Anders og Pernille",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "http://docs.google.com/uc?export=open&id=15m3GG-gMJAt6jDow-nG-iiIVHFkFD86Z",
                        cover_art_url:
                            "http://docs.google.com/uc?export=open&id=111d2e_oa2FrnfRhQVs3rC9l_LLu8i3Wd",
                    },
                    {
                        name: "33 Eksamensopgave Arv",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "http://docs.google.com/uc?export=open&id=1lBJwumP1ZGGSXwSQqmsVoiWTO0p8CRrn",
                        cover_art_url:
                            "http://docs.google.com/uc?export=open&id=111d2e_oa2FrnfRhQVs3rC9l_LLu8i3Wd",
                    },
                    {
                        name: "1 Aftaleloven",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "http://docs.google.com/uc?export=open&id=1Yp58VqxemoWu-0JlZHLFVPhQNA-aq6GG",
                        cover_art_url:
                            "http://docs.google.com/uc?export=open&id=111d2e_oa2FrnfRhQVs3rC9l_LLu8i3Wd",
                    },
                    {
                        name: "2 Aftaleloven",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "http://docs.google.com/uc?export=open&id=18nE97vRH_G2J1Fwl0gXbRGDmrGuimZix",
                        cover_art_url:
                            "http://docs.google.com/uc?export=open&id=111d2e_oa2FrnfRhQVs3rC9l_LLu8i3Wd",
                    },
                    {
                        name: "3 Aftaleloven",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "http://docs.google.com/uc?export=open&id=1UpllYPd49jpmWgjhkP5I115t1R7Uox9T",
                        cover_art_url:
                            "http://docs.google.com/uc?export=open&id=111d2e_oa2FrnfRhQVs3rC9l_LLu8i3Wd",
                    },
                    {
                        name: "4 Aftaleloven",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "http://docs.google.com/uc?export=open&id=1yNP_IU-MI0jjjjStJSMbzX29ydkrjgTe",
                        cover_art_url:
                            "http://docs.google.com/uc?export=open&id=111d2e_oa2FrnfRhQVs3rC9l_LLu8i3Wd",
                    },
                    {
                        name: "5 Aftaleloven",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "http://docs.google.com/uc?export=open&id=1al8zh8idDaMUWjrUXAxHPKtw2RUuz5bK",
                        cover_art_url:
                            "http://docs.google.com/uc?export=open&id=111d2e_oa2FrnfRhQVs3rC9l_LLu8i3Wd",
                    },
                    {
                        name: "6 Aftaleloven",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "http://docs.google.com/uc?export=open&id=1GIHSZmkO_Bp8l16Lo9QhX4EU25DjC57n",
                        cover_art_url:
                            "http://docs.google.com/uc?export=open&id=111d2e_oa2FrnfRhQVs3rC9l_LLu8i3Wd",
                    },
                    {
                        name: "7 Aftaleloven",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "http://docs.google.com/uc?export=open&id=1WlYRIXClu4KZVcHQS9R91tkNtQFdNdUd",
                        cover_art_url:
                            "http://docs.google.com/uc?export=open&id=111d2e_oa2FrnfRhQVs3rC9l_LLu8i3Wd",
                    },
                    {
                        name: "8 Aftaleloven",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "http://docs.google.com/uc?export=open&id=1mURxs4LlmvVkEXMyO23PUEzeFdh-6Jiv",
                        cover_art_url:
                            "http://docs.google.com/uc?export=open&id=111d2e_oa2FrnfRhQVs3rC9l_LLu8i3Wd",
                    },
                    {
                        name: "9 Aftaleloven",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "http://docs.google.com/uc?export=open&id=1cam2MO0LkPWF5MGpeOTdejz4bazwcCAV",
                        cover_art_url:
                            "http://docs.google.com/uc?export=open&id=111d2e_oa2FrnfRhQVs3rC9l_LLu8i3Wd",
                    },
                    {
                        name: "10 Aftaleloven",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "http://docs.google.com/uc?export=open&id=1vzdS7d7TNQHNgSjNGBTTtC-M2YYE-eyQ",
                        cover_art_url:
                            "http://docs.google.com/uc?export=open&id=111d2e_oa2FrnfRhQVs3rC9l_LLu8i3Wd",
                    },
                    {
                        name: "11 Aftaleloven",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "http://docs.google.com/uc?export=open&id=1vvEz9w74LgbHHLfWJ-gMoyIgq3fg6BaM",
                        cover_art_url:
                            "http://docs.google.com/uc?export=open&id=111d2e_oa2FrnfRhQVs3rC9l_LLu8i3Wd",
                    },
                    {
                        name: "12 Aftaleloven",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "http://docs.google.com/uc?export=open&id=10lvNpVyHy3b5KsvF48BaG3CK5RVUgH5Q",
                        cover_art_url:
                            "http://docs.google.com/uc?export=open&id=111d2e_oa2FrnfRhQVs3rC9l_LLu8i3Wd",
                    },
                    {
                        name: "13 Aftaleloven",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "http://docs.google.com/uc?export=open&id=1gCtWQIPt34x6z1-RSzy1q07iyeYBb4x9",
                        cover_art_url:
                            "http://docs.google.com/uc?export=open&id=111d2e_oa2FrnfRhQVs3rC9l_LLu8i3Wd",
                    },
                    {
                        name: "14 Aftaleloven",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "http://docs.google.com/uc?export=open&id=1FUmQgpeGGYx1l61brFuT3mu2TQMFTuAk",
                        cover_art_url:
                            "http://docs.google.com/uc?export=open&id=111d2e_oa2FrnfRhQVs3rC9l_LLu8i3Wd",
                    },
                ],
            },
            jura2: {
                songs: [
                    {
                        name: "Personoplysninger GDPR 1",
                        artist: "Datatilsynet",
                        album: "GDPR",
                        url:
                            "http://docs.google.com/uc?export=open&id=1MLYw1QRne9PPkhK5LgZdumm4qhfiDvGc",
                        cover_art_url:
                            "http://docs.google.com/uc?export=open&id=111d2e_oa2FrnfRhQVs3rC9l_LLu8i3Wd",
                    },
                    {
                        name: "Personoplysninger GDPR 2",
                        artist: "Datatilsynet",
                        album: "GDPR",
                        url:
                            "http://docs.google.com/uc?export=open&id=12UW2MzQt5KN_JCDWEHY5eW_iXHQ1EDww",
                        cover_art_url:
                            "http://docs.google.com/uc?export=open&id=111d2e_oa2FrnfRhQVs3rC9l_LLu8i3Wd",
                    },
                    {
                        name: "Samtykke GDPR 3",
                        artist: "Datatilsynet",
                        album: "GDPR",
                        url:
                            "http://docs.google.com/uc?export=open&id=1pySir0jkhZ7Ngo5h9bvua_pOOFySSA4-",
                        cover_art_url:
                            "http://docs.google.com/uc?export=open&id=111d2e_oa2FrnfRhQVs3rC9l_LLu8i3Wd",
                    },
                    {
                        name: "Personalepolitik GDPR 4",
                        artist: "Datatilsynet",
                        album: "GDPR",
                        url:
                            "http://docs.google.com/uc?export=open&id=1r1kwx5Pvco61nq4Bz2N735ihXuFInkF4",
                        cover_art_url:
                            "http://docs.google.com/uc?export=open&id=111d2e_oa2FrnfRhQVs3rC9l_LLu8i3Wd",
                    },
                    {
                        name: "De registrerede GDPR 5",
                        artist: "Datatilsynet",
                        album: "GDPR",
                        url:
                            "http://docs.google.com/uc?export=open&id=1BcJpZ4ttbZOYIz9jiOTh9-VB3CoigRq3",
                        cover_art_url:
                            "http://docs.google.com/uc?export=open&id=111d2e_oa2FrnfRhQVs3rC9l_LLu8i3Wd",
                    },
                    {
                        name: "Sletning GDPR 6",
                        artist: "Datatilsynet",
                        album: "GDPR",
                        url:
                            "http://docs.google.com/uc?export=open&id=1Z8j65YAydcphOFFfCFDEkA3JPuhLUMMf",
                        cover_art_url:
                            "http://docs.google.com/uc?export=open&id=111d2e_oa2FrnfRhQVs3rC9l_LLu8i3Wd",
                    },
                    {
                        name: "Brug af billeder GDPR 7",
                        artist: "Datatilsynet",
                        album: "GDPR",
                        url:
                            "http://docs.google.com/uc?export=open&id=1G29myCoPNp8NCgRmxiRpEuSEj4xkHrzz",
                        cover_art_url:
                            "http://docs.google.com/uc?export=open&id=111d2e_oa2FrnfRhQVs3rC9l_LLu8i3Wd",
                    },
                    {
                        name: "Databeskyttelse HR GDPR 8",
                        artist: "Datatilsynet",
                        album: "GDPR",
                        url:
                            "http://docs.google.com/uc?export=open&id=1i2xdsaA7ajJv6gK5iaTa5vDaB0PjVvG5",
                        cover_art_url:
                            "http://docs.google.com/uc?export=open&id=111d2e_oa2FrnfRhQVs3rC9l_LLu8i3Wd",
                    },
                    {
                        name: "Optagelse telefon GDPR 9",
                        artist: "Datatilsynet",
                        album: "GDPR",
                        url:
                            "http://docs.google.com/uc?export=open&id=1rzUtBn7tD6SUoNZoWIm6XeJcEtXbhQSd",
                        cover_art_url:
                            "http://docs.google.com/uc?export=open&id=111d2e_oa2FrnfRhQVs3rC9l_LLu8i3Wd",
                    },
                    {
                        name: "Tredielandsoverfoersler GDPR 10",
                        artist: "Datatilsynet",
                        album: "GDPR",
                        url:
                            "http://docs.google.com/uc?export=open&id=1uC_jpqNgO4gQEDyeTeex3wfS5TuqazZ1",
                        cover_art_url:
                            "http://docs.google.com/uc?export=open&id=111d2e_oa2FrnfRhQVs3rC9l_LLu8i3Wd",
                    },
                    {
                        name: "TV overvaagning GDPR 11",
                        artist: "Datatilsynet",
                        album: "GDPR",
                        url:
                            "http://docs.google.com/uc?export=open&id=1VvTmjjMAaO3jaL_QvucOlL_xyxz4Xoyj",
                        cover_art_url:
                            "http://docs.google.com/uc?export=open&id=111d2e_oa2FrnfRhQVs3rC9l_LLu8i3Wd",
                    },
                    {
                        name: "Risikovurdering GDPR 12",
                        artist: "Datatilsynet",
                        album: "GDPR",
                        url:
                            "http://docs.google.com/uc?export=open&id=1fnTFsP4k2-_ns7sAd1HaHkO6wLmFNQ3X",
                        cover_art_url:
                            "http://docs.google.com/uc?export=open&id=111d2e_oa2FrnfRhQVs3rC9l_LLu8i3Wd",
                    },
                    {
                        name: "Sikkerhedsbrud GDPR 13",
                        artist: "Datatilsynet",
                        album: "GDPR",
                        url:
                            "http://docs.google.com/uc?export=open&id=13IfQ8Hcn6z_qwuG4a9ysinxLky3PoWZu",
                        cover_art_url:
                            "http://docs.google.com/uc?export=open&id=111d2e_oa2FrnfRhQVs3rC9l_LLu8i3Wd",
                    },
                    {
                        name: "Cloud GDPR 14",
                        artist: "Datatilsynet",
                        album: "GDPR",
                        url:
                            "http://docs.google.com/uc?export=open&id=1zo8Vn1QCXyQ8_xxQ-S8JaCZogdU_HPqD",
                        cover_art_url:
                            "http://docs.google.com/uc?export=open&id=111d2e_oa2FrnfRhQVs3rC9l_LLu8i3Wd",
                    },
                    {
                        name: "Databeskyttelse design GDPR 15",
                        artist: "Datatilsynet",
                        album: "GDPR",
                        url:
                            "http://docs.google.com/uc?export=open&id=1BfP0Ron_mPzZQRvvgMbJ_Sg6fBEutbzD",
                        cover_art_url:
                            "http://docs.google.com/uc?export=open&id=111d2e_oa2FrnfRhQVs3rC9l_LLu8i3Wd",
                    },
                ],
            },
        },
    });
}

export default amplitudeJS;
