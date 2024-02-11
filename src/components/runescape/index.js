import React from 'react';

import styles from "@site/src/components/runescape/styles.module.css";

// Must be 'childen' because they're child elements technically.
function RunescapeFont({children}) {
    return (<>
        <p className={styles.runescape_font}>{children}</p>
    </>);
}

function RunescapeFontBold({children}) {
    return (<>
        <p className={styles.runescape_font}>{children}</p>
    </>);
}

function RunescapeFontQuill({children}) {
    return (<>
        <p className={styles.runescape_font_quill}>{children}</p>
    </>);
}

function Scroll({children}) {
    return (<div id={styles.scroll}>
        <div id={styles.contain}>
            {children}
        </div>
    </div>)
}

export {RunescapeFont, RunescapeFontBold, RunescapeFontQuill, Scroll};