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
        console.log(props.selected);
        this.state = {
            selected: props.selected,
            screenWidth: 0,
            screenHeight: 0
        };
    };

    static getCurrentIndex(selected) {
        for (let i = 0; i < Photos.length; i++) {
            if (Photos[i].filename === selected) {
                return i;
            }
        }
        return 0;
    }

    next() {
        let currentIndex = Slider.getCurrentIndex(this.state.selected);
        let newIndex = (currentIndex + 1) % Photos.length;
        this.setState({selected: Photos[newIndex].filename})
    }

    prev() {
        let currentIndex = Slider.getCurrentIndex(this.state.selected);
        let newIndex = ((currentIndex === 0) ? 0 : currentIndex - 1) % Photos.length;
        this.setState({selected: Photos[newIndex].filename})
    }

    componentDidMount() {
        this.setState({screenWidth: window.innerWidth, screenHeight: window.innerHeight})
    }

    getScaled(width, height) {
        if (this.state.screenHeight < height) {
            let newHeight = this.state.screenHeight * .60;
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
                <div className={styles.next} onClick={this.next.bind(this)}><img src={"prev.svg"} alt={"next"}/></div>
                <div className={styles.prev} onClick={this.prev.bind(this)}><img src={"prev.svg"} alt={"prev"}/></div>
                <div className={styles.photoCardWrapper}>
                    {Photos.map((photo) =>
                        <div key={photo.filename} id={photo.filename} className={styles.photoCard}
                             style={{display: this.state.selected === photo.filename ? "block" : "none"}}>
                            <Image src={"/" + photo.filename + ".webp"} layout="intrinsic"

                                   width={this.getScaled(photo.width, photo.height).width}
                                   height={this.getScaled(photo.width, photo.height).height}/>
                            <div className={styles.title}>
                                {photo.title}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}







