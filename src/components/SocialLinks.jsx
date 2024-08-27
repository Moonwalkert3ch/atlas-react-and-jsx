import linkedinImage from "../assets/linkedin.svg";
import githubImage from "../assets/github.svg";


export function SocialLinks() {
    return (
        <div className="social-links">
            <a href="https://www.linkedin.com/in/rachaelbradford">
            <img src={linkedinImage} alt="LinkedIn"></img>
            </a>
            <a href="https://github.com/Moonwalkert3ch">
            <img src={githubImage} alt="GitHub"></img>
            </a>
        </div>
    );
}