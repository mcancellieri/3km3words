import {event} from "next";
import styles from '../styles/Home.module.css'
import React from "react";
import {MapSvg} from './Map.svg'
import Pin from './Pin'

/**
 * @return {boolean}
 */
export default function Map() {
    const array = Array.from(Array(99).keys());
    let photos = [
        {
            id: 446424,
            title: "stew.walled.cosmic"
        },
        {
            id: 785743,
            title: "caves.stem.tuck"
        },
        {
            id: 998,
            title: "reference"
        },
        {
            id: 0,
            title: "reference"
        },
        {
            id: 999 * 999 -1,
            title: "reference"
        },
        {
            id: 999 * 999 - 999,
            title: "reference"
        }
    ];

    return (
        <div id="map" className={styles.map}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1403 1080">

                <MapSvg/>
                {photos.map((photo, i) => <Pin location={photo.id} title={photo.title}/>)}
            </svg>
        </div>

    );


}







