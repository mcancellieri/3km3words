import {event} from "next";
import React from "react";
import styles from '../styles/Home.module.css'
import {withRouter} from 'next/router'
import Head from "next/head";

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
            pathname: "Squares",
        });
    }

    render() {
        console.log(this.props.router);
        console.log(this.props.router.pathname);
        return <Head title="Bake Shave Sushi" className={styles.header}>
            <link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro' rel='stylesheet' type='text/css'/>

            <div className={styles.header}>
                <a href="/">
                    <h1 className={styles.logo}>
                        <img src={"title.svg"} alt="3km3words logo"/>
                    </h1>
                </a>
                <div className={styles.buttonsBar}>
                    <span
                        className={(this.props.router.pathname === "/Gallery") ? [styles.headerButton + " " + styles.selected] : styles.headerButton}><a
                        href={"/Gallery"}><img alt="Go to Gallery" src={"gallery.svg"}/></a></span>
                    <span
                        className={(this.props.router.pathname === "/Squares") ? [styles.headerButton + " " + styles.selected] : styles.headerButton}><a
                        href={"/Squares"}><img alt="Go to Square view" src={"squares.svg"}/></a></span>
                    <span
                        className={(this.props.router.pathname === "/") ? [styles.headerButton + " " + styles.selected] : styles.headerButton}><a
                        href={"/"}><img alt="Go to Map view" src={"pinicon.svg"}/></a></span>
                </div>
            </div>
        </Head>

    }

}

export default Header = withRouter(Header);





