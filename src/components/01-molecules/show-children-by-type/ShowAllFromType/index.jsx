import style from "./index.module.css";
import React from "react";

const ShowChildrenByKey = (props) => {
    const { children, type, types = [] } = props;

    types.forEach((element) => {
        if (element.key = type) {
            return element.component
        }
    });
};

export default ShowChildrenByKey;
