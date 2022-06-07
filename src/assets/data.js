const navs = [
    { image: "", text: "Transfers", href: "/transfers" },
    { image: "", text: "Transports", href: "/transports" },
    { image: "", text: "Drivers", href: "/drivers" },
];

const sub_navs = [
    { image: "", text: "Table view", href: "/show" },
    { image: "", text: "Create", href: "/create" },
    { image: "", text: "Update", href: "/update" },
    { image: "", text: "Delete", href: "/delete" },
];

const transfers = [
    {
        "_id": "6298f28fe750e1078d32b86d",
        "dateStart": "2022-06-02T17:25:35.916Z",
        "addressFrom": "VITI",
        "addressTo": "A0476",
        "transport": "6298562b0f1a9872abf84757",
        "driver": "6298eb95f288d631c582afff",
        "__v": 0
    },
    {
        "_id": "6299a0f5192105b9e2e8b6c1",
        "dateStart": "2022-06-03T05:49:41.260Z",
        "addressFrom": "VITI",
        "addressTo": "A0476",
        "transport": "6298562b0f1a9872abf84757",
        "driver": "6298eb95f288d631c582afff",
        "__v": 0
    },
    {
        "_id": "6299a19ffef27cdade37a205",
        "dateStart": "2022-06-03T05:52:31.059Z",
        "addressFrom": "VITI",
        "addressTo": "A0476",
        "transport": "6298562b0f1a9872abf84757",
        "driver": "6298eb95f288d631c582afff",
        "__v": 0
    },
    {
        "_id": "6299a1a6fef27cdade37a208",
        "dateStart": "2022-06-03T05:52:38.869Z",
        "addressFrom": "VITI",
        "addressTo": "A0476",
        "transport": "6298562b0f1a9872abf84757",
        "driver": "6298eb95f288d631c582afff",
        "__v": 0
    }
]

const transports = [
    {
        "_id": "6298562b0f1a9872abf84757",
        "name": "Kraz 4320",
        "__v": 0
    },
    {
        "_id": "6298563d0f1a9872abf84759",
        "name": "Volga",
        "__v": 0
    }
]

const drivers = [
    {
        "_id": "6297606e5f6fbd6b21a91a36",
        "name": "hell",
        "__v": 0
    },
    {
        "_id": "629850d2c279a6d1b5984052",
        "name": "Dmitro",
        "__v": 0
    },
    {
        "_id": "6298eb95f288d631c582afff",
        "name": "Oleksii",
        "__v": 0
    },
    {
        "_id": "6298ebeb7227d8e30f6abe19",
        "name": "Oleksii",
        "__v": 0
    }
]
export { navs, sub_navs, transfers, transports, drivers };
