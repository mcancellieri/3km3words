import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {App} from "next";
import React from "react";
import Map from "../components/Map";

export default function Home() {

    return (
        <div className={styles.container}>
            <Head>
                <title>3KM3Words</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.logo}>
                    <img src={"logo.svg"} alt="3km3words logo"/>
                </h1>
                <div className={styles.questions}>
                    <h2 className={styles.question}>
                        How many pictures do you need to describe a town?
                    </h2>
                    <h2 className={styles.question}>
                        How many words do you need to describe a picture?
                    </h2>
                </div>
                <Map/>
            </main>

            <footer className={styles.footer}>
                2021 Matteo Cancellieri
            </footer>
        </div>
    )
}
