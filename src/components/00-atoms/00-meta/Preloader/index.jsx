import style from "./index.module.css";
import React from "react";

const Preloader = (props) => {
    const { children } = props;

    return (
        <div className={style["prelader-container"]}>
            <div className={style["lds-spinner"]}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Preloader;
