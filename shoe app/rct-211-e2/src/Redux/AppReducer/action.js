//Create ActionCreator functions here
import axios from "axios";
import * as types from "./actionTypes";
// import axios from "axios"
// console.log(types)
// action object creator

const getShoes=(params)=>(dispatch) =>{
    dispatch({type:types.GET_SHOES_DATA_REQUEST});
    axios
    .get("/shoes", params)
    .then((r) => dispatch({ type:types.GET_SHOES_DATA_SUCCESS, payload:r.data }))
    .catch((e) => dispatch({type:types.GET_SHOES_DATA_FAILURE,payload:e}));
}

export {
    getShoes,
}