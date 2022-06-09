import style from "./index.module.css";
import React, { useEffect } from "react";
import TableViewTransfers from "components/02-organisms/01-blocks/TableViewTransfers";

const ShowTransfers = (props) => {
    useEffect(() => {}, []);

    return <div className={style["view"]}>
        <TableViewTransfers></TableViewTransfers>
    </div>;
};

export default ShowTransfers;
