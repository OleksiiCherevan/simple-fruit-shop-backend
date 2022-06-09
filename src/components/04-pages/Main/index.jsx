import style from "./index.module.css";
import React from "react";
import ShowTransfers from "components/02-organisms/00-screens/ShowTransfers";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateNewTransfer from "components/02-organisms/00-screens/CreateNewTransfer";
import UpdateTransfer from "components/02-organisms/00-screens/UpdateTransfer";
import DeleteTransfer from "components/02-organisms/00-screens/DeleteTransfer";

const Main = (props) => {
    const { children } = props;

    return (
        <div className={style["page"]}>
            <Routes>
                <Route
                    path="/transfers/show"
                    element={<ShowTransfers></ShowTransfers>}
                ></Route>
                <Route
                    path="/transfers/create"
                    element={<CreateNewTransfer></CreateNewTransfer>}
                ></Route>
                <Route
                    path="/transfers/update"
                    element={<UpdateTransfer></UpdateTransfer>}
                ></Route>
                 <Route
                    path="/transfers/delete"
                    element={<DeleteTransfer></DeleteTransfer>}
                ></Route>
                <Route
                    path="/"
                    element={<ShowTransfers></ShowTransfers>}
                ></Route>
            </Routes>
        </div>
    );
};

export default Main;
