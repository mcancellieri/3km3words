import {event} from "next";
import React from "react";
import {PinSvg} from "./Pin.svg";
import styles from '../styles/Home.module.css'
import Image from 'next/image'

/**
 * @return {boolean}
 */
export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mapWidth: null,
            displayPin: false,
            location: props.location,
            title: props.title
        };
    };

    componentDidMount() {
        let width = document.getElementById("map").offsetWidth;
        this.setState({
            mapWidth: width,
            displayPin: true
        });
    }

    render() {
        const offsetX = 310;
        const offsetY = 230;
        let display = this.state.displayPin;
        let mapWidth = this.state.mapWidth;
        let gridWidth = mapWidth - 2 * 300;

        let scale = (mapWidth / 80) / 10;
        let multiplier = (mapWidth - offsetX) / 999;

        let newsize = 10 * scale;
        let x = ((999 - (this.state.location % 999)) * multiplier) + offsetX;
        let y = (Math.floor(this.state.location / 999) * multiplier) + offsetY;
        let imageX = x - 75 + newsize/2;
        let imageY = y - 140;
        let filename = "eggs.tries.lobby";
        return (
            display && (
                <g>
                    <svg x={imageX -5} y={imageY-15}>
                        <rect className={styles.card} x="0" y="0" width="160" height="160" rx="3" />
                        <image x="5" y="-10" href={filename + "_thumb.webp"} height="150" width="150"/>
                        <text x="5" y="150" textLength="150" className={styles.cardText}>{filename}</text>
                    </svg>
                    <svg x={x} y={y}>

                        <g className={styles.pin} transform={"scale(" + scale + ")"}>

                            <PinSvg/>
                        </g>
                    </svg>
                </g>
            )
        );
    }

}







