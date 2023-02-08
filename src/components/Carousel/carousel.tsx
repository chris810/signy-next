import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Cloudy from '../../../public/cloudy.jpg';
import Sunset from '../../../public/sunset.jpg';
import Image from "next/image";

import styles from './carousel.module.css';

export default function HomeCarousel() {
    return (
        <Carousel className={styles.carousel}>
            <div>
                <Image className={styles.image} src={Cloudy} alt='Signy Logo'/>
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <Image className={styles.image} src={Sunset} alt='Hamburger Icon'/>
                <p className="legend">Legend 2</p>   
            </div>
        </Carousel>
    )
}