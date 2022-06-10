import style from "./index.module.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransfers } from "store/transferSlice";
import { formatDate } from "assets/date_utils";

const TableViewTransfers = (props) => {
    const { children, onIndexChange = () => {} } = props;

    const [index, setIndex] = useState(0);

    const handleClick = (index) => {
        setIndex(index);
        
        onIndexChange(transfers[index]);
    };

    const transfers = useSelector((store) => store.transfers.transfers);

    useEffect(() => {
        if (transfers.length > 0) {
            handleClick(index);
        }
    }, [transfers]);

    return (
        <div className={style["view"]}>
            <table className={style["table"]}>
                <thead>
                    <tr className={style["tr"]}>
                        <td className={style["td_date"]}>Date start</td>
                        <td className={style["td_date"]}>Date stop</td>
                        <td className={style["td_address"]}>Address from</td>
                        <td className={style["td_address"]}>Address to</td>
                        <td className={style["td_transport"]}>Transport</td>
                        <td className={style["td_driver"]}>Driver</td>
                    </tr>
                </thead>
                <tbody>
                    {transfers.map((transfer, _index) => (
                        <tr
                            className={`${style["tr"]} ${
                                index === _index ? style["tr_selected"] : 0
                            }`}
                            key={JSON.stringify(transfer)}
                            onClick={() => handleClick(_index)}
                        >
                            <td className={style["td_date"]}>
                                {formatDate(transfer.dateStart)}
                            </td>
                            <td className={style["td_date"]}>
                                {formatDate(transfer.dateStop)}
                            </td>
                            <td className={style["td_address"]}>
                                {transfer.addressFrom}
                            </td>
                            <td className={style["td_address"]}>
                                {transfer.addressTo}
                            </td>
                            <td className={style["td_transport"]}>
                                {transfer.driver.name}
                            </td>
                            <td className={style["td_driver"]}>
                                {transfer.transport.name}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableViewTransfers;
