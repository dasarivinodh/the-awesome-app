import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {authReducer} from './authReducer';
import { gadgetStoreReducer } from './gadgetsReducer';
import thunk from 'redux-thunk';


const reducers = combineReducers({
    auth: authReducer,
    gadgets:gadgetStoreReducer
});

//middleware (logging)
const loggingmiddleware =(store:any)=>{

  return (next:any) =>{
    return (actions:any)=>{
        console.log("Log Middle ware doing some operaions :" ,actions);
        console.log("Log Middle ware doing some operaions current state :" ,store.getState());
        const result =next(actions);
        console.log("Log Middle ware doing some operaions updated state :" ,store.getState());
    } 
  }

}


export const store = createStore(
    reducers, 
    applyMiddleware(loggingmiddleware,thunk) );


// export const store = createStore(
//                             reducers, 
//                             (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());


export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;