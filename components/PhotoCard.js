import {event} from "next";
import React from "react";
import styles from '../styles/Home.module.css'

/**
 * @return {boolean}
 */
export default class PhotoCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            photoDetail: props.photoDetail,
            display: false,
            router: props.router
        };
    };

    componentDidMount() {
        this.setState({
            display: true
        });
    }

    showGallery(event) {
        console.log(event.target.href);
        return this.state.router.push({
            pathname: "gallery",
            query: {s: event.target.href.baseVal.replace("_thumb.webp", "")}
        });
    }

    render() {

        return (
            this.state.display && (
                <svg id={this.state.photoDetail.filename + "_thumb"} x={this.state.photoDetail.imageX}
                     y={this.state.photoDetail.imageY}
                     visibility="visible" onClick={this.showGallery.bind(this)}>
                    <rect className={styles.card} x="-5" y="0" width="165" height="170" rx="3"/>
                    <image x="5" y="-10" href={this.state.photoDetail.filename + "_thumb.webp"} height="150"
                           width="150"/>
                    <text x="5" y="155" textLength="150"
                          className={styles.cardText}>{this.state.photoDetail.title}</text>
                </svg>
            )
        );
    }

}







