import { RESOLUTION_CAM, SELECTED_RESOLUTION } from './action';

const initialState = {
    resolutionCam: '720p',
    selectedRes: ''
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case RESOLUTION_CAM:
            return {
                ...state,
                resolutionCam: payload
            }
        case SELECTED_RESOLUTION:
            return {
                ...state,
                selectedRes: payload
            }

        default:
            return state
    }
}