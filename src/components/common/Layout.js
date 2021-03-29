import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Link, StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Button from "react-bootstrap/Button";

import { Navigation } from ".";
import config from "../../utils/siteConfig";
import Cookies from "universal-cookie";

// Styles
import "../../styles/app.css";

/**
 * Main layout component
 *
 * The Layout component wraps around each page and template.
 * It also provides the header, footer as well as the main
 * styles, and meta data for each page.
 *
 */
const DefaultLayout = ({ data, children, bodyClass, isHome }) => {
    const [userLoggedIn, setUserLoggedIn] = useState("-1");
    const cookies = new Cookies();
    const site = data.allGhostSettings.edges[0].node;
    const twitterUrl = site.twitter
        ? `https://twitter.com/${site.twitter.replace(/^@/, ``)}`
        : null;
    const facebookUrl = site.facebook
        ? `https://www.facebook.com/${site.facebook.replace(/^\//, ``)}`
        : null;

    function userLogout() {
        cookies.remove("loggedInUser");
        cookies.remove("loggedInUserIpAddress");
        window.location.href = "/login";
    }

    useEffect(async () => {
        console.log(cookies.get("loggedInUser"));
        console.log(cookies.get("loggedInUserIpAddress"));
        const userEmail = cookies.get("loggedInUser");
        if (cookies.get("loggedInUser")) {
            await fetch("/.netlify/functions/get-user", {
                method: "POST",
                body: JSON.stringify({ userEmail }),
            })
                .then((response) => response.json())
                .then((responseJson) => {
                    if (
                        responseJson.user[0].user_ip !==
                        cookies.get("loggedInUserIpAddress")
                    ) {
                        //userLogout();
                        cookies.remove("loggedInUser");
                        cookies.remove("loggedInUserIpAddress");
                        setUserLoggedIn("0");
                    } else {
                        setUserLoggedIn("1");
                    }
                });
        } else {
            setUserLoggedIn("0");
        }
    }, []);

    return (
        <>
            <Helmet>
                <html lang={site.lang} />
                <style type="text/css">{`${site.codeinjection_styles}`}</style>
                <body className={bodyClass} />
            </Helmet>

            <div className="viewport">
                <div className="viewport-top">
                    {/* The main header section on top of the screen */}
                    <header
                        className="site-head"
                        style={{
                            ...(site.cover_image && {
                                backgroundImage: `url(${site.cover_image})`,
                            }),
                        }}
                    >
                        <div className="container">
                            <div className="site-mast">
                                <div className="site-mast-left">
                                    <Link to="/">
                                        {site.logo ? (
                                            <img
                                                className="site-logo"
                                                src={site.logo}
                                                alt={site.title}
                                            />
                                        ) : (
                                            <Img
                                                fixed={
                                                    data.file.childImageSharp
                                                        .fixed
                                                }
                                                alt={site.title}
                                            />
                                        )}
                                    </Link>
                                </div>
                                <div className="site-mast-right">
                                    {site.twitter && (
                                        <a
                                            href={twitterUrl}
                                            className="site-nav-item"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                className="site-nav-icon"
                                                src="/images/icons/twitter.svg"
                                                alt="Twitter"
                                            />
                                        </a>
                                    )}
                                    {site.facebook && (
                                        <a
                                            href={facebookUrl}
                                            className="site-nav-item"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                className="site-nav-icon"
                                                src="/images/icons/facebook.svg"
                                                alt="Facebook"
                                            />
                                        </a>
                                    )}
                                    <a
                                        className="site-nav-item"
                                        href={`https://feedly.com/i/subscription/feed/${config.siteUrl}/rss/`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            className="site-nav-icon"
                                            src="/images/icons/rss.svg"
                                            alt="RSS Feed"
                                        />
                                    </a>
                                </div>
                            </div>
                            {isHome ? (
                                <div className="site-banner">
                                    <h1 className="site-banner-title">
                                        {site.title}
                                    </h1>
                                    <p className="site-banner-desc">
                                        {site.description}
                                    </p>
                                </div>
                            ) : null}
                            <nav className="site-nav">
                                <div className="site-nav-left">
                                    {/* The navigation items as setup in Ghost */}
                                    <Navigation
                                        data={site.navigation}
                                        navClass="site-nav-item"
                                    />
                                </div>
                                <div className="site-nav-right">
                                    {/* <Link className="site-nav-button" to="/about">About</Link> */}
                                    {userLoggedIn == "1" ? (
                                        <Button onClick={userLogout}>
                                            Logout
                                        </Button>
                                    ) : userLoggedIn == "0" ? (
                                        <Link
                                            className="site-nav-button"
                                            to="/login"
                                        >
                                            Login
                                        </Link>
                                    ) : (
                                        ""
                                    )}
                                </div>
                            </nav>
                        </div>
                    </header>

                    <main className="site-main">
                        {/* All the main content gets inserted here, index.js, post.js */}
                        {children}
                    </main>
                </div>

                <div className="viewport-bottom">
                    {/* The footer at the very bottom of the screen */}
                    <footer className="site-foot">
                        <div className="site-foot-nav container">
                            <div className="site-foot-nav-left">
                                <Link to="/">{site.title}</Link> © 2021 &mdash;
                                Published with{" "}
                                <a
                                    className="site-foot-nav-item"
                                    href="https://ghost.org"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Ghost
                                </a>
                            </div>
                            <div className="site-foot-nav-right">
                                <Navigation
                                    data={site.navigation}
                                    navClass="site-foot-nav-item"
                                />
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
};

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
    bodyClass: PropTypes.string,
    isHome: PropTypes.bool,
    data: PropTypes.shape({
        file: PropTypes.object,
        allGhostSettings: PropTypes.object.isRequired,
    }).isRequired,
};

const DefaultLayoutSettingsQuery = (props) => (
    <StaticQuery
        query={graphql`
            query GhostSettings {
                allGhostSettings {
                    edges {
                        node {
                            ...GhostSettingsFields
                        }
                    }
                }
                file(relativePath: { eq: "ghost-icon.png" }) {
                    childImageSharp {
                        fixed(width: 30, height: 30) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `}
        render={(data) => <DefaultLayout data={data} {...props} />}
    />
);

export default DefaultLayoutSettingsQuery;
