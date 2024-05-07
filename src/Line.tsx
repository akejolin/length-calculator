import React from 'react';
import './line.css';

interface Props {
  lengthPx: number;
}

function Line({lengthPx}: Props) {
  return (
    <>
        <div id={'line'} style={{position:'relative', height: lengthPx, width:20, backgroundColor: 'white' }}>
          <div className="arrow down"></div>
        </div>
    </>
  );
}

export default Line;
