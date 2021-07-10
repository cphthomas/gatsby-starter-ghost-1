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
                    "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624045659/podcastgif/giphy_1_rrpccq.gif"
                );
            } else {
                $(this).attr(
                    "src",
                    "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624048525/podcastgif/spole_aelus7.jpg"
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
                    "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624048525/podcastgif/spole_aelus7.jpg"
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
                            "https://res.cloudinary.com/hndu2f8jv/video/upload/v1625659665/podcasts/Jura%20Eksamens%20Podcast/podcast_eksamensopgave_3_1_borde_og_stole_as_unfeyo.mp3",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624048525/podcastgif/spole_aelus7.jpg",
                    },
                    {
                        name: "3.2 Eksamensopgave Hundekiks og tudekiks",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "https://res.cloudinary.com/hndu2f8jv/video/upload/v1625659678/podcasts/Jura%20Eksamens%20Podcast/podcast_eksamensopgave_3_2_hundekiks_og_tudekiks_quvbfn.mp3",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624048525/podcastgif/spole_aelus7.jpg",
                    },
                    {
                        name: "4.1 Eksamensopgave jem og fix",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "https://res.cloudinary.com/hndu2f8jv/video/upload/v1625659666/podcasts/Jura%20Eksamens%20Podcast/podcast_eksamensopgave_4_1_jem_og_fix_aw9bku.mp3",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624048525/podcastgif/spole_aelus7.jpg",
                    },
                    {
                        name: "6.1 Eksamensopgave Ejendomshandleren",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "https://res.cloudinary.com/hndu2f8jv/video/upload/v1625659666/podcasts/Jura%20Eksamens%20Podcast/podcast_eksamensopgave_6_1_ejendomsm_glerens_st_vler_ikvzwe.mp3",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624048525/podcastgif/spole_aelus7.jpg",
                    },
                    {
                        name: "6.2 Eksamensopgave Murermester Madsen",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "https://res.cloudinary.com/hndu2f8jv/video/upload/v1625659672/podcasts/Jura%20Eksamens%20Podcast/podcast_eksamensopgave_6_2_murermester_madsen_dngsdc.mp3",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624048525/podcastgif/spole_aelus7.jpg",
                    },
                    {
                        name: "6.3 Eksamensopgave Randers Boldklub",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "https://res.cloudinary.com/hndu2f8jv/video/upload/v1625659670/podcasts/Jura%20Eksamens%20Podcast/podcast_eksamensopgave_6_3_randers_boldklub_rs4bzm.mp3",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624048525/podcastgif/spole_aelus7.jpg",
                    },
                    {
                        name: "7.1 Eksamensopgave Brugtvognshandleren",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "https://res.cloudinary.com/hndu2f8jv/video/upload/v1625659677/podcasts/Jura%20Eksamens%20Podcast/podcast_eksamensopgave_7_1_b_rge_brugtvognsforhandler_byr8xa.mp3",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624048525/podcastgif/spole_aelus7.jpg",
                    },
                    {
                        name: "8.1 Eksamensopgave Ivar Justesen",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "https://res.cloudinary.com/hndu2f8jv/video/upload/v1625659678/podcasts/Jura%20Eksamens%20Podcast/podcast_eksamensopgave_8_1_ivar_justesen_sjngb8.mp3",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624048525/podcastgif/spole_aelus7.jpg",
                    },
                    {
                        name: "9.1 Eksamensopgave Konkurs",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "https://res.cloudinary.com/hndu2f8jv/video/upload/v1625659680/podcasts/Jura%20Eksamens%20Podcast/podcast_eksamensopgave_9_1_ejendomsm_glerens_konkurs_vptmnp.mp3",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624048525/podcastgif/spole_aelus7.jpg",
                    },
                    {
                        name: "9.2 Eksamensopgave Grossistens Bekymringer",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "https://res.cloudinary.com/hndu2f8jv/video/upload/v1625659677/podcasts/Jura%20Eksamens%20Podcast/podcast_eksamensopgave_9_2_grossistens_bekymringer_stkmu8.mp3",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624048525/podcastgif/spole_aelus7.jpg",
                    },
                    {
                        name: "9.3 Eksamensopgave Bertil og Tina",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "https://res.cloudinary.com/hndu2f8jv/video/upload/v1625659676/podcasts/Jura%20Eksamens%20Podcast/podcast_eksamensopgave_9_3_t_mrermester_bertil_jaobsen_og_tina_jensen_vdmurf.mp3",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624048525/podcastgif/spole_aelus7.jpg",
                    },
                    {
                        name: "9.4 Eksamensopgave Lottogevinsten",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "https://res.cloudinary.com/hndu2f8jv/video/upload/v1625659683/podcasts/Jura%20Eksamens%20Podcast/podcast_eksamensopgave_9_4_lottogevinsten_n962mg.mp3",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624048525/podcastgif/spole_aelus7.jpg",
                    },
                    {
                        name: "9.5 Eksamensopgave Jeanett Apollo",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "https://res.cloudinary.com/hndu2f8jv/video/upload/v1625659690/podcasts/Jura%20Eksamens%20Podcast/podcast_eksamensopgave_9_5_jenett_apollo_gwl9al.mp3",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624048525/podcastgif/spole_aelus7.jpg",
                    },
                    {
                        name: "9.6 Eksamensopgave Joachim",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "https://res.cloudinary.com/hndu2f8jv/video/upload/v1625659678/podcasts/Jura%20Eksamens%20Podcast/podcast_eksamensopgave_9_6_joachim_ymqykz.mp3",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624048525/podcastgif/spole_aelus7.jpg",
                    },
                    {
                        name: "9.7 Eksamensopgave Knudsen Properties",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "https://res.cloudinary.com/hndu2f8jv/video/upload/v1625659691/podcasts/Jura%20Eksamens%20Podcast/podcast_eksamensopgave_9_7_knudsen_properties_v_dennis_knudsen_vmksbx.mp3",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624048525/podcastgif/spole_aelus7.jpg",
                    },
                    {
                        name: "10.1 Eksamensopgave Kunst",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "https://res.cloudinary.com/hndu2f8jv/video/upload/v1625659684/podcasts/Jura%20Eksamens%20Podcast/podcast_eksamensopgave_10_1_kunst_og_k_rlighed_siq935.mp3",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624048525/podcastgif/spole_aelus7.jpg",
                    },
                    {
                        name: "10.2 Eksamensopgave Olsen",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "https://res.cloudinary.com/hndu2f8jv/video/upload/v1625659687/podcasts/Jura%20Eksamens%20Podcast/podcast_eksamensopgave_10_2_b%C3%B8rge_olsen_wun6np.mp3",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624048525/podcastgif/spole_aelus7.jpg",
                    },
                    {
                        name: "10.3 Eksamensopgave Bo Bjerrehus",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "https://res.cloudinary.com/hndu2f8jv/video/upload/v1625659691/podcasts/Jura%20Eksamens%20Podcast/podcast_eksamensopgave_10_3_bo_bjerrehus_dg3dwm.mp3",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624048525/podcastgif/spole_aelus7.jpg",
                    },
                    {
                        name: "11.1 Eksamensopgave Temafesten",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "https://res.cloudinary.com/hndu2f8jv/video/upload/v1625659684/podcasts/Jura%20Eksamens%20Podcast/podcast_eksamensopgave_11_1_prinsessef_dselsdagen_itzz9f.mp3",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624048525/podcastgif/spole_aelus7.jpg",
                    },
                    {
                        name: "11.2 Eksamensopgave Jens Peters Landejendom",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "https://res.cloudinary.com/hndu2f8jv/video/upload/v1625659690/podcasts/Jura%20Eksamens%20Podcast/podcast_eksamensopgave_11_2_jens_peters_landejendom_g9k03p.mp3",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624048525/podcastgif/spole_aelus7.jpg",
                    },
                    {
                        name: "11.3 Eksamensopgave Travlhed i Kreditafdelingen",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "https://res.cloudinary.com/hndu2f8jv/video/upload/v1625659693/podcasts/Jura%20Eksamens%20Podcast/podcast_eksamensopgave_11_3_travlhed_i_kreditafdelingen_saigfq.mp3",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624048525/podcastgif/spole_aelus7.jpg",
                    },
                    {
                        name: "14.1 Eksamensopgave Biler og dyre vaner",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "https://res.cloudinary.com/hndu2f8jv/video/upload/v1625659687/podcasts/Jura%20Eksamens%20Podcast/podcast_eksamensopgave_14_1_fine_biler_og_dyre_vaner_awnyjo.mp3",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624048525/podcastgif/spole_aelus7.jpg",
                    },
                    {
                        name: "14.2 Eksamensopgave Musik med problemer",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "https://res.cloudinary.com/hndu2f8jv/video/upload/v1625659689/podcasts/Jura%20Eksamens%20Podcast/podcast_eksamensopgave_14_2_musik_med_problemer_wgv0bt.mp3",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624048525/podcastgif/spole_aelus7.jpg",
                    },
                    {
                        name: "14.3 Eksamensopgave Taeppehandleren",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "https://res.cloudinary.com/hndu2f8jv/video/upload/v1625659693/podcasts/Jura%20Eksamens%20Podcast/podcast_eksamensopgave_14_3_t_ppehandleren_fra_sor_fbmdlt.mp3",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624048525/podcastgif/spole_aelus7.jpg",
                    },
                    {
                        name: "14.4 Eksamensopgave Moebler med prioritet",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "https://res.cloudinary.com/hndu2f8jv/video/upload/v1625659696/podcasts/Jura%20Eksamens%20Podcast/podcast_eksamensopgave_14_4_m_blerne_med_prioritet_1_vby6uh.mp3",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624048525/podcastgif/spole_aelus7.jpg",
                    },
                    {
                        name: "14.5 Eksamensopgave Smykkefirmaet Frandsen",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "https://res.cloudinary.com/hndu2f8jv/video/upload/v1625659696/podcasts/Jura%20Eksamens%20Podcast/podcast_eksamensopgave_14_5_smykkefirmaet_frandsen_a_s_sug5yx.mp3",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624048525/podcastgif/spole_aelus7.jpg",
                    },
                    {
                        name: "14.6 Eksamensopgave Oekologi og kassevogn",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "https://res.cloudinary.com/hndu2f8jv/video/upload/v1625659696/podcasts/Jura%20Eksamens%20Podcast/podcast_eksamensopgave_14_6_kologi_og_kassevogn_e3jpnd.mp3",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624048525/podcastgif/spole_aelus7.jpg",
                    },
                    {
                        name: "16.1 Eksamensopgave Kalle og Sille",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "https://res.cloudinary.com/hndu2f8jv/video/upload/v1625659693/podcasts/Jura%20Eksamens%20Podcast/podcast_eksamensopgave_16_1_kalle_og_silles_bolighandler_ufcxq3.mp3",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624048525/podcastgif/spole_aelus7.jpg",
                    },
                    {
                        name: "16.2 Eksamensopgave Jeg fik jobbet mor",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "https://res.cloudinary.com/hndu2f8jv/video/upload/v1625659698/podcasts/Jura%20Eksamens%20Podcast/podcast_eksamensopgave_16_2_jeg_fik_jobbet_mor_rlp6re.mp3",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624048525/podcastgif/spole_aelus7.jpg",
                    },
                    {
                        name: "16.3 Eksamensopgave Anna og Oline",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "https://res.cloudinary.com/hndu2f8jv/video/upload/v1625659703/podcasts/Jura%20Eksamens%20Podcast/podcast_eksamensopgave_16_3_ejendomsm_glerne_anna_og_oline_rlwk21.mp3",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624048525/podcastgif/spole_aelus7.jpg",
                    },
                    {
                        name: "17.1 Eksamensopgave Bo og Jette",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "https://res.cloudinary.com/hndu2f8jv/video/upload/v1625659696/podcasts/Jura%20Eksamens%20Podcast/podcast_eksamensopgave_17_1_bo_og_jettes_gteskab_lz0mdc.mp3",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624048525/podcastgif/spole_aelus7.jpg",
                    },
                    {
                        name: "17.2 Eksamensopgave Anders og Pernille",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "https://res.cloudinary.com/hndu2f8jv/video/upload/v1625659697/podcasts/Jura%20Eksamens%20Podcast/podcast_eksamensopgave_17_2_anders_og_pernilles_gteskab_wivry9.mp3",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624048525/podcastgif/spole_aelus7.jpg",
                    },
                    {
                        name: "33 Eksamensopgave Arv",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "https://res.cloudinary.com/hndu2f8jv/video/upload/v1625659877/podcasts/Jura%20podcasts/rettevejledning_ukuolt.mp3",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624048525/podcastgif/spole_aelus7.jpg",
                    },
                    {
                        name: "1 Aftaleloven",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "https://res.cloudinary.com/hndu2f8jv/video/upload/v1625659846/podcasts/Aftaleloven/kapitel_2_aftaleloven_podcast_1_fedpcd.mp3",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624048525/podcastgif/spole_aelus7.jpg",
                    },
                    {
                        name: "2 Aftaleloven",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "https://res.cloudinary.com/hndu2f8jv/video/upload/v1625659843/podcasts/Aftaleloven/kapitel_2_aftaleloven_podcast_2_gvbzaa.mp3",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624048525/podcastgif/spole_aelus7.jpg",
                    },
                    {
                        name: "3 Aftaleloven",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "https://res.cloudinary.com/hndu2f8jv/video/upload/v1625659842/podcasts/Aftaleloven/kapitel_2_aftaleloven_podcast_3_x0a744.mp3",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624048525/podcastgif/spole_aelus7.jpg",
                    },
                    {
                        name: "4 Aftaleloven",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "https://res.cloudinary.com/hndu2f8jv/video/upload/v1625659841/podcasts/Aftaleloven/kapitel_2_aftaleloven_podcast_4_m6l6hy.mp3",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624048525/podcastgif/spole_aelus7.jpg",
                    },
                    {
                        name: "5 Aftaleloven",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "https://res.cloudinary.com/hndu2f8jv/video/upload/v1625659844/podcasts/Aftaleloven/kapitel_2_aftaleloven_podcast_5_bpo4tm.mp3",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624048525/podcastgif/spole_aelus7.jpg",
                    },
                    {
                        name: "6 Aftaleloven",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "https://res.cloudinary.com/hndu2f8jv/video/upload/v1625659848/podcasts/Aftaleloven/kapitel_2_aftaleloven_podcast_6_grks5b.mp3",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624048525/podcastgif/spole_aelus7.jpg",
                    },
                    {
                        name: "7 Aftaleloven",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "https://res.cloudinary.com/hndu2f8jv/video/upload/v1625659844/podcasts/Aftaleloven/kapitel_2_aftaleloven_podcast_7_nte6vy.mp3",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624048525/podcastgif/spole_aelus7.jpg",
                    },
                    {
                        name: "8 Aftaleloven",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "https://res.cloudinary.com/hndu2f8jv/video/upload/v1625659845/podcasts/Aftaleloven/kapitel_2_aftaleloven_podcast_8_gcfvuk.mp3",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624048525/podcastgif/spole_aelus7.jpg",
                    },
                    {
                        name: "9 Aftaleloven",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "https://res.cloudinary.com/hndu2f8jv/video/upload/v1625659846/podcasts/Aftaleloven/kapitel_2_aftaleloven_podcast_9_yzzkg8.mp3",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624048525/podcastgif/spole_aelus7.jpg",
                    },
                    {
                        name: "10 Aftaleloven",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "https://res.cloudinary.com/hndu2f8jv/video/upload/v1625659847/podcasts/Aftaleloven/kapitel_2_aftaleloven_podcast_10_jmyz7i.mp3",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624048525/podcastgif/spole_aelus7.jpg",
                    },
                    {
                        name: "11 Aftaleloven",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "https://res.cloudinary.com/hndu2f8jv/video/upload/v1625659848/podcasts/Aftaleloven/kapitel_2_aftaleloven_podcast_11_wty04r.mp3",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624048525/podcastgif/spole_aelus7.jpg",
                    },
                    {
                        name: "12 Aftaleloven",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "https://res.cloudinary.com/hndu2f8jv/video/upload/v1625659849/podcasts/Aftaleloven/kapitel_2_aftaleloven_podcast_12_gnkq1t.mp3",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624048525/podcastgif/spole_aelus7.jpg",
                    },
                    {
                        name: "13 Aftaleloven",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "https://res.cloudinary.com/hndu2f8jv/video/upload/v1625659852/podcasts/Aftaleloven/kapitel_2_aftaleloven_podcast_13_xpczon.mp3",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624048525/podcastgif/spole_aelus7.jpg",
                    },
                    {
                        name: "14 Aftaleloven",
                        artist: "Sonny Kristoffersen",
                        album: "Finansjura",
                        url:
                            "https://res.cloudinary.com/hndu2f8jv/video/upload/v1625659851/podcasts/Aftaleloven/kapitel_2_aftaleloven_podcast_14_iea6wh.mp3",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624048525/podcastgif/spole_aelus7.jpg",
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
                            "https://res.cloudinary.com/hndu2f8jv/video/upload/v1625659984/podcasts/Podcast%20om%20GDPR%20fra%20datatilsynet/1_hvad_er_personoplysninger_be8rye.mp3",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624048525/podcastgif/spole_aelus7.jpg",
                    },
                    {
                        name: "Personoplysninger GDPR 2",
                        artist: "Datatilsynet",
                        album: "GDPR",
                        url:
                            "https://res.cloudinary.com/hndu2f8jv/video/upload/v1625659983/podcasts/Podcast%20om%20GDPR%20fra%20datatilsynet/2_hvorna_r_ma_du_behandle_personoplysninger_oh4cyv.mp3",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624048525/podcastgif/spole_aelus7.jpg",
                    },
                    {
                        name: "Samtykke GDPR 3",
                        artist: "Datatilsynet",
                        album: "GDPR",
                        url:
                            "https://res.cloudinary.com/hndu2f8jv/video/upload/v1625659986/podcasts/Podcast%20om%20GDPR%20fra%20datatilsynet/3_samtykke_hvorna_r_og_hvordan_hlujxq.mp3",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624048525/podcastgif/spole_aelus7.jpg",
                    },
                    {
                        name: "Personalepolitik GDPR 4",
                        artist: "Datatilsynet",
                        album: "GDPR",
                        url:
                            "https://res.cloudinary.com/hndu2f8jv/video/upload/v1625659979/podcasts/Podcast%20om%20GDPR%20fra%20datatilsynet/4_hvordan_laver_man_en_god_persondatapolitik_qp5oav.mp3",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624048525/podcastgif/spole_aelus7.jpg",
                    },
                    {
                        name: "De registrerede GDPR 5",
                        artist: "Datatilsynet",
                        album: "GDPR",
                        url:
                            "https://res.cloudinary.com/hndu2f8jv/video/upload/v1625659985/podcasts/Podcast%20om%20GDPR%20fra%20datatilsynet/5_de_registreredes_rettigheder_og_virksomhedernes_forpligtelser_sxeuvc.mp3",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624048525/podcastgif/spole_aelus7.jpg",
                    },
                    {
                        name: "Sletning GDPR 6",
                        artist: "Datatilsynet",
                        album: "GDPR",
                        url:
                            "https://res.cloudinary.com/hndu2f8jv/video/upload/v1625659981/podcasts/Podcast%20om%20GDPR%20fra%20datatilsynet/6_sletning_hvorna_r_og_hvordan_eo1660.mp3",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624048525/podcastgif/spole_aelus7.jpg",
                    },
                    {
                        name: "Brug af billeder GDPR 7",
                        artist: "Datatilsynet",
                        album: "GDPR",
                        url:
                            "https://res.cloudinary.com/hndu2f8jv/video/upload/v1625659986/podcasts/Podcast%20om%20GDPR%20fra%20datatilsynet/7_brug_af_billeder_s9kzzi.mp3",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624048525/podcastgif/spole_aelus7.jpg",
                    },
                    {
                        name: "Databeskyttelse HR GDPR 8",
                        artist: "Datatilsynet",
                        album: "GDPR",
                        url:
                            "https://res.cloudinary.com/hndu2f8jv/video/upload/v1625659988/podcasts/Podcast%20om%20GDPR%20fra%20datatilsynet/8_databeskyttelse_ved_ans_ttelsesforhold_vx7grd.mp3",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624048525/podcastgif/spole_aelus7.jpg",
                    },
                    {
                        name: "Optagelse telefon GDPR 9",
                        artist: "Datatilsynet",
                        album: "GDPR",
                        url:
                            "https://res.cloudinary.com/hndu2f8jv/video/upload/v1625659991/podcasts/Podcast%20om%20GDPR%20fra%20datatilsynet/9_optagelse_af_telefonsamtaler_hvad_siger_reglerne_z6audn.mp3",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624048525/podcastgif/spole_aelus7.jpg",
                    },
                    {
                        name: "Tredielandsoverfoersler GDPR 10",
                        artist: "Datatilsynet",
                        album: "GDPR",
                        url:
                            "https://res.cloudinary.com/hndu2f8jv/video/upload/v1625659988/podcasts/Podcast%20om%20GDPR%20fra%20datatilsynet/10_tredjelandsoverf_rsler_hvorna_r_og_hvad_g_lder_qe8kl3.mp3",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624048525/podcastgif/spole_aelus7.jpg",
                    },
                    {
                        name: "TV overvaagning GDPR 11",
                        artist: "Datatilsynet",
                        album: "GDPR",
                        url:
                            "https://res.cloudinary.com/hndu2f8jv/video/upload/v1625659992/podcasts/Podcast%20om%20GDPR%20fra%20datatilsynet/11_tv_overvaagning_marie_gcwsiy.mp3",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624048525/podcastgif/spole_aelus7.jpg",
                    },
                    {
                        name: "Risikovurdering GDPR 12",
                        artist: "Datatilsynet",
                        album: "GDPR",
                        url:
                            "https://res.cloudinary.com/hndu2f8jv/video/upload/v1625659993/podcasts/Podcast%20om%20GDPR%20fra%20datatilsynet/12_risikovurderinger_allan_culfpm.mp3",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624048525/podcastgif/spole_aelus7.jpg",
                    },
                    {
                        name: "Sikkerhedsbrud GDPR 13",
                        artist: "Datatilsynet",
                        album: "GDPR",
                        url:
                            "https://res.cloudinary.com/hndu2f8jv/video/upload/v1625659992/podcasts/Podcast%20om%20GDPR%20fra%20datatilsynet/13_sikkerhedsbrud_xenia_hjyntg.mp3",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624048525/podcastgif/spole_aelus7.jpg",
                    },
                    {
                        name: "Cloud GDPR 14",
                        artist: "Datatilsynet",
                        album: "GDPR",
                        url:
                            "https://res.cloudinary.com/hndu2f8jv/video/upload/v1625659996/podcasts/Podcast%20om%20GDPR%20fra%20datatilsynet/14_cloud_allan_victor_rkgjdi.mp3",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624048525/podcastgif/spole_aelus7.jpg",
                    },
                    {
                        name: "Databeskyttelse design GDPR 15",
                        artist: "Datatilsynet",
                        album: "GDPR",
                        url:
                            "https://res.cloudinary.com/hndu2f8jv/video/upload/v1625659993/podcasts/Podcast%20om%20GDPR%20fra%20datatilsynet/15_databeskyttelse_design_allan_rqutow.mp3",
                        cover_art_url:
                            "https://res.cloudinary.com/hndu2f8jv/image/upload/v1624048525/podcastgif/spole_aelus7.jpg",
                    },
                ],
            },
        },
    });
}

export default amplitudeJS;
