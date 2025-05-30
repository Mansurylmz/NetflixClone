import { error } from "@splidejs/splide/src/js/utils";
import ActionTypes from "../actionTypes";

const initalState={
    list:[],
    isLoading:true,
    error:null
}

const listReducer=(state=initalState,action)=>{
    switch(action.type){
        case ActionTypes.LIST_LOADING:
            return {...state,isLoading:true};
        case ActionTypes.LIST_ERROR:
            return {...state,isLoading:false,error:action.payload};
        case ActionTypes.LIST_SUCCES:
            return {...state,isLoading:false,error:null,list:action.payload};
        case ActionTypes.ADD_TO_LIST:
            const updated=state.list.concat(action.payload)
            return {...state,list:updated};
        case ActionTypes.REMOVE_FROM_LIST:
           const filtered= state.list.filter((i)=>i.id!==action.payload.id)
            return {...state,list:filtered};
       default:
        return state
    }
}
export default listReducer