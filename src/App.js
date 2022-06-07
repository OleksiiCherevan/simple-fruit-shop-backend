import Logo from "components/00-atoms/01-meta/Logo";
import "./App.css";
import { useState } from "react";

import { navs, sub_navs, transfers, drivers, transports } from "assets/data";

import NavHorizontal from "components/01-molecules/05-nav/NavHorizontal";
import NavVertical from "components/01-molecules/05-nav/NavVertical";

import ShowAllTransfer from "components/01-molecules/00-menu-show-all/ShowAllTransfer";
import ShowAllItem from "components/01-molecules/00-menu-show-all/ShowAllItem";

const getComponentFromSubtypesWithType = (type, subType) => {
    let menuItem = null;

    if (type === "Transfers") {
        menuItem = getTransferComponentFromSubtype(subType);
    }
    if (type === "Drivers") {
        menuItem = getDriverComponentFromSubtype(subType);
    }
    if (type === "Transports") {
        menuItem = getTransportComponentFromSubtype(subType);
    }

    return menuItem;
};

const getTransferComponentFromSubtype = (subtype) => {
    let item = null;

    if (subtype === "Table view") {
        item = <ShowAllTransfer transfers={transfers}></ShowAllTransfer>;
    }

    if (subtype === "Create") {
    }
    if (subtype === "Update") {
    }
    if (subtype === "Delete") {
    }

    return item;
};

const getDriverComponentFromSubtype = (subtype) => {
    let item = null;

    if (subtype === "Table view") {
        item = <ShowAllItem items={drivers}></ShowAllItem>;
    }

    if (subtype === "Create") {
    }
    if (subtype === "Update") {
    }
    if (subtype === "Delete") {
    }

    return item;
};

const getTransportComponentFromSubtype = (subtype) => {
    let item = null;

    if (subtype === "Table view") {
        item = <ShowAllItem items={transports}></ShowAllItem>;
    }

    if (subtype === "Create") {
    }
    if (subtype === "Update") {
    }
    if (subtype === "Delete") {
    }

    return item;
};
function App() {
    const [type, setType] = useState(navs[0].text);
    const [subType, setSubType] = useState(sub_navs[0].text);

    return (
        <div className="app">
            <header className="header">
                <Logo></Logo>

                <NavVertical
                    text="Menu"
                    navs={navs}
                    onChange={(theme) => setType(theme)}
                ></NavVertical>
            </header>

            <div className="container">
                <main className="main">
                    <div className="sub-header">
                        <NavHorizontal
                            text={type}
                            navs={sub_navs}
                            onChange={(theme) => setSubType(theme)}
                        ></NavHorizontal>
                    </div>

                    <div className="table-header">{subType}</div>

                    {getComponentFromSubtypesWithType(type, subType)}
                </main>
            </div>
        </div>
    );
}

export default App;
