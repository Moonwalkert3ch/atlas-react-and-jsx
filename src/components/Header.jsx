import { Greeting } from "./Greeting";
import { SocialLinks } from "./SocialLinks";
import { StrictMode } from "react";


export function Header() {
    return (
        <StrictMode>
            <nav>
                <Greeting />
                <SocialLinks />
            </nav>
        </StrictMode>
    );
}