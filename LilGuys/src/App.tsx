import {useState, useEffect, useRef} from "react";
import "./App.css";
import Timer from './components/Timer';

function App() {
  

  

  const [timerHours, setTimerHours] = useState(0);
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(10);

  const [isVisible,setVisible] = useState(true);
  const [endTime,setEndTime] = useState(Date.now()+10000);
  let interval = useRef<number | null>(null);
  const [clickCount, setClickCount] = useState(0);

  const startTimer=()=>{
    clickCount + 1;
    interval.current = setInterval(() => {
      const now = Date.now();
      const distance = endTime - now;

    if (clickCount > 1){
      if (interval.current !== null){
        clearInterval(interval.current);
        interval.current = null;
      }
        setTimerHours(0);
        setTimerMinutes(1);
        setTimerSeconds(0);
        setVisible(false);
      setClickCount(0);
      return;
    }
    else{
      if (distance <= 0) {
      if (interval.current !== null){
        clearInterval(interval.current);
        interval.current = null;
      }
        setTimerHours(0);
        setTimerMinutes(1);
        setTimerSeconds(0);
        setVisible(false);
        return;
      }
  }
    }, 1000);
  };

  useEffect(() => {
    return () => {
      if (interval.current !== null){
          clearInterval(interval.current);
          interval.current==null;
          setEndTime(Date.now()+10000);
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
    setVisible(true);
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
