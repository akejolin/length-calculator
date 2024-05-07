import React, {useEffect, useState} from 'react';
import './App.css';
import {pixelsToCm, cmToPixelsExact, trueCmToPx, pxToTrueCm} from './helpers/calculators'
import FlexView from './flexView';
import Ruler from './Ruler'
import Line from './Line'
import Progress from './Progress'

function App() {

  const [init, setInit] = useState<boolean>(true);
  const [dpi, setDpi] = useState<number>(96);
  const [duplantisCm] = useState<number>(624);
  const [duplantisPx, setDuplantisPx] = useState<number>(0);
  const [scrollPosB, setScrollPosB] = useState<number>(0);
  const [scrollPosT, setScrollPosT] = useState<number>(0);

  useEffect(() => {
    const messuredDpi = document.getElementById("dpi")?.offsetHeight || 96;
    setDpi(messuredDpi)
    document.addEventListener("scroll", (event: Event) => {
      //const messuredScrollY = pixelsToCm(window.scrollY, dpi)
      const messuredScrollY = pxToTrueCm(window.scrollY);
      setScrollPosT(
        messuredScrollY > duplantisCm
        || messuredScrollY === duplantisCm ?
          duplantisCm :
          messuredScrollY
      );
      //setScrollPosB((messuredScrollY + pixelsToCm(window.innerHeight, dpi)));
    });
    setInit(false);
  })

  useEffect(() => {
    //setDuplantisPx(cmToPixelsExact(duplantisCm, dpi));
    setDuplantisPx(trueCmToPx(duplantisCm));
  }, [duplantisCm, dpi])

  useEffect(() => {
    //console.log('duplantisPx was changed: ', duplantisPx);
  }, [duplantisPx])

  return (
  <>
    <div id="dpi"></div>
    <Progress init={init} count={scrollPosT} />
    <FlexView style={{flexDirection: 'column'}}>
      <FlexView id="header" style={{height: '50vh'}}>
        <h1>Rubrik ovanför</h1>
      </FlexView>
      <FlexView id="body" style={{height: duplantisPx, position: 'relative'}}>
      <Ruler unitPxLength={trueCmToPx(1)} lengthCm={duplantisCm} lengthPx={duplantisPx} />
      <Line lengthPx={duplantisPx} />
      </FlexView>
      <FlexView id="footer" style={{height: '50vh'}}>
        <h1>Rubriken under</h1>
      </FlexView>
    </FlexView>

  </>
  );
}

export default App;
