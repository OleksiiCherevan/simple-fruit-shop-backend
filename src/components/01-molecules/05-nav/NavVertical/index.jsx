import style from "./index.module.css";
import React from "react";
import ButtonNavVertical from "components/00-atoms/00-buttons/ButtonNavVertical";

const NavVertical = (props) => {
    const { text, navs = [], onChange=()=>{} } = props;

    const handleChange = (text) => {
      onChange(text);
    }
    return (
        <div>
            <div className={style["nav-header"]}>{text}</div>
            <nav className={style["nav"]}>
                {navs.map((nav) => (
                    <ButtonNavVertical
                        key={nav.text}
                        {...nav}
                        onClick={handleChange}
                    ></ButtonNavVertical>
                ))}
            </nav>
        </div>
    );
};

export default NavVertical;
