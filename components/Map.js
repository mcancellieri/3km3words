import {event} from "next";
import styles from '../styles/Home.module.css'
import React from "react";

/**
 * @return {boolean}
 */
export default function Map() {
    const array = Array.from(Array(99).keys());


    return (
        <div className={styles.map}>
            < img
                src="map.svg" alt="The map of LB"/>
            <table>
                {array.map(row => <tr> {array.map(col => <td
                    id={"cell" + row + "-" + col}><span className={styles.pin}/></td>)} </tr>)}
            </table>
        </div>

    )
        ;


}







