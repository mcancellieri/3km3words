import {event} from "next";
import React from "react";
import styles from '../styles/Home.module.css'
import {withRouter} from 'next/router'

/**
 * @return {boolean}
 */
export class Footer extends React.Component {

    constructor(props) {
        super(props);
    };


    render() {
        return <footer className={styles.footer}>
            <a href="https://matteocancellieri.com">2021 Matteo Cancellieri</a>
        </footer>
    }

}

export default Footer = withRouter(Footer);





