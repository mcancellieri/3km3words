import {event} from "next";
import React from "react";
import {Photos} from "./Location";
import Image from "next/image";
import styles from '../styles/Squares.module.css'

/**
 * @return {boolean}
 */
export default class Square extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            screenWidth: 0,
            screenHeight: 0,
            photo: props.photo
        };
    };

    static getCurrentIndex(selected) {
        for (let i = 0; i < Photos.length; i++) {
            if (Photos[i].title === selected) {
                return i;
            }
        }
        return 0;
    }

    componentDidMount() {
        this.setState({screenWidth: window.innerWidth, screenHeight: window.innerHeight})
    }

    getScaled(width, height) {
        let targetWidth = this.state.screenWidth / 4 - 80;
        if (this.state.screenWidth < 600) {
            targetWidth = this.state.screenWidth - 80;
        }

        if (targetWidth < width) {
            let newWidth1 = targetWidth;
            let newHeight1 = height * newWidth1 / width;
            let targetHeight = 220;
            if (targetHeight < newHeight1) {
                let newHeight = targetHeight;
                let newWidth = newWidth1 * newHeight / newHeight1;
                return {"width": newWidth, "height": newHeight}
            } else {
                return {"width": newWidth1, "height": newHeight1}
            }
        }
    }


    render() {

        return (
            <div id={this.state.photo.title} className={styles.square}>
                <Image src={"/" + this.state.photo.title + ".webp"} layout="intrinsic"
                       width={this.getScaled(this.state.photo.width, this.state.photo.height).width}
                       height={this.getScaled(this.state.photo.width, this.state.photo.height).height}/>
                <div className={this.state.photo.title}>
                    {this.state.photo.title.replace(/\./g, " ").replace(/(^\w)|(\s\w)/g, letter => letter.toUpperCase())}
                </div>
            </div>
        )
    }
}







