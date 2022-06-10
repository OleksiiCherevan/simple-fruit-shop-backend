export const formatDate = (time) => {
    if (!time) {
        return;
    }

    if (typeof time === "string") {
        return time.split("T")[0];
    }

    const date = new Date(time);

    let year = date.getFullYear();
    let month = date.getMonth();
    month = month < 10 ? "0" + (month + 1) : month + 1;

    let day = date.getDate();
    day = day < 10 ? "0" + day : day;

    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    return `${year}-${month}-${day}`;
};
