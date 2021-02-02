import styles from '../styles/About.module.css'
import React from "react";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";

export default function about() {


    return (<div className={styles.container}>

            <main className={styles.main}>
                <Header/>
                <h2>
                    How many pictures do you need to describe a town?
                </h2>
                <h2>
                    How many words do you need to describe a picture?
                </h2>

                <p>
                    The project is a collection of photographs taken in 100 random locations
                    in a 3km (less than 2 miles) square around the Market Cross of Leighton Buzzard, Bedfordshire, UK.
                </p>
                <p>
                    Every location has a title based on the <a href="https://what3words.com">What3Words addresses</a>.
                    What3Words is a service that assign a combination of three words to any three meter square on Earth.
                    The 100 random locations were selected inside a grid of 999x999 candidates (998,001 possible
                    locations).
                    The punctuation in the titles is mine.
                </p>
                <p>
                    The photos contains at least a portion of the randomly generated three meter square.
                    <small>Some artistic license has been applied.</small>
                </p>
                <h3>For the nerds</h3>
                <p><a href="https://github.com/mcancellieri/gridaroundme">This is</a> the code for the generation of the
                    grid,
                    while <a href="https://github.com/mcancellieri/3km3words">this is</a> the code for the website.
                </p>
            </main>
            <Footer/>
        </div>
    )
}
