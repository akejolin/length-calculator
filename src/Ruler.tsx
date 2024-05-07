import React, {useEffect, useState} from 'react';

import './ruler.css';
import FlexView from './flexView';

interface Props {
  lengthCm: number;
  lengthPx: number;
  unitPxLength: number;
}

function Ruler({lengthCm,lengthPx, unitPxLength}: Props) {
  const rularArr = Array.from(Array(lengthCm + 1).keys())
  return (
    <>
      <div>
        <ol id="ruler" style={{ position: 'absolute', height: lengthPx-1}}>
          {rularArr.map(() => (
            <li style={{height:`${unitPxLength}px`}}></li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default Ruler;
