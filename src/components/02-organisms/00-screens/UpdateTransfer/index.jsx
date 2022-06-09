import style from "./index.module.css";
import React, { useEffect, useState } from "react";
import TableViewTransfers from "../../01-blocks/TableViewTransfers";

import { updateTransfer, fetchTransfers } from "store/transferSlice";
import { useDispatch } from "react-redux";

import { formatDate } from "assets/date_utils";
const UpdateTransfer = (props) => {
    const dispatch = useDispatch();

    const [transfer, setTransfer] = useState({});

    const [dateStart, setDateStart] = useState(formatDate(Date.now()));
    const [dateStop, setDateStop] = useState(formatDate(Date.now()));

    const [addressFrom, setAddressFrom] = useState("");
    const [addressTo, setAddressTo] = useState("");
    const [driver, setDriver] = useState("");
    const [transport, setTransport] = useState("");

    const setFields = (transfer) => {
        const { addressFrom, addressTo, driver, transport } = transfer;

        setTransfer(transfer);

        setAddressFrom(addressFrom);
        setAddressTo(addressTo);
        setDriver(driver._id);
        setTransport(transport._id);
    };

    const handleChange = (transfer) => {
        setFields(transfer);
    };

    const handleUpdate = (e) => {
        const newTransfer = { ...transfer };
        newTransfer.dateStart = dateStart;
        newTransfer.dateStop = dateStop;
        newTransfer.addressFrom = addressFrom;
        newTransfer.addressTo = addressTo;
        newTransfer.driver = driver._id;
        newTransfer.transport = transport._id;

        console.log(newTransfer);
        
        dispatch(updateTransfer({id:transfer._id, transfer: newTransfer}))
    };

    return (
        <div className={style["view"]}>
            <TableViewTransfers
                onIndexChange={handleChange}
            ></TableViewTransfers>

            <div className={style["fields"]}>
                <span>
                    <label htmlFor="dateStart">Date start</label>
                    <input
                        id="dateStart"
                        type="date"
                        value={dateStart}
                        onChange={(e) => setDateStart(e.target.value)}
                    ></input>
                </span>
                <span>
                    <label htmlFor="dateStop">Date stop</label>
                    <input
                        id="dateStop"
                        type="date"
                        value={dateStop}
                        onChange={(e) => setDateStop(e.target.value)}
                    ></input>
                </span>
                <span>
                    <label htmlFor="addressFrom">Address from</label>
                    <input
                        id="addressFrom"
                        type="text"
                        value={addressFrom}
                        onChange={(e) => setAddressFrom(e.target.value)}
                    ></input>
                </span>
                <span>
                    <label htmlFor="addressTo">Address to</label>
                    <input
                        id="addressTo"
                        type="text"
                        value={addressTo}
                        onChange={(e) => setAddressTo(e.target.value)}
                    ></input>
                </span>
                <span>
                    <label htmlFor="driver">Driver</label>
                    <input
                        id="driver"
                        type="text"
                        value={driver}
                        onChange={(e) => setDriver(e.target.value)}
                    ></input>
                </span>
                <span>
                    <label htmlFor="transport">Transport</label>
                    <input
                        id="transport"
                        type="text"
                        value={transport}
                        onChange={(e) => setTransport(e.target.value)}
                    ></input>
                </span>
                <button onClick={handleUpdate}>Update transfer</button>
            </div>
        </div>
    );
};

export default UpdateTransfer;
