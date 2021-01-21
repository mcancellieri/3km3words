import Head from 'next/head'
import styles from '../styles/Gallery.module.css'
import {useRouter} from 'next/router'
import {Photos} from "../components/Location";
import React from "react";
import Slider from "../components/Slider";

export default function Gallery() {
    const router = useRouter();
    let selected = Photos[0].title;
    if (router.query.selected) {
        selected = router.query.target
    }

    return (<div className={styles.container}>

            <Head>
                <title>3KM3Words</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className={styles.main}>
                <Slider selected={selected}/>

            </div>
            <footer className={styles.footer}>
                2021 Matteo Cancellieri
            </footer>
        </div>
    )
}
