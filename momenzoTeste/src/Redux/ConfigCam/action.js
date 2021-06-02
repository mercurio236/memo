export const RESOLUTION_CAM = 'RESOLUTION_CAM';

export const resolutionCam = evento =>({
    type: RESOLUTION_CAM,
    payload: evento
})

export const SAVE_VIDEO = "SAVE_VIDEO";

export const saveVideoList = evento =>({
    type: SAVE_VIDEO,
    payload: evento
})

export const ESTABILIDADE_CAM = "ESTABILIDADE_CAM";

export const estabilidadeCam = evento =>({
    type: ESTABILIDADE_CAM,
    payload: evento
})

export const DICAS_VIDEOS = 'DICAS_VIDEOS';

export const dicasVideosStatus = evento =>({
    type: DICAS_VIDEOS,
    payload: evento
})