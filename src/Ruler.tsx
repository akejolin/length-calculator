import React, {useEffect, useState} from 'react';

import './ruler.css';
import FlexView from './flexView';

interface Props {
  reversed?: boolean
  lengthCm: number;
  lengthPx: number;
  unitPxLength: number;
}

function Ruler({lengthCm,lengthPx, unitPxLength, reversed=false}: Props) {
  const rularArr = Array.from(Array(lengthCm + 1).keys())
  return (
    <>
      <div>
        <ol reversed id={`ruler${reversed ? '-upwards':''}`} style={{ position: 'absolute', height: lengthPx-1}}>
          {rularArr.map(() => (
            <li style={{height:`${unitPxLength}px`}}></li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default Ruler;
