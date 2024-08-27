import copyImage from "../assets/copy.svg";


export function CopyLink({ link }) {
    const copyText = () => {
        navigator.clipboard.writeText(link)
            .then(() => {
                alert("Link copied to clipboard!")
            })
    };

    return (
        <img
        src={copyImage}
        alt="Copy Link"
        className="copy"
        onClick={copyText}
        />
    );
}