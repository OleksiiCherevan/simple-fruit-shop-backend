import { sub_navs } from "assets/mock_data";
import Logo from "components/00-atoms/00-meta/Logo";
import NavHorizontal from "components/01-molecules/05-nav/NavHorizontal";
import Main from "components/04-pages/Main";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createTransfer, fetchTransfers } from "store/transferSlice";
import "./App.css";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTransfers());
    }, []);

    return (
        <BrowserRouter>
            <div className="app">
                <div className="container">
                    <header className="header">
                        <Logo></Logo>
                        <NavHorizontal navs={sub_navs}></NavHorizontal>
                    </header>

                    <main className="main">
                        <Main></Main>
                    </main>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
