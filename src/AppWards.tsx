import React, {useEffect, useState} from 'react';
import './App.css';
import {trueCmToPx, pxToTrueCm} from './helpers/calculators'
import FlexView from './flexView';
import Ruler from './Ruler'
import Line from './Line'
import Progress from './Progress'

function App() {

  const recordCm = 624

  const [init, setInit] = useState<boolean>(true);
  //const [dpi, setDpi] = useState<number>(96);
  const [duplantisCm] = useState<number>(recordCm);
  const [duplantisPx] = useState<number>(trueCmToPx(recordCm));
  const [scrollPosT, setScrollPosT] = useState<number>(0);

  useEffect(() => {
    setInit(false)
  })

  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, document.body.offsetHeight);
    }
    window.scrollTo(0, document.body.offsetHeight);
    setScrollPosT(0);
    console.log('i fkn run')

    document.addEventListener("scroll", (event: Event) => {
      const messuredScrollY = pxToTrueCm((duplantisPx-window.scrollY));
      setScrollPosT(
        messuredScrollY > duplantisCm
        || messuredScrollY === duplantisCm ?
          duplantisCm :
          messuredScrollY
      );
    });
  }, [init])

  return (
  <>
    <Progress init={init} count={scrollPosT} />
    <FlexView style={{flexDirection: 'column'}}>
      <FlexView id="header" style={{height: '50vh'}}>
        <h1>Rubrik ovanför</h1>
      </FlexView>
      <FlexView id="body" style={{height: duplantisPx, position: 'relative'}}>
      <Ruler reversed unitPxLength={trueCmToPx(1)} lengthCm={duplantisCm} lengthPx={duplantisPx} />
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
