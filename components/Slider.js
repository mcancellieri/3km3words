import {event} from "next";
import React from "react";
import styles from '../styles/Gallery.module.css'
import {Photos} from "./Location";
import Image from "next/image";

/**
 * @return {boolean}
 */
export default class Slider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: props.selected,
            screenWidth: 0,
            screenHeight: 0
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

    next() {
        let currentIndex = Slider.getCurrentIndex(this.state.selected);
        let newIndex = (currentIndex + 1) % Photos.length;
        console.log(Photos[newIndex]);
        this.setState({selected: Photos[newIndex].title})
    }

    prev() {
        let currentIndex = Slider.getCurrentIndex(this.state.selected);
        let newIndex = ((currentIndex === 0) ? 0 : currentIndex - 1) % Photos.length;
        console.log(newIndex);
        this.setState({selected: Photos[newIndex].title})
    }

    componentDidMount() {
        console.log(window);
        this.setState({screenWidth: window.innerWidth, screenHeight: window.innerHeight})
    }

    getScaled(width, height) {
        console.log(this.state.screenHeight);
        console.log(height);
        if (this.state.screenHeight < height) {
            let newHeight = this.state.screenHeight * .80;
            let newWidth = width * newHeight / height;
            return {"width": newWidth, "height": newHeight}
        } else {
            return {"width": width, "height": height}
        }

    }


    render() {
        console.log(this.state.selected);

        return (
            <div className={styles.slider}>
                <div className={styles.next} onClick={this.next.bind(this)}> next</div>
                <div className={styles.prev} onClick={this.prev.bind(this)}> prev</div>
                <div className={styles.photoCardWrapper}>
                    {Photos.map((photo) =>

                        <div id={photo.title} className={styles.photoCard}
                             style={{display: this.state.selected === photo.title ? "block" : "none"}}>
                            <Image src={"/" + photo.title + ".webp"} layout="intrinsic"

                                   width={this.getScaled(photo.width, photo.height).width}
                                   height={this.getScaled(photo.width, photo.height).height}/>
                            <div className={styles.title}>
                                {photo.title.replace(/\./g, " ").replace(/(^\w)|(\s\w)/g, letter => letter.toUpperCase())}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}







