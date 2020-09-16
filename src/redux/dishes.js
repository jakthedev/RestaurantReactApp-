import { DISHES } from '../shared/dishes';


// reducer function which manages only the dishes
export const Dishes = (state = DISHES, action) => {
    switch(action.type) {
        default:
            return state;

    }
}