import { LEADERS } from '../shared/leaders.js';


// reducer function which manages only the leaders
export const Leaders = (state = LEADERS, action) => {
    switch(action.type) {
        default:
            return state;

    }
}