import Head from 'next/head'
import styles from '../styles/Squares.module.css'
import {Photos} from "../components/Location";
import Square from "../components/Square";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";

export default function squares() {

    return (<div className={styles.container}>

            <Head>
                <title>3KM3Words</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={styles.squaresContainer}>
                <Header/>
                <div className={styles.squares}>
                    {Photos.map((photo) =>
                        <Square photo={photo}/>
                    )}
                </div>
            </main>
            <Footer/>
        </div>
    )
}
