import Head from 'next/head'
import styles from '../styles/Gallery.module.css'
import {useRouter} from 'next/router'
import {Photos} from "../components/Location";
import React from "react";
import Slider from "../components/Slider";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";

export default function Gallery() {
    const router = useRouter();
    let selected = Photos[0].title;
    if (router.query.s) {
        selected = router.query.s
    }

    return (<div className={styles.container}>

            <Head>
                <title>3KM3Words</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={styles.main}>
                <Header/>
                <Slider selected={selected}/>

            </main>
            <Footer/>
        </div>
    )
}
