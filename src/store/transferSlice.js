import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
    fetchAllTransfers,
    fetchCreateTransfer,
    fetchDeleteTransfer,
    fetchUpdateTransfer,
} from "assets/workWithApi";

// First, create the thunk
const fetchTransfers = createAsyncThunk(
    "transfers/fetchTransfers",
    async () => {
        const response = await fetchAllTransfers();

        const data = await response.json().then((data) => data);

        return data;
    }
);

const createTransfer = createAsyncThunk(
    "transfers/createTransfer",
    async (transfer) => {
        await fetchCreateTransfer(transfer);
        const response = await fetchAllTransfers();

        const data = await response.json().then((data) => data);

        return data;
    }
);

const updateTransfer = createAsyncThunk(
    "transfers/updateTransfer",
    async (payload) => {
        const { id, transfer } = payload;

        await fetchUpdateTransfer(id, transfer);
        const response = await fetchAllTransfers();

        const data = await response.json().then((data) => data);

        return data;
    }
);

const deleteTransfer = createAsyncThunk(
    "transfers/deleteTransfer",
    async (payload) => {
        const { id } = payload;
        await fetchDeleteTransfer(id);
        const response = await await fetchAllTransfers();

        const data = await response.json().then((data) => data);

        return data;
    }
);

const initialState = {
    status: "",
    transfers: [],
};

export const transferSlice = createSlice({
    name: "transfers",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchTransfers.pending]: (state) => {
            state.status = "pending";
        },
        [fetchTransfers.fulfilled]: (state, action) => {
            state.status = "fulfilled";
            state.transfers = action.payload;
        },
        [fetchTransfers.rejected]: (state) => {
            state.status = "rejected";
        },

        [createTransfer.pending]: (state) => {},
        [createTransfer.fulfilled]: (state, action) => {
            state.transfers = action.payload;
        },
        [createTransfer.rejected]: (state) => {},

        [updateTransfer.pending]: (state) => {},
        [updateTransfer.fulfilled]: (state, action) => {
            state.transfers = action.payload;
        },
        [updateTransfer.rejected]: (state) => {},

        [deleteTransfer.pending]: (state) => {},
        [deleteTransfer.fulfilled]: (state, action) => {
            state.transfers = action.payload;
        },
        [deleteTransfer.rejected]: (state) => {},
    },
});

export { fetchTransfers, createTransfer, updateTransfer, deleteTransfer };

export const { addNewTransfer } = transferSlice.actions;

export default transferSlice.reducer;
