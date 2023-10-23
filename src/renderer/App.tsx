import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
// import './App.css';

// function Hello() {
//   return (
//     <div>
//       <div className="Hello">
//         <img width="200" alt="icon" src={icon} />
//       </div>
//       <h1>test</h1>

//     </div>
//   );
// }

// export default function App() {
//   return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Hello />} />
    //   </Routes>
    // </Router>
//     <div>あ</div>
//   );
// }

// import React from 'react';
import logo from '../../assets/icon.svg';
import './App.css';
import {useStopwatch} from "react-timer-hook";

const ResetButton = (props: {clickEvent:() => void}): JSX.Element => {
    return <button onClick={props.clickEvent}>RESET</button>
}

const StartPauseButton = (props: {running: boolean, clickEvent: () => void}): JSX.Element => {
    if (!props.running) {
        return (<button onClick={props.clickEvent}>START</button>)
    }

    return (<button onClick={props.clickEvent}>PAUSE</button>)
}

const elapse = (running: boolean, hours: number, minutes: number, seconds:number): string => {

return hours.toString().padStart(2, '0')
    + ':' + minutes.toString().padStart(2, '0')
    + ':' + seconds.toString().padStart(2, '0');
}

export default function App() {
    const {
        seconds,
        minutes,
        hours,
        isRunning,
        start,
        pause,
        reset
    } = useStopwatch({autoStart: false});

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/> Stop Watch
            </header>
            <section className='main'>
                <div>
                    <div className='timer'>
                        {elapse(isRunning, hours, minutes, seconds)}
                    </div>
                </div>
                <div className='buttons'>
                    <ResetButton clickEvent={() => {
                        // 2回ボタンを押すとちゃんとリセットされるんだけど…
                        reset();
                        pause();
                    }} />
                    <StartPauseButton running={isRunning} clickEvent={() => {
                        if (isRunning) {
                            pause();
                        } else {
                            start();
                        }
                    }} />
                </div>
            </section>
            <footer>
                <a className='App-link' href='https://github.com/satoshi-nishinaka/stop-watch'>satoshi-nishinaka/stop-watch</a>
            </footer>
        </div>
    );
}