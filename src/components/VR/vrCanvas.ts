

export const getCanvas = ( canvasId : string ) : HTMLCanvasElement =>{

    const canvas : HTMLCanvasElement = document.querySelector(`#${canvasId}`);
    return canvas ;

}