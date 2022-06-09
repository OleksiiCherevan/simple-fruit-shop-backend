import style from "./index.module.css";
import React, { useEffect, useState } from "react";
import TableViewTransfers from "../../01-blocks/TableViewTransfers";

import { updateTransfer, fetchTransfers, addNewTransfer, createTransfer } from "store/transferSlice";
import { useDispatch } from "react-redux";
const CreateNewTransfer = (props) => {
    const dispatch = useDispatch();

    const [addressFrom, setAddressFrom] = useState("");
    const [addressTo, setAddressTo] = useState("");
    const [driver, setDriver] = useState("");
    const [transport, setTransport] = useState("");

    const setFieldsFromTransfer = (transfer) => {
        const {addressFrom, addressTo, driver, transport} = transfer;
      
        setAddressFrom(addressFrom);
        setAddressTo(addressTo);
        setDriver(driver._id);
        setTransport(transport._id);
    }

    const handleCreate = (e) => {
        const newTransfer = {
            addressFrom,
            addressTo,
            driver,
            transport,
        };

        dispatch(createTransfer({transfer: newTransfer}));
    };

    return (
        <div className={style["view"]}>
            <div className={style["fields"]}>
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
                <button onClick={handleCreate}>Add new transfer</button>
            </div>

            <TableViewTransfers onIndexChange={(data) => setFieldsFromTransfer(data)}></TableViewTransfers>
        </div>
    );
};

export default CreateNewTransfer;
