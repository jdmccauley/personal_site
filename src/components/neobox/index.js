import React from "react";
import styles from "@site/src/components/neobox/styles.module.scss";


function NeoBox({children}) {
    return (
        <div className={styles.neoboxRed}>
            <p>{children}</p>
        </div>
    );
}

export {NeoBox};