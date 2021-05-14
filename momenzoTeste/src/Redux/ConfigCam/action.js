export const RESOLUTION_CAM = 'RESOLUTION_CAM';

export const resolutionCam = evento =>({
    type: RESOLUTION_CAM,
    payload: evento
})

export const SELECTED_RESOLUTION = 'SELECTED_RESOLUTION';

export const selectedRes = evento => ({
    type: SELECTED_RESOLUTION,
    payload: evento
})