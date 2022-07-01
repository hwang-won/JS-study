// 컴포넌트간 state 공유 편리
import { configureStore, createSlice } from '@reduxjs/toolkit';

let user = createSlice({
    name : 'user',
    initialState : { name : '안녕', age : 25 },
})

let cart = createSlice({
    name : 'cart',
    initialState : [
        {id : 0, name : '트렉터', count : 1},
        {id : 1, name : '트렉터 부속기', count : 1},
    ],
    reducers : {
        addCount(state, action){
            let chk = state.findIndex((a)=>{ return a.id == action.payload });
            state[chk].count++;
            console.log(1);
        },
        addItem(state, action) {
            state.push(action.payload);
        }
    }
})

export let { addCount, addItem } = cart.actions 

export default configureStore({
    reducer: { 
        user : user.reducer,
        cart : cart.reducer
    }
}) 