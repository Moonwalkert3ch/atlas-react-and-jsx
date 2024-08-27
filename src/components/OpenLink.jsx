import openLinkImage from "../assets/open.svg";


export function OpenLink({ link }) {

    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <img src={openLinkImage} alt="Open Link" />
        </a>
    );
}
