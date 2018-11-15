import React from 'react';
import ReactDOM from 'react-dom';

// export default class Timer extends React.Component {
//   startTime = performance.now();
//   state = { time: performance.now() };
//   componentDidMount = () => {
//     this.timer = setTimeout(() => {
//       this.setState({ time: performance.now() });
//     });
//   };
//   componentDidUpdate = () => {
//     this.timer = setTimeout(() => {
//       this.setState({ time: performance.now() });
//     });
//   };
//   componentWillUnmount = () => {
//     if (this.timer) clearTimeout(this.timer);
//   };
//   render() {
//     return (
//       <div className="Fallback">
//         <h3>
//           <span role="img" aria-label="spinner">
//             🌀 Loading...
//           </span>
//         </h3>
//         <b>{Math.round(this.state.time - this.startTime)} ms</b>
//       </div>
//     );
//   }
// }

export default function Timer() {
  const startTime = React.useRef(performance.now());
  const [time, setTime] = React.useState(performance.now());
  React.useEffect(() => {
    const id = setTimeout(() => {
      ReactDOM.flushSync(() => {
        setTime(performance.now());
      });
    }, 0);
    return () => clearTimeout(id);
  });
  const _time = Math.round(time - startTime.current);
  return <TimerComponent time={_time} />;
}

// unimportant implementation detail
function TimerComponent({ time }) {
  return (
    <div className="Fallback">
      <h3>
        <span role="img" aria-label="spinner">
          🌀 App Level Suspense
        </span>
      </h3>
      <b>{time} ms</b>
    </div>
  );
}
