import {event} from "next";
import React from "react";
import styles from '../styles/Home.module.css'
import {withRouter} from 'next/router'
import Head from "next/head";
import {GA_TRACKING_ID} from '../lib/gtag'

/**
 * @return {boolean}
 */
export class Header extends React.Component {

    constructor(props) {
        super(props);
    };


    showGallery() {
        return this.state.router.push({
            pathname: "Gallery",
        });
    }

    showSquares() {
        return this.state.router.push({
            pathname: "squares",
        });
    }

    render() {
        console.log(this.props.router);
        console.log(this.props.router.pathname);
        return <Head title="Bake Shave Sushi" className={styles.header}>
            <link
                rel="preload"
                href="/fonts/OpenSansCondensed-Light.ttf"
                as="font"
                crossOrigin=""
            />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            <link rel="manifest" href="/site.webmanifest"/>
            <title>Bake. Shave. Sushi.</title>
            {/* Global Site Tag (gtag.js) - Google Analytics */}
            <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <script
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
                }}
            />
            <div className={styles.header}>
                <a href="/">
                    <h1 className={styles.logo}>
                        <img src={"title.svg"} alt="3km3words logo"/>
                    </h1>
                </a>
                <div className={styles.buttonsBar}>
                    <span
                        className={(this.props.router.pathname === "/gallery") ? [styles.headerButton + " " + styles.selected] : styles.headerButton}><a
                        href={"/gallery"}><img alt="Go to Gallery" src={"gallery.svg"}/></a></span>
                    <span
                        className={(this.props.router.pathname === "/squares") ? [styles.headerButton + " " + styles.selected] : styles.headerButton}><a
                        href={"/squares"}><img alt="Go to Square view" src={"squares.svg"}/></a></span>
                    <span
                        className={(this.props.router.pathname === "/") ? [styles.headerButton + " " + styles.selected] : styles.headerButton}><a
                        href={"/"}><img alt="Go to Map view" src={"pinicon.svg"}/></a></span>
                </div>
            </div>
        </Head>

    }

}

export default Header = withRouter(Header);





