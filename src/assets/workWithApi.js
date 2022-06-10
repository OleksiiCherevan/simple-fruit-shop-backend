export const fetchUpdateTransfer = async (id, transfer) =>
    await fetch("http://localhost:3000/api/transfer/" + id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, transfer }), // body data type must match "Content-Type" header
    })
        .then((response) => {
            return response;
        })
        .catch((error) => {
            throw error;
        });

export const fetchCreateTransfer = async (transfer) => {
    transfer.driver = transfer.driver._id;
    transfer.transport = transfer.transport._id;

    await fetch("http://localhost:3000/api/transfer", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({transfer}), // body data type must match "Content-Type" header
    }).then((response) => {
        return response;
    });
}
export const fetchDeleteTransfer = async (id) =>
    await fetch("http://localhost:3000/api/transfer/" + id, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
    }).then((response) => {
        return response;
    });

export const fetchAllTransfers = async () =>
    await fetch("http://localhost:3000/api/transfers").then(
        (response) => response
    );
