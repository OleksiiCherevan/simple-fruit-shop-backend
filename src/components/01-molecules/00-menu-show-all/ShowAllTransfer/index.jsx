import style from "./index.module.css";
import React, { useState } from "react";

const formatDate = (date) => {
    const formatedTime = date.toISOString().split("T");
    const endOfTimePart = 8;
    return formatedTime[0] + " " + formatedTime[1].slice(0, endOfTimePart);
};

const ShowAllTransfer = (props) => {
    const { children, transfers = [] } = props;

    const [selectedTransfer, setSelectedTransfet] = useState({});

    return (
        <div className={style["menu"]}>
            <table className={style["table"]}>
                <tr>
                    <th>Time start</th>
                    <th>Address from</th>
                    <th>Address to</th>
                    <th>Transport name</th>
                    <th>Driver name</th>
                </tr>
                {transfers.map((transfer) => {
                    const dateStart = new Date(transfer.dateStart);
                    return (
                        <tr
                            key={JSON.stringify(transfer)}
                            onClick={(e) => setSelectedTransfet(transfer)}
                        >
                            <td>{formatDate(dateStart)}</td>
                            <td>{transfer.addressFrom}</td>
                            <td>{transfer.addressTo}</td>
                            <td>{transfer.transport}</td>
                            <td>{transfer.driver}</td>
                        </tr>
                    );
                })}
            </table>

            <div className={style["selected"]}>
                {JSON.stringify(selectedTransfer)}
            </div>
        </div>
    );
};

export default ShowAllTransfer;
