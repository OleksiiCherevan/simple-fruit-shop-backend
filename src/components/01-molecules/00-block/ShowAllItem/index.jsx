import style from "./index.module.css";
import React, { useState } from "react";

const formatDate = (date) => {
    const formatedTime = date.toISOString().split("T");
    const endOfTimePart = 8;
    return formatedTime[0] + " " + formatedTime[1].slice(0, endOfTimePart);
};

const ShowAllItem = (props) => {
    const { children, items = [] } = props;

    const [selectedItem, setSelectedItem] = useState({});

    return (
        <div className={style["menu"]}>
            <table className={style["table"]}>
                <tr>
                    <th>Name</th>
                </tr>
                {items.map((item) => {
                    return (
                        <tr
                            key={JSON.stringify(item)}
                            onClick={(e) => setSelectedItem(item)}
                        >
                            <td>{item.name}</td>
                        </tr>
                    );
                })}
            </table>

            <div className={style["selected"]}>
                {JSON.stringify(selectedItem)}
            </div>
        </div>
    );
};

export default ShowAllItem;
