import React from 'react';
import ReactDOM from 'react-dom';
import { TimerComponent } from 'components/TimerComponent';

// 🐇🐇🐇🐇🐇🐇
// Hooks
// 🐇🐇🐇🐇🐇🐇
export default class Timer extends React.Component {
  startTime = performance.now();
  state = { time: performance.now() };
  componentDidMount = () => {
    this.timer = setTimeout(() => {
      this.setState({ time: performance.now() });
    });
  };
  componentDidUpdate = () => {
    this.timer = setTimeout(() => {
      this.setState({ time: performance.now() });
    });
  };
  componentWillUnmount = () => {
    if (this.timer) clearTimeout(this.timer);
  };
  render() {
    const _time = Math.round(this.state.time - this.startTime);
    return <TimerComponent time={_time} />;
  }
}

// export default function Timer() {
//   const startTime = React.useRef(performance.now());
//   const [time, setTime] = React.useState(performance.now());
//   React.useEffect(() => {
//     const id = setTimeout(() => {
//       ReactDOM.flushSync(() => {
//         setTime(performance.now());
//       });
//     }, 0);
//     return () => clearTimeout(id);
//   });
//   const _time = Math.round(time - startTime.current);
//   return <TimerComponent time={_time} />;
// }
