import {RESOLUTION_CAM, SELECTED_RESOLUTION} from './action';

const initialState = {
    resolutionCam: '',
}

export default (state = initialState, {type, payload}) =>{
    switch(type){
        case RESOLUTION_CAM:
            return{
                ...state,
                resolutionCam: payload
            }

        default:
            return state
    }
}