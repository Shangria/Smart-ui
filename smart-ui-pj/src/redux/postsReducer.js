import { FETCH_ALL_POSTS } from "./types";

 const initialState={
     allPosts:[0,0,0,0,0,0],
     noData:true
    }
 
 
 export const postReducer = (state=initialState , action)=>{
    
    switch (action.type){
        case FETCH_ALL_POSTS: return{ ...state , ...action.payload }
        default: return state;
    }
    
 }