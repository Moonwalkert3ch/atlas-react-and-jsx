import profilePic from "../assets/headshot.png";


export function AboutMe() {
    return (
        <div className="about-me">
            <img src={profilePic} alt="Rachael Bradford" />
            <p>
            Hi, I am Rachael Bradford. I am currently specializing in full-stack development, with a passion for building scalable web applications.
            I am in my final trimester at school, and my favorite languages to work with are JavaScript and React. After school, I plan to work as a software engineer, focusing on building impactful software solutions.
            In my free time, I enjoy playing video games, drawing, writing music, and exploring new technologies.
            </p>
        </div>
    );
}