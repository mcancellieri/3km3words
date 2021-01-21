import {event} from "next";
import React from "react";
import {PinSvg} from "./Pin.svg";
import styles from '../styles/Home.module.css'
import CollisionDetectionService from "./CollisionDetectionService";

/**
 * @return {boolean}
 */
export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photoDetail: props.photoDetail,
            displayPin: false,
        };
    };

    componentDidMount() {
        this.setState({
            displayPin: true
        });
    }

    toggleImage() {
        let photoCard = document.getElementById(this.state.photoDetail.filename + "_thumb");
        console.log(photoCard.getAttribute("visibility"));
        if (photoCard.getAttribute("visibility") === "visible") {
            photoCard.setAttribute("visibility", "hidden");
        } else {
            photoCard.setAttribute("visibility", "visible");

        }
    }

    updatePinsVisibility(visibilityState) {
        let pins = document.getElementsByClassName("pin");
        let current = document.getElementById(this.state.photoDetail.filename);
        let bbox = current.getBBox();
        let currentBox = {
            x1: bbox.x,
            x2: bbox.x + bbox.width,
            y1: bbox.y,
            y2: bbox.y + bbox.height
        };
        for (let pin of pins) {
            let bbox = pin.getBBox();
            let pinBox = {
                x1: bbox.x,
                x2: bbox.x + bbox.width,
                y1: bbox.y,
                y2: bbox.y + bbox.height
            };
            console.log("checking");
            console.log(pinBox);
            console.log("against");
            console.log(currentBox);
            if (CollisionDetectionService.isCollision(currentBox, pinBox)) {
                pin.setAttribute("visibility", visibilityState);
                console.log("setting visible for " + pin.id)
            }
        }
    }


    render() {

        return (
            this.state.displayPin && (
                <g id={this.state.photoDetail.filename} className="pin" visibility={this.state.photoDetail.pinVisible}>
                    <svg x={this.state.photoDetail.x} y={this.state.photoDetail.y}>
                        <g className={styles.pin} transform={"scale(" + this.state.photoDetail.scale + ")"}
                           onClick={this.toggleImage.bind(this)}>
                            <PinSvg/>
                        </g>
                    </svg>
                </g>
            )
        );
    }

}







