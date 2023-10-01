import { configureStore, createSlice} from "@reduxjs/toolkit"
//remember to use /react here or you would manually have to construct the hooks based on endpoints
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


// this will allow the component to have access to the init value and actions of this particular slice
export const favoritesReducer = createSlice({
    name: 'favorites',
    initialState: [],
    reducers: {
        addCountry: (state, action) => {
            state.push(action.payload)
        },
        //need to figure out how to correctly write this delete function
        removeCountry: (state, action) => {
            return state.filter(location => location != action.payload)
        },
    },
})

//this will be our fetch call. i can export this whole thing, or destructure it to just export the hooks.
const destinationsApi = createApi({
    // must be the same as the key in your store
    reducerPath: 'destinations',
    //base URL
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://restcountries.com/v3.1'
    }),
    //all the "end pieces" you can add to the url to get certain data
    endpoints: (builder) => {
        return {
            getAllDestinations: builder.query({
                query: () => '/all'
            })
        }
    }
})

// exporting this store which we will put in the main as the provider. This allows all components to access ALL our slicers. this will go in our main.jsx file
export const store = configureStore({
    reducer: {
        favorites: favoritesReducer.reducer,
        //must be the same as the reducerPath of your createApi slicer
        destinations: destinationsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        //getDefaultMiddleware apparently returns an array so you're able to add these 2 together with the .concat function (it just returns a new array of the 2)
        return getDefaultMiddleware().concat(destinationsApi.middleware)
    }
})


//exporting the actions
export const { addCountry, removeCountry } = favoritesReducer.actions;

//exporting to hooks for API calls. use(theEndpoint)Query
export const { useGetAllDestinationsQuery } = destinationsApi