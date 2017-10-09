import { SELECTED_USER } from "../../actions/types";

export default function (state = null, action) {
    switch(action.type) {
        case SELECTED_USER:
            return action.payload;
    }
    return state;
}