import { configureStore } from "@reduxjs/toolkit"
import banuser from "./banuser"


const store = configureStore({
    reducer:{
        banuser
    }
})

export default store