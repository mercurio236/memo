import { RESOLUTION_CAM, SAVE_VIDEO, ESTABILIDADE_CAM, DICAS_VIDEOS } from './action';

const initialState = {
    resolutionCam: '',
    saveVideoList: [],
    estabilidadeCam: false,
    dicasVideosStatus: false

    
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
        case ESTABILIDADE_CAM:
            return{
                ...state,
                estabilidadeCam: payload
            }
        case DICAS_VIDEOS:
            return{
                ...state,
                dicasVideosStatus: payload
            }
       

        default:
            return state
    }
}