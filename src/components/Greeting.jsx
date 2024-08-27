// import React from "react";
import dayImage from "../assets/day.svg";
import eveningImage from "../assets/evening.svg";
import nightImage from "../assets/night.svg";


export function Greeting() {
    const currentTime = new Date().getHours();

    let greetingMessage = "";
    let greetingImage = "";

    if (currentTime >= 6 && currentTime < 12) {
        greetingMessage = "Good Morning!";
        greetingImage = dayImage;
    } else if (currentTime >= 12 && currentTime < 17) {
        greetingMessage = "Good Afternoon!";
        greetingImage = dayImage;
    } else if (currentTime >= 17 && currentTime < 21) {
        greetingMessage = "Good Evening!";
        greetingImage = eveningImage;
    } else {
        greetingMessage = "Good Night!";
        greetingImage = nightImage;
    }

    return (
        <h1 className="greeting">
            <img src={greetingImage} alt="Greeting" />
            {greetingMessage}
        </h1>
    );
}