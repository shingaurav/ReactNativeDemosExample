import {ADD_FOOD,DELETE_FOOD} from "../actions/type";

export const addFood = (food)=> ({
    type : ADD_FOOD,
    data : food
});

export const deleteFood = (key) => ({
    type : DELETE_FOOD,
    key : key
});