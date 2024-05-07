import React, {useState, useEffect}from 'react';
import './progress.css';
import FlexView from './flexView';

interface Props {
  count: number;
  init: boolean;
}

function Progress({count, init}: Props) {

  const [goalCompleted, setGoalCompleted] = useState<boolean>(false);

  useEffect(() => {
    if (count > 623) {
      setGoalCompleted (true);
    }
  }, [count])

  return (
    <>
        <div style={{position: 'fixed', left: 0, top: 0, width: '100vw', height: '100vh', zIndex: 100}}>
          <FlexView>

              <h1 className={count > 623 ? 'zoomed-in' : !init && goalCompleted ? 'zoomed-out': 'zoomed-out-hard'} style={{
                height: 'auto',
                width: 'unset',
                padding: 20,
                backgroundColor: 'red',
                border: '5px solid white',
                display: 'block',
              }}>
                {(count / 100).toFixed(2)}m
              </h1>
          </FlexView>
        </div>
    </>
  );
}

export default Progress;
