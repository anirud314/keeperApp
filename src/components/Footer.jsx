import React from "react";

function Footer() {
    const date = new Date();
    const copyYear = date.getFullYear();

    return (
        <footer><p>Copyright © {copyYear} Aniruddha Bhattacharya </p></footer>
    )
}

export default Footer;