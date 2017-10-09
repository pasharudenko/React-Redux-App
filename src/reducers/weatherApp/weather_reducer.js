import { FEATCH_WEATHER } from '../../actions/types';

export default function ( state = [], action) {
    switch (action.type)
    {
        case FEATCH_WEATHER:
            return [ action.payload.data, ...state ]
    }
    return state;
}

