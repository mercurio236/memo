import { RESOLUTION_CAM, SAVE_VIDEO, VIDEO_ASYNC } from './action';

const initialState = {
    resolutionCam: '',
    saveVideoList: [],

    
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case RESOLUTION_CAM:
            return {
                ...state,
                resolutionCam: payload
            }
        case SAVE_VIDEO:
            return{
                ...state,
                saveVideoList: payload
            }
       

        default:
            return state
    }
}