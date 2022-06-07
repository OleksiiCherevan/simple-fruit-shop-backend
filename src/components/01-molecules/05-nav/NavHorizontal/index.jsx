import style from "./index.module.css";
import React from "react";
import ButtonNavHorizontal from "components/00-atoms/00-buttons/ButtonNavHorizontal";

const NavHorizontal = (props) => {
    const { text, navs = [], onChange } = props;

    const handleChange = (text) => {
        onChange(text);
    }
    return (
        <div>
            <div className={style["nav-header"]}>{text}</div>
            <nav className={style["nav"]}>
                {navs.map((nav) => (
                    <ButtonNavHorizontal
                        key={nav.text}
                        onClick={handleChange}
                        {...nav}
                    ></ButtonNavHorizontal>
                ))}
            </nav>
        </div>
    );
};

export default NavHorizontal;
