import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Slice Object
//////////////////////////
export const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        filters: [],
        isFetchingFilters: false,
        failedToFetchFilters: false
    },
    reducers: {
        addFilter: (state, action) => {
            state.filters.push(action.payload)
        },
        removeFilter: (state, action) => {
            state.filters.filter(item => item !== action.payload)
        },
        toggleDisplay: (state, action) => {
            const index = action.payload;
            state.filters[index].display === true ? state.filters[index].display = false : state.filters[index].display = true;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilters.pending, (state, action) => {
                state.isFetchingFilters = true;
                state.failedToFetchFilters = false;
            })
            .addCase(fetchFilters.fulfilled, (state, action) => {
                state.isFetchingFilters = false;
                state.failedToFetchFilters = false;
                action.payload.forEach(filter => state.filters.push(filter));
            })
            .addCase(fetchFilters.rejected, (state, action) => {
                state.isFetchingFilters = false;
                state.failedToFetchFilters = true;   
            })
    }
});

// Selectors
//////////////////////////
export const selectFilters = (state) => state.menu.filters;

// Asynchronous Thunks
//////////////////////////
export const fetchFilters = createAsyncThunk(
    'menu/fetchFilters',
    async () => {
        const data = await fetch('/filters');
        const json = await data.json();
        return json;
    }
)

// Exports
//////////////////////////
export const {
    addFilter,
    removeFilter,
    toggleDisplay
 } = menuSlice.actions;

export default menuSlice.reducer;
