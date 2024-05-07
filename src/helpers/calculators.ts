

export function trueCmToPx(cm:number){
    const dpr     = window.devicePixelRatio;
    const inch    = 2.54; //1inch = 25.4 mm
    const ppi     = 264; //Ipad3 density

    return ((cm/inch)*ppi)/dpr;
}
export function pxToTrueCm(px:number){
  const dpr     = window.devicePixelRatio;
  const inch    = 2.54; //1inch = 25.4 mm
  const ppi     = 264; //Ipad3 density
  return Number(((px * dpr) / (ppi / inch)).toFixed(1));
}

export function pixelsToCm(pixels:number, dpi:number) {
  return Math.ceil(pixels / dpi * 2.54);
}

export function cmToPixels(cm:number, dpi:number) {
  return Math.ceil(cm * dpi / 2.54);
}


export function cmToPixelsExact(cm:number, dpi:number) {
  return cm * dpi / 2.54;
}



