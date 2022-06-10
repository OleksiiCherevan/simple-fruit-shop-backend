import style from "./index.module.css";
import React from "react";
import ButtonNavHorizontal from "components/00-atoms/01-buttons/ButtonNavHorizontal";
import { Link } from "react-router-dom";

const NavHorizontal = (props) => {
    const { text, navs = [], onChange = () => {} } = props;

    const handleChange = (text) => {
        onChange(text);
    };
    return (
        <div>
            <div className={style["nav-header"]}>{text}</div>
            <nav className={style["nav"]}>
                {navs.map((nav) => (
                    <Link to={nav.href} key={nav.text}>
                        <ButtonNavHorizontal
                            onClick={handleChange}
                            {...nav}
                        ></ButtonNavHorizontal>
                    </Link>
                ))}
            </nav>
        </div>
    );
};

export default NavHorizontal;
