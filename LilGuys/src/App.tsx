import {useState, useEffect, useRef} from "react";
import "./App.css";
import Timer from './components/Timer';

function App() {
  

  

  const [timerHours, setTimerHours] = useState(1);
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);

  const [isVisible,setVisible] = useState(true);

  let interval = useRef<number | null>(null);
  const [clickCount, setClickCount] = useState(0);

  const startTimer=()=>{
    clickCount + 1;
    const endTime = Date.now() + 1 * 60 * 60 * 1000;

    interval.current = setInterval(() => {
      const now = Date.now();
      const distance = endTime - now;

    if (clickCount > 1){
      if (interval.current !== null){
        clearInterval(interval.current!);
      }
        setTimerHours(0);
        setTimerMinutes(0);
        setTimerSeconds(0);
        setVisible(false);
      setClickCount(0);
      return;
    }

    if (distance <= 0) {
     if (interval.current !== null){
      clearInterval(interval.current);
    }
      // setTimerHours(0);
      // setTimerMinutes(0);
      // setTimerSeconds(0);
      // setVisible(false);
      return;
    }
      const hours = Math.floor(distance / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimerHours(hours);
      setTimerMinutes(minutes);
      setTimerSeconds(seconds);
    }, 1000);
  };

  useEffect(() => {
    return () => {
      if (interval.current !== null){
          clearInterval(interval.current);
        }
      }
  }, []);
//   const handleClick = () => {
//     if (clickCount > 1){
//         startTimer();
//         setTimerHours(0);
//         setTimerMinutes(0);
//         setTimerSeconds(0);
//         setVisible(false);
//       setClickCount(0);
//     }
//     clickCount + 1;

//     startTimer();
// }
  function sendGuy() {
    setVisible(false);
  }
  return (
      <div className="w-180 h-120"> 
        <img src = '/assets/lil_guy_art.png' width={100} height={50} className={`${isVisible ? 'visible' : 'invisible'}`} />
        <h1>
          Hello LilGuys!
        </h1>
        <Timer 
        timerHours={timerHours} 
        timerMinutes={timerMinutes} 
        timerSeconds={timerSeconds}
        />
          <button type="button" onClick={startTimer} className={`bg-blue-300 active:bg-blue-200`}>
            Send out the lil guys!
          </button>
        </div>

  );
}

export default App
