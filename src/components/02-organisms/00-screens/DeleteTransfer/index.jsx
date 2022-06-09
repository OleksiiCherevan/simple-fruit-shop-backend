import style from "./index.module.css";
import React, { useEffect, useState } from "react";
import TableViewTransfers from "../../01-blocks/TableViewTransfers";

import {
    updateTransfer,
    fetchTransfers,
    addNewTransfer,
    deleteTransfer,
} from "store/transferSlice";
import { useDispatch } from "react-redux";
const DeleteTransfer = (props) => {
    const dispatch = useDispatch();

    const [transfer, setTransfer] = useState({});

    const handleDelete = (e) => {
        
        if (!window.confirm("Are you shure")) {
            return;
        }

        dispatch(deleteTransfer({ id: transfer._id }));

        dispatch(fetchTransfers());
    };

    return (
        <div className={style["view"]}>
            <TableViewTransfers
                onIndexChange={(data) => setTransfer(data)}
            ></TableViewTransfers>

            <button onClick={handleDelete}> Delete selected </button>
        </div>
    );
};

export default DeleteTransfer;
