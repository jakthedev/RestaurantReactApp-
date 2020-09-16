import * as ActionTypes from './ActionTypes';

// This is a function that creates an action object

export const addComment = (dishId, rating, author, comment) => ({
        type: ActionTypes.ADD_COMMENT,
        // The data that needs to be carried in the action object
        payload: {
            dishId: dishId,
            rating: rating,
            author: author,
            comment: comment
            // Standardize way to define an action type

        }
});
