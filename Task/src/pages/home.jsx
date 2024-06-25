import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Home.module.css';
import image from '../assets/image.jpg';

export default function Home() {
    const [count, setCount] = useState(0);
    return (
        <div className={styles.home_container}>
            <div className={styles.image_container}>
                <img src={image} className={styles.top_image} alt="Descriptive Alt Text" />
                <div className={styles.centered_div}>
                    <div className={styles.title_container}>
                        Build a self care routine suitable for you
                        <div className={styles.text_container}>
                            Take our test to get a personalized self care routine based on your needs.
                        </div>
                    </div>
                    <button className={styles.start_button}><Link to="/first">
                        <span className={styles.button_text}>Start the quiz</span>
                    </Link></button>
                </div>
            </div>
        </div>
    );
}
