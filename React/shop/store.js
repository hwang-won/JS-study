// 컴포넌트간 state 공유 편리
import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name : 'user',
    initialState : 'kim',
    reducers : {
        changeName(state){
            return 'john ' + state
        }
    }
})

export let { changeName } = user.actions 

let cart = createSlice({
    name : 'cart',
    initialState : [
        {id : 0, name : '트렉터', count : 10},
        {id : 1, name : '트렉터 부속기', count : 43},
        {id : 2, name : '존디어', count : 20},
        {id : 3, name : '존디어 부속기', count : 55},
    ]
})

export default configureStore({
    reducer: { 
        user : user.reducer,
        cart : cart.reducer
    }
}) 