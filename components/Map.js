import {event} from "next";
import styles from '../styles/Home.module.css'
import React from "react";
import {MapSvg} from './Map.svg'
import Pin from './Pin'
import {Photos} from './Location'
import PhotoCard from './PhotoCard'
import {useRouter} from "next/router";

/**
 * @return {boolean}
 */
function setupPhotoDetail(photoLocation) {
    const mapWidth = 1403;
    const mapHeight = 1080;
    const offsetXLeft = 300;
    const offsetYTop = 240;
    const offsetXRight = mapWidth - 1080;
    const offsetYBottom = mapHeight - 1005;
    let scale = (mapWidth / 80) / 10;
    let multiplierX = (1403 - offsetXLeft - offsetXRight) / 999;
    let multiplierY = (1080 - offsetYTop - offsetYBottom) / 999;
    let newsize = 10 * scale;
    let x = ((999 - (photoLocation.id % 999)) * multiplierX) + offsetXLeft;
    let y = (Math.floor(photoLocation.id / 999) * multiplierY) + offsetYTop;
    let imageX = x - (150 / 2) + newsize / 2;
    let imageY = y - 170;
    let filename = photoLocation.filename;
    let title = photoLocation.title;

    return {
        imageX: imageX,
        imageY: imageY,
        filename: filename,
        scale: scale,
        x: x,
        y: y,
        title: title
    };
}

export default function Map() {
    let photos = Photos;
    let photoDetails = [];
    {
        photos.map((photo) => photoDetails.push(setupPhotoDetail(photo)))
    }
    const router = useRouter();
    return (
        <div id="map" className={styles.map}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1403 1080">

                <MapSvg/>
                {photoDetails.map((photo) => <Pin id={photo.id} photoDetail={photo}/>)}
                <g id="thumb_container">
                    {photoDetails.map((photo) => <PhotoCard key={photo.id} id={photo.id + "card"} photoDetail={photo}
                                                            router={router}/>)}
                </g>
            </svg>
        </div>

    );


}







