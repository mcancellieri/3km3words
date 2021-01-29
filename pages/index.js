import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {App} from "next";
import React from "react";
import Map from "../components/Map";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";

export default function Home() {

    return (
        <div className={styles.container}>
            <Head>
                <title>3KM3Words</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <Header/>
                <Map/>
            </main>

            <Footer/>
        </div>
    )
}
